// Make Function to Do The Request
function getRepos() {
  // Assign The Request Object to Variable
  var myRequest = new XMLHttpRequest();

  // On Ready State Change => Function Called When Ready State Change
  myRequest.onreadystatechange = function() {
    // console.log(this.status);

    /*
      Ready State => The Status Of The Request
        [0] Request Not Initialized
        [1] Server Connection Established
        [2] Request Recieved
        [3] Processing Request
        [4] Request is Finished and Response is Ready
      Status => Response Status Code
        [200] OK
    */

    // If Request is Finished and Response is Ready and Status Code is 200 (Ok) Get Response Text
    if (this.readyState === 4 && this.status === 200) {
      // console.log(this.responseText);
      // console.log(JSON.parse(this.responseText));
      // console.log(myRequest);

      // Convert ResponseText To JS Object
      var myJsObject = JSON.parse(this.responseText),
        myText = "";

      for (var i = 0; i < myJsObject.length; i++) {
        console.log(myJsObject[i].username);
        myText += myJsObject[i].username + "<br>";
        console.log(myText);
      }
      document.getElementById("show").innerHTML = myText;
    }
  };

  // XMLHttpRequest.open(Method, URL, Async, User, Password)
  myRequest.open("GET", "object.json", true);
  myRequest.send();
}