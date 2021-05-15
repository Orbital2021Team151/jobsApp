const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '123',
      orgName: 'ComCLAB',
      uen: 'UEN007',
      studentGroupName: 'Clab for komputing students',
      contact: 'Mr Klaus',
      phoneNumber: '911',
      emailAddress: 'shoutingFireBuring@onTheDanceFloor.com',
      title: 'firefighter required',
      content: 'woaaaaaaahhhhh',
      skills: 'tell me what you are thinking - paradise~~~, I can see right through ya',

      startDate: '01/01/2001',
      endDate: '01/03/2003',
      hoursRequired: '27',

      beneficiaryInfo: 'OBGYNs',
      //imagePath: string;
      //creator: string;
    },

    {
      id: '321',
      orgName: 'Goodfellas',
      uen: 'GFL001',
      studentGroupName: 'Mafia',
      contact: 'Mr Mime',
      phoneNumber: '555',
      emailAddress: 'TonyCipriani@LibertyCity.com',
      title: 'mafiosi required',
      content: 'need fresh blood to join our cause',
      skills: 'jew, italian, smoke cigar, RESPECT THE DON',

      startDate: '01/01/1991',
      endDate: '01/03/1998',
      hoursRequired: '222',

      beneficiaryInfo: 'NYPD',
      //imagePath: string;
      //creator: string;
    },
  ];
  res.status(200).json({
    message: "posts fetched successfully",
    posts: posts
  });
  next();
});

module.exports = app;
