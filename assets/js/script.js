$(".news").children("button").click(function(){
    $(this).siblings("p").toggleClass("d-none");
    $(this).siblings("img").toggleClass("d-none");
    console.log("Click!");
})



// link to standings data (GET) --http://api.espn.com//sports/basketball/nba/rankings   HTTP https://www.espn.com/nba/standings

//get Conference standings
