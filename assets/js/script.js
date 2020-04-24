

// link to standings data (GET) -- https://api-nba-v1.p.rapidapi.com/standings/%7Bleague%7D/%7Bseasonyear%7D/conference/%7Bconference%7D
function getStandings(cb) {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            cb(JSON.parse(this.responseText));
        }
    });

    xhr.open("GET", "https://api-nba-v1.p.rapidapi.com/standings/standard/2019/");
    xhr.setRequestHeader("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1");

    xhr.send();
}


function getTableHeaders(obj) {
    var tableHeaders = [];
    Object.keys(obj).forEach(function (key) {
        tableHeaders.push(`<td> ${key} </td>`)
    });
    return `<tr> ${tableHeaders} </tr>`;
}

function writeToDocument(data) {
    

    getStandings(function (standings) {
        var el = document.getElementById("teams");
        el.innerHtml = "";
    
        var standings = [];
        standings = data.api.standings;
        
        var tableHeaders = getTableHeaders(standings[0]);
        

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}

getStandings(writeToDocument);