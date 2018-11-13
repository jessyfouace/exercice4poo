// Create ajax request
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObject = JSON.parse(xhttp.responseText)
        let valueInput;
        document.getElementById('select').onchange = function () {
            valueInput = this.value;
            htmlManager.changeOrder(myObject, valueInput);
        }
        htmlManager.changeOrder(myObject, valueInput);
    }
}
xhttp.open("GET", "info.json", true);
xhttp.send();

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
    changeOrder: function (object, takeValue) {
        object.sort(function (first, last) {
            // Check all value of input and sort him
            if (takeValue === "id" || takeValue === undefined) {
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
        htmlManager.viewHTML(object);
    }
}