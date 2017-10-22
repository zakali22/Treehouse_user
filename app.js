const https = require('https');

const arguments = process.argv;

const getUserData = (user) => {
  const userUrl = `https://teamtreehouse.com/${user}.json`;
  https.get(userUrl, (response) => {
    let fullBody = '';
    response.on('data', (data) => {
      fullBody += data.toString();
    }).on('end', () => {
      const parsedData = JSON.parse(fullBody);
      console.log(parsedData);
    });
  });
};

getUserData(arguments[2]);
