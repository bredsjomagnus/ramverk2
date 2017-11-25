(function () {
    let websocket;
    let connect     = document.getElementById("connect");
    let nickname    = document.getElementById('nickname');
    let clientlist  = document.getElementById("clientarea");
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

    function renderClientArea(userarray) {
        var HTMLlist = "";

        clientlist.innerHTML = "";
        for (var i = 0; i < userarray.length; i++) {
            HTMLlist += "<p>"+userarray[i]+"</p>";
        }
        clientlist.innerHTML = HTMLlist;
    }

    function addClientMsg(jsonmsg) {
        let now = new Date();
        let timestamp = now.toLocaleTimeString();
        var htmlmsg;

        htmlmsg = document.createElement('div');
        htmlmsg.className = "well";
        htmlmsg.innerHTML = `${timestamp} ${jsonmsg.nick} ${jsonmsg.content}`;
        output.appendChild(htmlmsg);
    }

    /**
    * What to do when user clicks Connect
    */
    connect.addEventListener("click", function() {
        console.log("Connecting to ws://localhost:1337/");
        websocket = new WebSocket('ws://localhost:1337/');

        websocket.onopen = function() {
            console.log("The websocket is now open.");
            console.log(websocket);
            var msg;

            // outputLog("The websocket is now open." + event.data);
            msg = {
                type: 'alias',
                content: nickname.value
            };
            console.log(msg.type);
            websocket.send(JSON.stringify(msg));
            // websocket.send(msg);

            $("#connectform").hide();
        };

        websocket.onmessage = function(event) {
            console.log("Receiving message: " + event.data);
            console.log(event);
            console.log(websocket);
            var jsonmsg;

            // outputLog("Server said: " + event.data);
            jsonmsg = JSON.parse(event.data);
            if (jsonmsg.type === 'users') {
                renderClientArea(jsonmsg.userarray);
            } else if (jsonmsg.type === 'clientmsg') {
                addClientMsg(jsonmsg);
            }
        };

        websocket.onclose = function() {
            console.log("The websocket is now closed.");
            console.log(websocket);
            outputLog("Websocket is now closed.");
        };
    }, false);
})();
