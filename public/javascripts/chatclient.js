(function () {
    let websocket;
    let connect     = document.getElementById("connect");
    let nickname    = document.getElementById('nickname');
    // let clientlist  = document.getElementById("clientarea");
    let output      = document.getElementById("msgarea");
    // var nicknamevalue = document.getElementById('nickname').value;

    /**
    * Check nickname inputfield. If empty disable connectionbtn.
    */
    function doCheck() {
        var nicknamevalue = document.getElementById('nickname').value;

        if (nicknamevalue === '') {
            document.getElementById("connect").disabled = true;
        } else {
            document.getElementById("connect").disabled = false;
        }
    }

    // Checking nickname inputfield when keyup or when focusout
    $('#nickname').keyup(doCheck).focusout(doCheck);

    /**
    * Log output to web browser.
    *
    * @param  {string} message to output in the browser window.
    *
    * @return {void}
    */
    function outputLog(message) {
        let now = new Date();
        let timestamp = now.toLocaleTimeString();

        output.innerHTML += `${timestamp} ${message}<br>`;
        output.scrollTop = output.scrollHeight;
    }

    /**
    * What to do when user clicks Connect
    */
    connect.addEventListener("click", function() {
        console.log("Connecting to ws://localhost:1337/");
        websocket = new WebSocket('ws://localhost:1337/');

        websocket.onopen = function(event) {
            console.log("The websocket is now open.");
            console.log(websocket);
            outputLog("The websocket is now open." + event.data);
            websocket.send(nickname.value);
        };

        websocket.onmessage = function(event) {
            console.log("Receiving message: " + event.data);
            console.log(event);
            console.log(websocket);
            outputLog("Server said: " + event.data);
        };

        websocket.onclose = function() {
            console.log("The websocket is now closed.");
            console.log(websocket);
            outputLog("Websocket is now closed.");
        };
    }, false);
})();
