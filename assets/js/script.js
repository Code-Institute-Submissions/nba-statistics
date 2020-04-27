

// link to standings data (GET) -- https://api-nba-v1.p.rapidapi.com/standings/%7Bleague%7D/%7Bseasonyear%7D/conference/%7Bconference%7D
function getData(setData) {
    $.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/standings/standard/2019/",
        type: 'GET',
        dataType: 'json',
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1"
        },
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
            setData(JSON.parse(this.responseText));
            $.ajax({
                url: "https://api-nba-v1.p.rapidapi.com/teams/league/standard",
                type: 'GET',
                dataType: 'json',
                headers: {
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1"
                },
                contentType: 'application/json; charset=utf-8',
                success: function (result) {
                    setData(JSON.parse(this.responseText));
                },
                error: function (error) {
                    document.getElementById("teams").innerHtml = `<h2> Data not currently available - Please try again later. </h2>`
                    console.log("failed");
                }
            });

        },
        error: function (error) {
            document.getElementById("teams").innerHtml = `<h2> Data not currently available - Please try again later. </h2>`
            console.log("failed");
        }
    });



}

function setData(data, teams) {

    var standings = [];
    var teamsById = [];

    teamsById = teams.api.teams;
    return teamsById;

    standings = data.api.standings;
    return standings;

}
function writeToDocument(getData) {
    var el = document.getElementById("teams");
    el.innerHTML = "";
    var content = "";
    var teamsEast = [];
    var teamsWest = [];
    function setTeam(teamId, param) {
        return getData(setData);
        for (i = 0; i < teamsById.length;) {
            if (teamsById[i]["teamId"] == teamId) {
                var teamData = "";
                teamData = teamsById[i][param];
            }
        }
    }
    for (ranking = 1; ranking < 16;) {
        var ranking = 1;
        for (i = 0; i < standings.length;) {
            if (standings[i]["conference"]["name"] == "east" && standings[i]["conference"]["rank"] == ranking) {
                var teams = [];
                var teamId = standings[i]["teamId"];
                teams.push(`<td>${standings[i]["conference"]["rank"]}</td>`);
                teams.push(`<td> ${setTeam(teamId, "fullName")} <img src="${setTeam(teamId, "logo")}" alt="${setTeam(teamId, "shortName")}"/>
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
            } if (standings[i]["conference"]["name"] == "west" && standings[i]["conference"]["rank"] == ranking) {
                var teams = [];
                var teamId = standings[i]["teamId"];
                teams.push(`<td>${standings[i]["conference"]["rank"]}</td>`);
                teams.push(`<td> ${setTeam(teamId, "fullName")} <img src="${setTeam(teamId, "logo")}" alt="${setTeam(teamId, "shortName")}"/>
                    </td>`);
                teams.push(`<td>${standings[i]["win"]}</td>`);
                teams.push(`<td>${standings[i]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["winPercentage"]}</td>`);
                teams.push(`<td>${standings[i]["gamesBehind"]}</td>`);
                teams.push(`<td>${standings[i]["home"]["win"]} - ${standings[i]["home"]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["away"]["win"]} - ${standings[i]["away"]["loss"]}</td>`);
                teams.push(`<td>${standings[i]["lastTenWin"]} - ${standings[i]["lastTenLoss"]}</td>`);
                teamsWest.push(`<tr> ${teams} </tr>`);
                i = 0;
                ranking++;
                console.log(teamsWest);
            } else {
                i++;
            }

        };
    }
    el.innerHTML = `<table class="conference-standings>
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

}



