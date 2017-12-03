(function () {
    let websocket;
    let connect     = document.getElementById("connect");
    let nickname    = document.getElementById('nickname');
    let clientlist  = document.getElementById("clientarea");
    let output      = document.getElementById("msgarea");
    let sendmessage = document.getElementById("messagebtn");
    let clientmessage = document.getElementById("message");
    let close       = document.getElementById("disconnectbtn");
    let protocol    = document.getElementById("protocol");
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
    // function outputLog(message) {
    //     let now = new Date();
    //     let timestamp = now.toLocaleTimeString();
    //
    //     output.innerHTML += `${timestamp} ${message}<br>`;
    //     output.scrollTop = output.scrollHeight;
    // }

    function renderClientArea(userarray) {
        var HTMLlist = "";

        clientlist.innerHTML = "";
        for (var i = 0; i < userarray.length; i++) {
            if (userarray[i] === nickname.value) {
                HTMLlist += "<p><strong>"+userarray[i]+"</strong></p>";
            } else {
                HTMLlist += "<p>"+userarray[i]+"</p>";
            }
        }
        clientlist.innerHTML = HTMLlist;
    }

    function addClientMsg(jsonmsg) {
        let now = new Date();
        let timestamp = now.toLocaleTimeString();
        var htmlmsg;
        var nick = jsonmsg.nick;
        var content = jsonmsg.content;

        htmlmsg = document.createElement('div');
        htmlmsg.className = "well clientmsgwell";
        htmlmsg.innerHTML = "<p>"+`${timestamp}`+" [<strong>"+nick+"</strong>]: "+content+"</p>";
        output.appendChild(htmlmsg);
    }

    /**
    * Select what subprotocol to use for websocket connection.
    *
    * @return {string} with name of subprotocol.
    */
    function setSubProtocol() {
        return protocol.value;
    }

    /**
    * What to do when user clicks Connect
    */
    connect.addEventListener("click", function() {
        console.log("Connecting to ws://82.102.5.98:1337/ with " + setSubProtocol() + " protocol.");

        websocket = new WebSocket('ws://82.102.5.98:1337/', setSubProtocol());



        websocket.onopen = function() {
            console.log("The websocket is now open.");
            console.log(websocket);

            if (protocol.value === 'json') {
                var msg;

                // outputLog("The websocket is now open." + event.data);
                msg = {
                    type: 'newuser',
                    content: nickname.value
                };
                console.log(msg.type);
                websocket.send(JSON.stringify(msg));
            }

            // websocket.send(msg);

            $("#connectform").hide();
            $("#messageform").show();
        };

        websocket.onmessage = function(event) {
            console.log("Receiving message: " + event.data);
            console.log(event);
            console.log(websocket);

            var jsonmsg;

            // outputLog("Server said: " + event.data);
            jsonmsg = JSON.parse(event.data);
            if (jsonmsg.type === 'users') {
                console.log("renderClientArea");
                renderClientArea(jsonmsg.userarray);
            } else if (jsonmsg.type === 'clientmsg') {
                addClientMsg(jsonmsg);
            }
        };

        websocket.onclose = function() {
            console.log("The websocket is now closed.");
            console.log(websocket);


            // outputLog("Websocket is now closed.");
            $("#messageform").hide();
            $("#connectform").show();
        };
    }, false);

    /**
     * What to do when user clicks to send a message.
     */
    sendmessage.addEventListener("click", function(/*event*/) {
        let messagetext = clientmessage.value;
        var msg;

        if (!websocket || websocket.readyState === 3) {
            console.log("The websocket is not connected to a server.");
        } else {
            msg = {
                type: "clientmsg",
                nick: nickname.value,
                content: messagetext
            };
            websocket.send(JSON.stringify(msg));
            console.log("Sending message: " + messagetext);
            // outputLog("You said: " + messagetext);
        }
    });



    /**
     * What to do when user clicks Close connection.
     */
    close.addEventListener("click", function(/*event*/) {
        console.log("Closing websocket.");
        var msg;

        msg = {
            type: 'deleteuser',
            content: nickname.value
        };
        // console.log(msg.type);
        websocket.send(JSON.stringify(msg));
        clientlist.innerHTML = "";
        output.innerHTML = "";
        // websocket.send("Client closing connection by intention.");
        websocket.close();
        console.log(websocket);
        // outputLog("Prepare to close websocket.");
    });
})();
