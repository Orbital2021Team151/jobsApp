import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { AuthData } from '../auth/auth-data.model';
import { Highlight } from './highlight.model';

import { environment } from "../../environments/environment";
import { map } from 'rxjs/operators';
const BACKEND_URL = environment.apiUrl; //change this in the environment folder

@Injectable({
  providedIn: 'root',
})
export class HighlightService {

  highlights: Highlight[] = [];

  highlightsUpdated = new Subject<Highlight[]>();


  constructor(private router: Router, private http: HttpClient) {}

  getHighlights() {
    this.http.get<{ title: string, highlights: any }>(BACKEND_URL + 'api/highlights')
    .pipe(map(highlightData => {
      return highlightData.highlights.map(highlight => {
        console.log(highlight._id);
        return {
          id: highlight._id,
          title: highlight.title,
          summary: highlight.summary,
          content: highlight.content,
          imagePath: highlight.imagePath,
        }
      })
    }))
    .subscribe(mappedHighlights => {
      this.highlights = mappedHighlights;
      this.highlightsUpdated.next([...this.highlights]);
    })
  }

  getHighlight(title: string) {
    return {...this.highlights.find(highlight => highlight.title === title)};
  }

  getHighlightsUpdatedListener() {
    return this.highlightsUpdated.asObservable();
  }



  addHighlight(highlight: Highlight) {
    const highlightData = new FormData();

    highlightData.append("title", highlight.title);
    highlightData.append("summary", highlight.summary);
    highlightData.append("content", highlight.content);
    highlightData.append("image", highlight.image);

    this.http.post<{title: string}>(BACKEND_URL + 'api/highlights', highlightData)
    .subscribe(res => {

      if (this.highlights.length === 3) {
        this.highlights.pop();
      }
      console.log("somehow your highlight went through wilbur! here it is below")
      console.log(highlight);
      this.highlights.push(highlight);
      this.highlightsUpdated.next([...this.highlights]);
    });
  }

  deleteHighlight(id: string) {
    this.http
      .delete(BACKEND_URL + 'api/highlights/' + id)
      .subscribe((response) => {
        this.highlights = this.highlights.filter(highlight => {
          return highlight.id !== id;
        });
        console.log("successfully deleted post!");
        this.highlightsUpdated.next([...this.highlights])
      })
  }
}
