const https = require('https');

const arguments = process.argv;
let totalScore = 0;
let name = '';

const displayScore = () => {
    console.log(`${name} has a total score of ${totalScore} points`);
};

const getUserData = (user) => {
  const userUrl = `https://teamtreehouse.com/${user}.json`;
  https.get(userUrl, (response) => {
    let fullBody = '';
    response.on('data', (data) => {
      fullBody += data.toString();
    }).on('end', () => {
      const parsedData = JSON.parse(fullBody);
      // console.log(parsedData);
      totalScore += parsedData.points.total;
      name += parsedData.name;
      displayScore();
    });
  });
};

getUserData(arguments[2]);
