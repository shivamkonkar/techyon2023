const eventName = document.getElementById('event-name');
const category = document.getElementById('category');
const eventType = document.getElementById('event-type');
const date = document.getElementById('date');
const time = document.getElementById('time');
const eventLocation = document.getElementById('location');
const instructions = document.getElementById('instructions');
const coordinator1 = document.getElementById('coordinator-1');
const coordinator2 = document.getElementById('coordinator-2');
const coordinator1Phone = document.getElementById('coordinator-1-phone');
const coordinator2Phone = document.getElementById('coordinator-2-phone');
const firstPlace = document.getElementById('first-place');
const secondPlace = document.getElementById('second-place');
const eventNameHeading = document.getElementById('event-name-heading');
const registerButton = document.getElementById('register-button');
const posterImage = document.getElementById('poster-image');
const rulebook = document.getElementById('rulebook-button');

function getQueryString() {
    var result = {}, queryString = location.search.slice(1),
        re = /([^&=]+)=([^&]*)/g, m;
    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return result;
}

$.getJSON("./data/eventsData.json", function (data) {
    var param = getQueryString()["event"];
    console.log(param);

    if (data[param] != undefined) {
        console.log(data[param]["event-name"]);

        eventName.innerText = data[param]["event-name"];
        category.innerText = data[param]["department"];
        eventType.innerText = data[param]["type"];
        date.innerText = data[param]["date"];
        time.innerText = data[param]["time"];
        eventLocation.innerText = data[param]["location"];

        let ruleText = "";
        let infoText = "";

        // data[param]["rules"].forEach((rule) => {
        //     ruleText = ruleText.concat(`<p> ${rule} </p>`)
        //     instructions.innerHTML = ruleText;
        // })

        for (var name in data[param]["rules"]) {
            console.log(name, data[param]["rules"][name]);
            data[param]["rules"][name].forEach((element) => {
                infoText = infoText.concat(`<li> ${element} </li>`);
            })
            ruleText = ruleText.concat(`<h3 style="margin-top:20px; font-weight:700"> ${name} </h3> <p> ${infoText}</p>`);
            instructions.innerHTML = ruleText;
            infoText = "";
        }

        coordinator1.innerText = data[param]["event-coordinators"][0].name;
        coordinator2.innerText = data[param]["event-coordinators"][1].name;
        coordinator1Phone.href = "https://wa.me/91" + data[param]["event-coordinators"][0]["phone-number"];
        coordinator2Phone.href = "https://wa.me/91" + data[param]["event-coordinators"][1]["phone-number"];

        if (data[param]["prize"][0] != undefined) {
            firstPlace.innerHTML = data[param]["prize"][0];
            secondPlace.innerHTML = data[param]["prize"][1];

            if (data[param]["prize"][1] == undefined) {
                secondPlace.innerHTML = '-';
            }
        }
        else {
            document.getElementById('priz').style.display = 'none';
        }


        eventNameHeading.innerHTML = data[param]["event-name"];
        registerButton.href = data[param]["form"];
        posterImage.src = data[param]["poster"];
        rulebook.href = data[param]["rulebook"];
    }

    else {
        console.log("undefined");
    }

});
