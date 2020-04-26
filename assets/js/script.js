

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
function getTeams(cb) {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            cb(JSON.parse(this.responseText));
        }
    });

    xhr.open("GET", "https://api-nba-v1.p.rapidapi.com/teams/league/standard");
    xhr.setRequestHeader("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1");

    xhr.send();
}


function writeToDocument(data, teams) {
    var el = document.getElementById("teams");
    el.innerHTML = "";
    var standings = [];


    getStandings(function (standings) {
        standings = data.api.standings;
        var content = "";
        var ranking = 1;
        var teamsEast = [];
        var teamsWest = [];
        var teamsById = [];
        function setTeams(teams, teamId, param) {
            getTeams(function (teams) {
               
                teamsById = teams.api.teams;
                return teamsById;
            })
            for (i=0;i<teamsById.length;){
                if(teamsById[i]["teamId"] == teamId){
                    var teamData = "";
                    teamData = teamsById[i][param];
                    return teamData;
                }
            }
            
            console.log(teamsById);
        };
        for (ranking = 1; ranking < 16;) {
            for (i = 0; i < standings.length;) {
                if (standings[i]["conference"]["name"] == "east" && standings[i]["conference"]["rank"] == ranking) {
                    var teams = [];
                    var teamId = standings[i]["teamId"];
                    teams.push(`<td>${standings[i]["conference"]["rank"]}</td>`);
                    teams.push(`<td> ${setTeams(teamId,"fullName")} <img src="${setTeams(teamId,"logo")}" alt="${setTeams(teamId,"shortName")}"/>
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
                    ranking++;
                } else {
                    i++;
                }

            }

        }
        for (ranking = 1; ranking < 16;) {
            for (i = 0; i < standings.length;) {
                if (standings[i]["conference"]["name"] == "west" && standings[i]["conference"]["rank"] == ranking) {
                    var teams = [];
                    var teamId = standings[i]["teamId"];
                     teams.push(`<td>${standings[i]["conference"]["rank"]}</td>`);
                    teams.push(`<td> ${setTeams(teamId,"fullName")} <img src="${setTeams(teamId,"logo")}" alt="${setTeams(teamId,"shortName")}"/>
                    </td>`);
                    teams.push(`<td>${standings[i]["win"]}</td>`);
                    teams.push(`<td>${standings[i]["loss"]}</td>`);
                    teams.push(`<td>${standings[i]["winPercentage"]}</td>`);
                    teams.push(`<td>${standings[i]["gamesBehind"]}</td>`);
                    teams.push(`<td>${standings[i]["home"]["win"]} - ${standings[i]["home"]["loss"]}</td>`);
                    teams.push(`<td>${standings[i]["away"]["win"]} - ${standings[i]["away"]["loss"]}</td>`);
                    teams.push(`<td>${standings[i]["lastTenWin"]} - ${standings[i]["lastTenLoss"]}</td>`);
                    i = 0;
                    ranking++;
                } else {
                    i++;
                }

            }

        }
        el.innerHTML = `<table>
        <tr> <th>Eastern Conference</th> </tr>
        <tr>
        <th> Rank </th>
        <th> Team </th>
        <th> Wins </th>
        <th> Losses</th>
        <th> Percentage </th>
        <th> Games Behind </th>
        <th> Home </th><th> Away </th>
        <th> Last 10 Games</th>
        </tr>
        ${teamsEast}
        <tr> <th> Western Conference </th> </tr>
        ${teamsWest}
        </table>`;

    });
}

getStandings(writeToDocument);
