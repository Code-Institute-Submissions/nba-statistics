


function fetchPlayerInfo(event) {
    var playerName = $("#player-name").val();

    getPlayers(playerName);

    $("#nba-user-data").html(
        `<div id="loader">
            <img src="./images/loading.gif" alt="loading..." />
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
            setTimeout(function(){ $("#nba-user-data").html("<p> Player not found - please enter another player or check the spelling </p>");},8000)
           
        }
    }

}

function returnPlayerStats(playerId, playerName) {

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
                    assists: Number(results.api.statistics[i]["assists"]),
                    fgp: Number(results.api.statistics[i]["fgp"]),
                    tpp: Number(results.api.statistics[i]["tpp"]),
                    ftp: Number(results.api.statistics[i]["ftp"]),
                    steals: Number(results.api.statistics[i]["steals"]),
                    blocks: Number(results.api.statistics[i]["blocks"]),
                    turnovers: Number(results.api.statistics[i]["turnovers"])
                }
            }
            var playerAvg = {};
            var points = 0;
            var rebounds = 0;
            var assists = 0;
            var fgp = 0;
            var tpp = 0;
            var ftp = 0;
            var steals= 0;
            var blocks = 0;
            var turnovers = 0;
            var gamesPlayed = 0;
            for (i in playerStats) {
                gamesPlayed += 1;
                points += playerStats[i]["points"];
                rebounds += playerStats[i]["rebounds"];
                assists += playerStats[i]["assists"];
                fgp += playerStats[i]["fgp"];
                tpp += playerStats[i]["tpp"];
                ftp += playerStats[i]["ftp"];
                steals += playerStats[i]["steals"];
                blocks += playerStats[i]["blocks"];
                turnovers += playerStats[i]["turnovers"];
            }
            playerAvg[0] = {
                points: (points/gamesPlayed).toFixed(2),
                rebounds: (rebounds/gamesPlayed).toFixed(2),
                assists: (assists/gamesPlayed).toFixed(2),
                fgp: (fgp/gamesPlayed).toFixed(2),
                tpp: (tpp/gamesPlayed).toFixed(2),
                ftp: (ftp/gamesPlayed).toFixed(2),
                steals: (steals/gamesPlayed).toFixed(2),
                blocks: (blocks/gamesPlayed).toFixed(2),
                turnovers: (turnovers/gamesPlayed).toFixed(2)
            }
            console.log(playerAvg);
            writeToDocument(playerAvg, playerName);
        
        },
        error: function (error) {

        }
    });
}
function writeToDocument(playerAvg, playerName){
    var el = document.getElementById("nba-user-data");

    el.innerHTML = `<h2> Per Game Averages </h2>
    <table>
    <tr>
    <th> Player Name </th>
    <th> Points </th>
    <th> Rebounds </th>
    <th> Assists </th>
    <th> Field Goal Percentage </th>
    <th> Three Point Percentage </th>
    <th> Free Throw Percentage </th>
    <th> Steals </th>
    <th> Blocks </th>
    <th> Turnovers </th>
    </tr>
    <tr> 
    <td> ${$("#player-name").val()} </td>
    <td> ${playerAvg[0]["points"]} </td>
    <td> ${playerAvg[0]["rebounds"]} </td>
    <td> ${playerAvg[0]["assists"]} </td>
    <td> ${playerAvg[0]["fgp"]} </td>
    <td> ${playerAvg[0]["tpp"]} </td>
    <td> ${playerAvg[0]["ftp"]} </td>
    <td> ${playerAvg[0]["steals"]} </td>
    <td> ${playerAvg[0]["blocks"]}</td>
    <td> ${playerAvg[0]["turnovers"]}</td>
     </tr>

    </table>`
}