function changeName() {
    document.getElementById("devNinja").innerText = "DEV NINJA";
}

var myRequests = document.querySelector("#totalRequests");
var myConnects =  document.querySelector("#totalConnects");

function addConnections(id) {
    var element = document.querySelector(id);
    element.remove();
    myRequests.innerText--;
    myConnects.innerText++;
}

function subConnections(id) {
    var element = document.querySelector(id);
    element.remove();
    myRequests.innerText--;
    myConnects.innerText--;
}