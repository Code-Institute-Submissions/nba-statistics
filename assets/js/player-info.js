
$(document).ready(function () {
    fetchPlayerInfo("Alex Abrines");
})


function fetchPlayerInfo(playerName) {
    getPlayers(playerName);

    $("#nba-user-data").html(
        `<div id="loader">
            <img src="assets/css/loading.gif" alt="loading..." />
        </div>`);
}

function getPlayers(playerName) {
    $.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/players/league/standard",
        method: 'GET',
        dataType: 'json',
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1"
        },
        contentType: 'application/json; charset=utf-8',
        success: function (results) {
            var all_players = {};
            for (i = 0; i < results.api.players.length; i++) {
                all_players[results.api.players[i]["playerId"]] = {
                    playerId: results.api.players[i]["playerId"],
                    fullName: results.api.players[i]["firstName"] + " " + results.api.players[i]["lastName"],
                };
            }
            playerRequest(all_players, playerName);
        },
        error: function (error) {

        }
    });
}

function playerRequest(all_players, playerName) {

    for (i in all_players) {
        if (all_players[i]["fullName"] == playerName) {
            playerId = all_players[i]["playerId"];
            returnPlayerStats(playerId);
            break;
        } else {
            $("#nba-user-data").html("<p> Player not found - please enter another player or check the spelling </p>");
        }
    }

}

function returnPlayerStats(playerId) {

    $.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/" + playerId,
        method: 'GET',
        dataType: 'json',
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "0a76bdc434msh890d7aed4a26f66p14aafejsnee71a10023f1"
        },
        contentType: 'application/json; charset=utf-8',
        success: function (results) {
            var playerStats = {}
            for (i in results.api.statistics) {
                playerStats[i] = {
                    points: Number(results.api.statistics[i]["points"]),
                    rebounds: Number(results.api.statistics[i]["totReb"]),
                    assits: Number(results.api.statistics[i]["assists"]),
                    fgp: Number(results.api.statistics[i]["fgp"]),
                    tpp: Number(results.api.statistics[i]["ttp"]),
                    ftp: Number(results.api.statistics[i]["ftp"]),
                    steals: Number(results.api.statistics[i]["steals"]),
                    blocks: Number(results.api.statistics[i]["blocks"]),
                    turnovers: Number(results.api.statistics[i]["turnovers"])
                }
            }
            console.log(playerStats);
            var playerAvg = {};
            var points, rebounds, assists, fgp, tpp, ftp, steals, blocks, turnovers = 0;

            for (i in playerStats) {
                points += playerStats[i]["points"];
                rebounds += playerStats[i]["rebounds"];
                assists += playerStats[i]["assists"];
                fgp += playerStats[i]["fgp"];
                tpp += playerStats[i]["tpp"];
                ftp += playerStats[i]["ftp"];
                steals += playerStats[i]["steals"];
                blocks += playerStats[i]["blocks"];
                turnovers += playerStats[i]["turnovers"];
                console.log(points);
            }
            

        },
        error: function (error) {

        }
    });
}
