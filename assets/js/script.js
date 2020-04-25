

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


function writeToDocument(data) {
    var el = document.getElementById("teams");
    el.innerHTML = "";
    var standings = [];

    getStandings(function (standings) {
        standings = data.api.standings;
        console.log(standings);
        var content = "";
        for (var i in standings) {
            content += `<tr>
            <td> ${standings[i]["teamId"]}</td>
            <td> ${standings[i]["win"]}</td>
            <td> ${standings[i]["loss"]}</td>
            <td> ${standings[i]["winPercentage"]}</td>
            <td> ${standings[i]["gamesBehind"]}</td>
            <td> ${standings[i]["home"]["win"]} - ${standings[i]["home"]["loss"]}</td>
            <td> ${standings[i]["away"]["win"]} - ${standings[i]["away"]["loss"]}</td>
            <td> ${standings[i]["lastTenWin"]} - ${standings[i]["lastTenLoss"]}</td>
            <td> ${standings[i]["home"]["win"]}</td>
            </tr>`;
        }
        console.log(content);
        el.innerHTML = `<table>
        <tr>
        <th> Team </th>
        <th> Wins </th>
        <th> Losses</th>
        <th> Percentage </th>
        <th> Games Behind </th>
        <th> Home </th><th> Away </th>
        <th> Last 10 Games</th>
        </tr>
        ${content} 
        </table>`;

    });
}

getStandings(writeToDocument);