import { MatNativeDateModule } from "@angular/material/core";

export interface Post {
  id: string, //to link with mongoDB's unique ID. automatically created by mongoose for us
  orgName: string, // organization/student group's name
  uen: string, //for non-nus charity registration number or society registration number

  POC: string, //name of POC
  phoneNumber: string, //POC's contact number. should change to number if it makes it easier
  email: string, //POC's email address
  title: string, //title of job
  opportunity: string[], //type of opportunity (one-time job/recurring)
  content: string, //description of job
  skills: string, //skills required. should be a textbox for organization to just write down instead of limiting skills by making them choose from predefined list

  startDate: Date, //Start date of volunteer
  endDate: Date, //End date of volunteer
  hoursRequired: string, //number of hours that a student has to commit to minimally

  beneficiaries: string[], //paragraph on who are the beneficiaries to let the organization write down. or could be a dropdown list
  //imagePath: string; //store image? additional feature potentially
  //creator: string; //need to check if person is authorized to edit the post. ie CCSGP admin

  students: {email: string, contact: number, content: string, applicationUser: string}[],
  reports: {email: string, contact: number, content: string}[],

  approved: boolean,
  creationDate: Date, //Date post was published
  publishDate: Date, //Date post was published
  creator: string,

}
