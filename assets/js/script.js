$(document).ready(function () {
    getData();
})


// link to standings data (GET) -- https://api-nba-v1.p.rapidapi.com/standings/%7Bleague%7D/%7Bseasonyear%7D/conference/%7Bconference%7D
function getData(ajaxurl) {
    $.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/standings/standard/2019/",
        method: 'GET',
        dataType: 'json',
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1"
        },
        contentType: 'application/json; charset=utf-8',
        success: setStandings,
        error: function (error) {
            document.getElementById("teams").innerHtml = `<h2> Data not currently available - Please try again later. </h2>`
            console.log("failed");
        }
    });



}

function setStandings(standingsJSON) {

    var standings = [];
    standings = standingsJSON.api.standings;
    writeToDocument(standings);
}


function writeToDocument(standings) {
    var el = document.getElementById("teams");
    el.innerHTML = "";
    var teamsEast = [];
    var teamsWest = [];
    getTeams();
    for (ranking1 = 1, ranking2 = 1; ranking1 < 16, ranking2 < 16;) {
        var ranking1 = 1;
        var ranking2 = 1
        for (i = 0; i < standings.length;) {
            if (standings[i]["conference"]["name"] == "east" && standings[i]["conference"]["rank"] == ranking1) {
                var teams = [];
                var teamId = standings[i]["teamId"] - 1;
                teams.push(`<td>${standings[i]["conference"]["rank"]}</td>`);
                teams.push(`<td class="teamName">${(teamId)}
                    </td>`);
                teams.push(`<td>${standings[i]["win"]}</td>`);
                teams.push(`<td>${standings[i]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["winPercentage"]}</td>`);
                teams.push(`<td>${standings[i]["gamesBehind"]}</td>`);
                teams.push(`<td>${standings[i]["home"]["win"]} - ${standings[i]["home"]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["away"]["win"]} - ${standings[i]["away"]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["lastTenWin"]} - ${standings[i]["lastTenLoss"]}</td>`);
                teamsEast.push(`<tr> ${teams} </tr>`);
                i = 0;
                ranking1++;
            } if (standings[i]["conference"]["name"] == "west" && standings[i]["conference"]["rank"] == ranking2) {
                var teams = [];
                var teamId = standings[i]["teamId"];
                teams.push(`<td>${standings[i]["conference"]["rank"]}</td>`);
                teams.push(`<td class="teamData"> ${(teamId)} </td>`);
                teams.push(`<td>${standings[i]["win"]}</td>`);
                teams.push(`<td>${standings[i]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["winPercentage"]}</td>`);
                teams.push(`<td>${standings[i]["gamesBehind"]}</td>`);
                teams.push(`<td>${standings[i]["home"]["win"]} - ${standings[i]["home"]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["away"]["win"]} - ${standings[i]["away"]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["lastTenWin"]} - ${standings[i]["lastTenLoss"]}</td>`);
                teamsWest.push(`<tr> ${teams} </tr>`);
                i = 0;
                ranking2++;
            } else {
                i++;
            }

        };
    }
    el.innerHTML = `<table class="conference-standings">
        <tr> <th>Eastern Conference</th> </tr>
        <tr>
        <th> Rank </th>
        <th> Team </th>
        <th> Wins </th>
        <th> Losses</th>
        <th> Percentage </th>
        <th> Games Behind </th>
        <th> Home </th>
        <th> Away </th>
        <th> Last 10 Games</th>
        </tr>
        ${teamsEast}
        <tr> <th> Western Conference </th> </tr>
        ${teamsWest}
        </table>`;

}



