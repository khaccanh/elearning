function reloadRunCode() {
    var iframeController = document.getElementById("iframe_run_code")
    iframeController.src = ""
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var objJson = JSON.parse(this.response)
            iframeController.srcdoc = objJson.phaser
        }
    };
    xhttp.open("GET", "https://128.199.168.250:8100/api/CodeLuas/145", true);
    xhttp.send()
}
