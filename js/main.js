// Create table for stock all information of the json
class createUsers {
    constructor() {
        this.users = [];
    }
}

// For create the table initialize a new object
let newuser = new createUsers();

let htmlManager = {
    // Take the parent id for create element
    parentElement: document.getElementById('newlist'),
    setInfo: function (object) {
        // Reset the parent id (for the sort because new table will be create all sort)
        htmlManager.parentElement.innerHTML = "";
        for (let i = 0; i < object.length; i++) {
            // Just create the html element
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
    // call the method for create HTML 
    viewHTML: function (myObject) {
        htmlManager.setInfo(myObject)
    },
    // Method for sort the table, call all change of the value of input in html
    changeOrder: function (takeValue) {
        // Create sort
        newuser.users.sort(function (first, last) {
            // Check all value of input and sort him
            if (takeValue === "id") {
                return first.id > last.id;
            }
            if (takeValue === "name") {

                return first.name > last.name;
            }
            if (takeValue === "age") {
                return first.age > last.age;
            }
            if (takeValue === "from") {
                return first.from > last.from;
            }
        });
        htmlManager.viewHTML(newuser.users);
    }
}

// Create ajax request
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "info.json", false);
xhttp.send(null);
if (xhttp.status == 200) {
    let myObject = JSON.parse(xhttp.responseText)
    newuser.users = myObject;
    htmlManager.viewHTML(newuser.users)
}