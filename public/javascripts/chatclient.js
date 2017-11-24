(function () {
    function doCheck() {
        var nicknamevalue, nickname;

        nickname = document.getElementById('nickname');
        nicknamevalue = document.getElementById('nickname').value;

        if (nicknamevalue === '') {
            document.getElementById("connect").disabled = true;
        } else {
            document.getElementById("connect").disabled = false;
        }
    }

    $('#nickname').keyup(doCheck).focusout(doCheck);
})();
