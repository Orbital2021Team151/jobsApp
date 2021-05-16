export interface Post {
  id: string, //to link with mongoDB's unique ID. automatically created by mongoose for us
  orgName: string, //organization/student group's name
  uen: string, //for non-nus charity registration number or society registration number
  studentGroupName: string, //for nus organization. should be from approved list (https://nus.edu.sg/osa/student-life/student-organisations-directory) so this is a dropdown list to select
  POC: string, //name of POC
  phoneNumber: string, //POC's contact number. should change to number if it makes it easier
  email: string, //POC's email address
  title: string, //title of job
  content: string, //description of job
  skills: string, //skills required. should be a textbox for organization to just write down instead of limiting skills by making them choose from predefined list

  //should implement calender feature if possible. Then string can be numbers instead or convert the numbers from calendar to string for storage
  startDate: string, //Start date of volunteer
  endDate: string, //End date of volunteer
  hoursRequired: string, //number of hours that a student has to commit to minimally

  beneficiaryInfo: string, //paragraph on who are the beneficiaries to let the organization write down. or could be a dropdown list
  //imagePath: string; //store image? additional feature potentially
  //creator: string; //need to check if person is authorized to edit the post. ie CCSGP admin
}
