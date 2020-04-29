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
           $("#error").removeClass("d-none");
            console.log("failed");
        }
    });



}

function setStandings(standingsJSON) {
    $("#error").addClass("d-none");
    var standings = [];
    standings = standingsJSON.api.standings;
    writeStandings(standings);
}


function writeStandings(standings) {
    
    var teamsEast = [];
    var teamsWest = [];
    for (ranking1 = 1, ranking2 = 1; ranking1 < 16, ranking2 < 16;) {
        var ranking1 = 1;
        var ranking2 = 1;
        for (i = 0; i < standings.length;) {
            if (standings[i]["conference"]["name"] == "east" && standings[i]["conference"]["rank"] == ranking1) {
                var teams = [];
                var teamId = standings[i]["teamId"];
                teams.push(`<td>${standings[i]["conference"]["rank"]}</td>`);
                teams.push(`teamId: ${teamId}`
                    );
                teams.push(`<td>${standings[i]["win"]}</td>`);
                teams.push(`<td>${standings[i]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["winPercentage"]}</td>`);
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
                teams.push(`teamId: ${teamId}`);
                teams.push(`<td>${standings[i]["win"]}</td>`);
                teams.push(`<td>${standings[i]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["winPercentage"]}</td>`);
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
    getTeams(teamsEast,teamsWest);
}

function getTeams(teamsEast,teamsWest){
$.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/teams/league/standard",
        method: 'GET',
        dataType: 'json',
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	"x-rapidapi-key": "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1"
        },
        contentType: 'application/json; charset=utf-8',
        success: function(teams,teamsEast,teamsWest){
            $("#error").addClass("d-none");
            var standings = [];
            teamsById = teams.api.teams;
            console.log(teamsById);
            for (i=0; i<teamsEast.length; i++){
                for (j=0; j<teamsById.length;){
                    if (teamsEast[i]["teamId"] == teamsById[j]["teamId"]){
                        teamsEast[i]["teamId"] = `<td> ${teamsById[j]["fullName"]} <img src="${teamsById[j]["logo"]}" alt="${teamsById[j]["shortName"]}" /> </td> `
                        break;
                    }else{j++};
                }
            }
            for (i=0; i<teamsWest.length; i++){
                for (j=0; j<teamsById.length;){
                    if (teamsWest[i]["teamId"] == teamsById[j]["teamId"]){
                        teamsWest[i]["teamId"] = `<td> ${teamsById[j]["fullName"]} <img src="${teamsById[j]["logo"]}" alt="${teamsById[j]["shortName"]}" /> </td> `
                        break;
                    }else{j++};
                }
            }
            writeToDocument(teamsEast,teamsWest);
        },
        error: function (error) {
            $("#error").removeClass("d-none");
            console.log("failed");
        }
    });
}

function writeToDocument(teamsEast, teamsWest){
    var el = document.getElementById("teams");
    el.innerHTML = "";
    el.innerHTML = `<table class="conference-standings">
        <tr> <th>Eastern Conference</th> </tr>
        <tr>
        <th> Rank </th>
        <th> Team </th>
        <th> Wins </th>
        <th> Losses</th>
        <th> Percentage </th>
        <th> Home </th>
        <th> Away </th>
        <th> Last 10 Games</th>
        </tr>
        ${teamsEast}
        <tr> <th> Western Conference </th> </tr>
        ${teamsWest}
        </table>`;

}