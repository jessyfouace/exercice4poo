class createUsers {
    constructor() {
        this.users = [];
    }
}

let newuser = new createUsers();

let htmlManager = {
    parentElement: document.getElementById('newlist'),
    setInfo: function (object) {
        htmlManager.parentElement.innerHTML = "";
        for (let i = 0; i < object.length; i++) {

            let createTrElement = document.createElement("tr");
            htmlManager.parentElement.appendChild(createTrElement);

            let id = object[i].id;
            let idElement = document.createElement("th");
            idElement.innerHTML = id;
            createTrElement.appendChild(idElement);

            let name = object[i].name;
            let nameElement = document.createElement("th");
            nameElement.innerHTML = name;
            createTrElement.appendChild(nameElement);

            let age = object[i].age;
            let ageElement = document.createElement("th");
            ageElement.innerHTML = age;
            createTrElement.appendChild(ageElement);

            let from = object[i].from;
            let cityElement = document.createElement("th");
            cityElement.innerHTML = from;
            createTrElement.appendChild(cityElement);

        }
    },
    viewHTML: function (myObject) {
        htmlManager.setInfo(myObject)
    }
}

let xhttp = new XMLHttpRequest();
xhttp.open("GET", "info.json", false);
xhttp.send(null);
if (xhttp.status == 200) {
    let myObject = JSON.parse(xhttp.responseText)
    newuser.users = myObject;
    htmlManager.viewHTML(newuser.users)
}

function changeOrder(takeValue) {

    if (takeValue === "id") {
        newuser.users.sort(function (a, b) {
            return a.id > b.id;
        });
    }
    if (takeValue === "name") {
        newuser.users.sort(function (a, b) {
            return a.name > b.name;
        });
    }
    if (takeValue === "age") {
        newuser.users.sort(function (a, b) {
            return a.age > b.age;
        });
    }
    if (takeValue === "from") {
        newuser.users.sort(function (a, b) {
            return a.from > b.from;
        });
    }
    htmlManager.viewHTML(newuser.users);
}