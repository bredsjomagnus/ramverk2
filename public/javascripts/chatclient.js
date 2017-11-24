(function () {
    /**
    * Check nickname inputfield. If empty disable connectionbtn.
    */
    function doCheck() {
        var nicknamevalue;

        nicknamevalue = document.getElementById('nickname').value;

        if (nicknamevalue === '') {
            document.getElementById("connect").disabled = true;
        } else {
            document.getElementById("connect").disabled = false;
        }
    }

    // Checking nickname inputfield when keyup or when focusout
    $('#nickname').keyup(doCheck).focusout(doCheck);
})();
