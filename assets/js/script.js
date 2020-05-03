

$(document).ready(function () {
    getData();
})


// link to standings data (GET) -- https://api-nba-v1.p.rapidapi.com/standings/%7Bleague%7D/%7Bseasonyear%7D/conference/%7Bconference%7D
function getData() {
    $.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/standings/standard/2019/",
        method: 'GET',
        dataType: 'json',
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1"
        },
        contentType: 'application/json; charset=utf-8',
        success: function (results) {
            var team_data = {};
            for (i = 0; i < results.api.standings.length; i++) {
                team_data[results.api.standings[i]["teamId"]] = {
                    teamId: results.api.standings[i]["teamId"],
                    conference: results.api.standings[i]["conference"]["name"],
                    rank: results.api.standings[i]["conference"]["rank"],
                    wins: results.api.standings[i]["conference"]["win"],
                    loss: results.api.standings[i]["conference"]["loss"],
                    winPercentage: results.api.standings[i]["winPercentage"],
                    homeWin: results.api.standings[i]["home"]["win"],
                    homeLoss: results.api.standings[i]["home"]["loss"],
                    awayWin: results.api.standings[i]["away"]["win"],
                    awayLoss: results.api.standings[i]["away"]["loss"]
                };
            }
            getTeams(team_data);
        },
        error: function (error) {
            $("#error").removeClass("d-none");
            console.log("failed");
        }
    });
}

function getTeams(team_data) {
    team_data = team_data;
    $.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/teams/league/standard",
        method: 'GET',
        dataType: 'json',
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1"
        },
        contentType: 'application/json; charset=utf-8',
        success: function (results) {
            var team_names = {};
            for (i = 0; i < results.api.teams.length; i++) {
                team_names[results.api.teams[i]["teamId"]] = {
                    teamId: results.api.teams[i]["teamId"],
                    fullName: results.api.teams[i]["fullName"],
                    logo: results.api.teams[i]["logo"],
                    shortName: results.api.teams[i]["shortName"]
                };
            }
            teamsToData(team_data, team_names)
        },
        error: function (error) {
            $("#error").removeClass("d-none");
            console.log("failed");
        }

    });
}
function teamsToData(team_data, team_names) {
    var teams = {};
    for (var i in team_data) {
        teams[i] = {
            teamId: team_data[i]["teamId"],
            conference: team_data[i]["conference"],
            rank: team_data[i]["rank"],
            wins: team_data[i]["wins"],
            loss: team_data[i]["loss"],
            winPercentage: team_data[i]["winPercentage"],
            homeWin: team_data[i]["homeWin"],
            homeLoss: team_data[i]["homeLoss"],
            awayWin: team_data[i]["awayWin"],
            awayLoss: team_data[i]["awayLoss"],
            fullName: team_names[i]["fullName"],
            logo: team_names[i]["logo"],
            shortName: team_names[i]["shortName"]
        }

    }
    writeToDocument(teams);
}
function writeToDocument(teams) {
    var el = document.getElementById("teams");
    el.innerHTML = "";
    ranking = 1
    teamsEast = {};
    teamsWest = {};
    tableContentWest = [];
    tableContentEast = [];
    for (ranking = 1; ranking < 16; ranking++) {
        for (var i in teams) {
            if (teams[i]["rank"] == ranking && teams[i]["conference"] == "east") {
                teamsEast[ranking] = teams[i];
            } else if (teams[i]["rank"] == ranking && teams[i]["conference"] == "west") {
                teamsWest[ranking] = teams[i];
            }
        }
    }
    // Logo for Detroit not loading as 404 - link in manually
    teamsEast[13]["logo"] = "https://sportslogohistory.com/wp-content/uploads/2017/05/detroit_pistons_2017-pres.png"

    for (var i in teamsEast) {
        tableContentEast.push(
            `<tr>
            <td>${teamsEast[i]["rank"]}</td>
            <td class="d-none d-sm-table-cell">${teamsEast[i]["fullName"]}</td>
            <td class="d-none d-sm-table-cell"> <img class="logo" src="${teamsEast[i]["logo"]}" alt="${teamsEast[i]["shortName"]}"/></td>
            <td class="d-table-cell d-sm-none">${teamsEast[i]["shortName"]}</td>
            <td>${teamsEast[i]["wins"]}</td>
            <td>${teamsEast[i]["loss"]}</td>
            <td>${teamsEast[i]["winPercentage"]}</td>
            <td class="d-none d-sm-table-cell">${teamsEast[i]["homeWin"]} - ${teamsEast[i]["homeLoss"]}</td>
            <td class="d-none d-sm-table-cell">${teamsEast[i]["awayWin"]} - ${teamsEast[i]["awayLoss"]}</td>
             </tr>`
        )
    }
    for (var i in teamsWest) {
        tableContentWest.push(
            `<tr>
            <td>${teamsWest[i]["rank"]}</td>
            <td class="d-none d-sm-table-cell">${teamsWest[i]["fullName"]} </td>
            <td class="d-none d-sm-table-cell"><img class="logo" src="${teamsWest[i]["logo"]}" alt="${teamsWest[i]["shortName"]}"/></td>
            <td class="d-table-cell d-sm-none">${teamsWest[i]["shortName"]}</td>
            <td>${teamsWest[i]["wins"]}</td>
            <td>${teamsWest[i]["loss"]}</td>
            <td>${teamsWest[i]["winPercentage"]}</td>
            <td class="d-none d-sm-table-cell">${teamsWest[i]["homeWin"]} - ${teamsEast[i]["homeLoss"]}</td>
            <td class="d-none d-sm-table-cell">${teamsWest[i]["awayWin"]} - ${teamsEast[i]["awayLoss"]}</td>
             </tr>`
        )
    }
    
    console.log(teamsEast);
    el.innerHTML = `<table class="table-bordered conference-standings">
    <tr><th colspan="8"> Eastern Conference </th></tr>
    <tr><th> Rank </th>
    <th class="d-table-cell d-sm-none"> Team </th>
    <th class="d-none d-sm-table-cell" colspan="2"> Team </th>
    <th> Wins </th>
    <th> Losses </th>
    <th> Win Percentage </th>
    <th class="d-none d-sm-table-cell"> Home W-L </th>
    <th class="d-none d-sm-table-cell"> Away W-L </th>
    </tr>
    ${tableContentEast}
    <tr><th colspan="8"> Western Conference</th></tr>
    <tr><th> Rank </th>
    <th class="d-table-cell d-sm-none"> Team </th>
    <th class="d-none d-sm-table-cell" colspan="2"> Team </th>
    <th> Wins </th>
    <th> Losses </th>
    <th> Win Percentage </th>
    <th class="d-none d-sm-table-cell"> Home W-L </th>
    <th class="d-none d-sm-table-cell"> Away W-L </th>
    </tr>
    ${tableContentWest}
    </table>`.replace(/,/g, "");

}

$(".news").children("button").click(function () {
    $(this).siblings("div").toggleClass("d-none");
});

$(".news a").children("h4").mouseenter(function () {
    $(this).addClass("underline");
});
$(".news a").children("h4").mouseleave(function () {
    $(this).removeClass("underline");
});

function scrollToStandings() {
    var elem = document.getElementById("standings-header");
    elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
}
function scrollToVideo() {
    var elem = document.getElementById("video-header");
    elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
}
function scrollToNews() {
    var elem = document.getElementById("news-header");
    elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
}