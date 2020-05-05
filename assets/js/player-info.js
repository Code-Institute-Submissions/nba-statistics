function imageClick(name){
    var name=name.toLowerCase();
    getPlayers(name);

    $("#loader").html(
        `<div id="loader">
            <img src="assets/images/loading.gif" alt="loading..." />
        </div>`);
    $("#nba-user-data").html("");
    $("#player-image-container").html("");
};

$(document).ready(function () {
    autocomplete(document.getElementById("player-name"));
})


// autocomplete function from https://www.w3schools.com/howto/howto_js_autocomplete.asp - edited
function autocomplete(inp) {

    var names = []
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
            for (i = 0; i < results.api.players.length; i++) {
                names[i] = results.api.players[i]["firstName"] + " " + results.api.players[i]["lastName"]
                
            }
            return names;
        },
        error: function (error) {
            console.log("error");
        }

    });
    
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();

        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < names.length; i++) {
            if (names[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + names[i].substr(0, val.length) + "</strong>";
                b.innerHTML += names[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + names[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    // autocomplete function from https://www.w3schools.com/howto/howto_js_autocomplete.asp - edited
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        if (e.target == $("#submit")){
            fetchPlayerInfo();
        }else{
        closeAllLists(e.target);
        }
    });
}




function fetchPlayerInfo(event) {
    var playerName = $("#player-name").val().toLowerCase();
    getPlayers(playerName);

    $("#loader").html(
        `<div id="loader">
            <img src="assets/images/loading.gif" alt="loading..." />
        </div>`);
    $("#nba-user-data").html("");
    $("#player-image-container").html("");

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
            var all_players = [];
            for (i = 0; i < results.api.players.length; i++) {
                all_players[results.api.players[i]["playerId"]] = {
                    playerId: results.api.players[i]["playerId"],
                    fullName: results.api.players[i]["firstName"].toLowerCase() + " " + results.api.players[i]["lastName"].toLowerCase(),
                    firstName: results.api.players[i]["firstName"].toLowerCase(),
                    lastName: results.api.players[i]["lastName"].toLowerCase()
                };
            }
            playerRequest(all_players, playerName);

        },
        error: function (error) {
            console.log(error);
        }
    });
}

function playerRequest(all_players, playerName) {

    let p = all_players.filter(player => player.fullName == playerName);
    console.log(p);
    if (p.length == 0) {
        $("#loader").html("<p> Player not found - please enter another player or check the spelling </p>");
    } else {
        var playerId = p[0]["playerId"];
        returnPlayerStats(playerId, playerName);
        var firstName = "";
        firstName = p[0]["firstName"];
        var lastName = "";
        lastName = p[0]["lastName"];
        getPlayerImage(firstName, lastName);
    };
}

function getPlayerImage(firstName, lastName) {

    imageURL = "https://nba-players.herokuapp.com/players/" + lastName + "/" + firstName;
    el = document.getElementById("player-image-container");
    el.innerHTML = `<img class="headshot" src="${imageURL}" alt="${firstName} ${lastName}"/>`;

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
            var steals = 0;
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
                points: (points / gamesPlayed).toFixed(2),
                rebounds: (rebounds / gamesPlayed).toFixed(2),
                assists: (assists / gamesPlayed).toFixed(2),
                fgp: (fgp / gamesPlayed).toFixed(2),
                tpp: (tpp / gamesPlayed).toFixed(2),
                ftp: (ftp / gamesPlayed).toFixed(2),
                steals: (steals / gamesPlayed).toFixed(2),
                blocks: (blocks / gamesPlayed).toFixed(2),
                turnovers: (turnovers / gamesPlayed).toFixed(2)
            }
            writeToDocument(playerAvg, playerName);

        },
        error: function (error) {

        }
    });
}
function writeToDocument(playerAvg, playerName) {
    var lo = document.getElementById("loader");
    var el = document.getElementById("nba-user-data");
    lo.innerHTML = "";
    el.innerHTML = `<h4 class="uppercase">Averages Per Game For ${$("#player-name").val()} </h4>
    <table class="player-data table-bordered">
    <tr>
    <th> Points </th>
    <td> ${playerAvg[0]["points"]} </td>
    </tr>
    <tr>
    <th> Rebounds </th>
    <td> ${playerAvg[0]["rebounds"]} </td>
    </tr>
    <tr>
    <th> Assists </th>
    <td> ${playerAvg[0]["assists"]} </td>
    </tr>
    <tr>
    <th> Field Goal Percentage </th>
    <td> ${playerAvg[0]["fgp"]} </td>
    </tr>
    <tr>
    <th> Three Point Percentage </th>
    <td> ${playerAvg[0]["tpp"]} </td>
    </tr>
    <tr>
    <th> Free Throw Percentage </th>
    <td> ${playerAvg[0]["ftp"]} </td>
    </tr>
    <tr>
    <th> Steals </th>
    <td> ${playerAvg[0]["steals"]} </td>
    </tr>
    <th> Blocks </th>
    <td> ${playerAvg[0]["blocks"]}</td>
    </tr>   
    <tr>
    <th> Turnovers </th>
     <td> ${playerAvg[0]["turnovers"]}</td>
    </tr>
    </table>`
}