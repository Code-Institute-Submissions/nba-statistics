$(".news").children("button").click(function(){
    $(this).siblings("div").fadeToggle();
})

$(".news a").children("h4").mouseenter(function(){
    $(this).addClass("underline");
});
$(".news a").children("h4").mouseleave(function(){
    $(this).removeClass("underline");
});


// link to standings data (GET) --http://api.espn.com//sports/basketball/nba/rankings   HTTP https://www.espn.com/nba/standings

//get Conference standings
