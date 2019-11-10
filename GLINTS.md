# LinkedIn Auto Send Invites

1. Open Chrome, visit [https://www.linkedin.com/mynetwork/](https://www.linkedin.com/mynetwork/)
2. Click F12 on keyboard, a left (or bottom) popup will show, you can see as below:

![](https://i.imgur.com/16Mn3dS.jpg)

3. Then, you need to switch to "Console" tab on that popup

![](https://i.imgur.com/FgVXSDi.jpg)

```javascript
let arrUsers = [];
let numberOfUsers = 0;
let intervalUsers;
let lastWindowHeight = -1;

function startScript(numberOfCon) {
  numberOfUsers = numberOfCon;
  connectWith();
}

function connectWith() {
  runInterval().then(value => sendConnections());
}

function runInterval() {
  return new Promise((resolve, reject) => {
    intervalUsers = setInterval(function() {
      window.scrollTo(0, document.body.scrollHeight);

      if (
        numberOfUsers <= arrUsers.length ||
        document.body.scrollHeight == lastWindowHeight
      ) {
        console.log(
          "Finishing interval, we already got enough users or we can not find anymore..."
        );
        clearInterval(intervalUsers);
        resolve(1);
      }

      arrUsers = document.querySelectorAll(
        'button[data-control-name="invite"]'
      );
      console.log("We got " + arrUsers.length + " users (for now)...");

      lastWindowsHeight = document.body.scrollHeight;
    }, 2000);
  });
}

function sendConnections() {
  let totalConnectionsSent = 0;

  for (let usr of arrUsers) {
    if (totalConnectionsSent >= numberOfUsers) {
      break;
    }

    usr.click();
    totalConnectionsSent += 1;
  }

  console.log("FINISHED!");
  console.log("Sent " + totalConnectionsSent + " connections.");
  console.log("Have a nice work day at Glints :)");

  alert(
    "FINISHED!\n\nSent " +
      totalConnectionsSent +
      " connections.\nHave a nice work day at Glints :)"
  );
}

// Change the number if you want to send less invite
startScript(100);
```

4. Then you paste the above code in to the editor, and press enter, that done

![](https://i.imgur.com/xZ9yB5O.jpg)

*Note: You can change the number (at the end of the code) if you wanna send less connection, I recommend to make less than 300 connection per day to keep your account safe.