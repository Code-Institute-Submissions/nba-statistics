# NBA-statistics


The site is essentially a newsletter designed to promote NBA basketball through the providing of information on players, teams, media and news from around the nba.
Users will be able to see up to date league rankings for the season, search for up to date statistics from their favourite player and see media
from the latest games to be played. They will also have the ability to contact the service to request data for specific players as all current nba players are listed. The value to the user will be the gaining of information through searches, viewing media and related content around the nba
and contacting the service with specific feedback or requests. The value to the provider will be increased traffic and outreach to fans and potential fans,
, direct feedback and usable data on players favoured by users and an interactive site that is engaging to the user. 

##UX
The users for this website can be split into three main groups. The first are general type users who are already fans of basketball or the NBA in general and will likely be looking for specific
information and have come to the site with a specific purpose. These users are likely the ones who will recieve the most engagement. The second group of users are organisational users connected to
the league and its subsidieres itself, be that the NBA organisation or specific franchises within the league. This would be the group that stands to benefit through engagement with 
their customer base. The third group are more general type users that do not fit into either category, who are not necessarily basketball fans and perhaps happened across the site by accident or were 
recommended it by a friend. This group will likely be less engage but are the ones who are set to learn the most from the site as all information may be things they haven't seen before. 

###User Stories
As an NBA Fan, I want to keep up to date with current players statistics and leage standings by visiting a site regularly that has this information as the season progresses.
As a basketball fan, I want a convenient place to see stories and video from a variety of mainstream media outlets, by visiting a site that has all of them in one place.
As an NBA player/ franchise, I want to grow my following of fans and supporters to increase my own popularity and the popularity of the game of basketball. 
As an NBA official representative, I want to publicise the NBA and its teams and content, to increase the popularity of the game and increase revenue from the customer base through sales, traffic and engagement.
As a user who does not fit into either category, I want to learn more about the game of basketball, to see if I might want to play it some day.

##Features
In this section, you should go over the different parts of your project, and describe each in a sentence or so.
* Conference Standing section - this section uses the rapidAPI NBA API to provide up to date information on the standings for the season of each team in the Eastern and Western Conference.
* Video Section - section shows videos that boost engagement and shows interesting news from around the NBA. Weekly updates would be plays of the week from that week when the season is back on.
* News Section - with links to relevant news stories this section is interactive allowing users to show more content from the stories that interest them before following the link.
* Player Search - a search function using rapidAPI allows users to search any player in the NBA this season and get their averages for all the games they have played in their career and show up to date stats for that player. 
* Player Search Autofill - as NBA players can often have difficult names to spell (e.g Kristaps Porzingis) an autofill box has been added with all player names searchable.
* Image player search - For users not familiar with the NBA and its player a series of images are displayed on the page which when clicked show the stats for the star in the picture.
* Contact form - a contact form for users to email the site to request players they want information on. This could be past NBA stars not currently in the league. 

###Existing Features

1. - allows users X to achieve Y, by having them fill out Z

1. Conference Standing Section - allows NBA fans to see how their team is doing in the competition by visualising the results of the whole season with number of wins and losses and their team ranking by conference. 

1. Video Section - allows basketball fans to be engaged by viewing popular content imbedded on the page with top plays and documentaries of stars.

1. News Section - allows non basketball fan users to be engaged by news articles by clicking the 'show more' button or following the link to the external site. 
		
1. Player Search - allows NBA fans to view the career stats of their favourite player by typing in their name and clicking search. 
	- implemented using the player-info.js script
	
1. Player Search Autofill - allows basketball fans to find specific players names by typing in the first letter and scrolling to the name they want and clicking search to view career stats. 
	 - implemented using the player-info.js script and guided from code at https://www.w3schools.com/howto/howto_js_autocomplete.asp

1. Image Player Search - allows non basketball fan users to interact with the images on the screen to see more about the player in the picture, by clicking it. 
	 - implemented using the player-info.js script

1. Contact Form - allows all users to give feedback on the site, by filling in the form and clicking send. 
	- allows developers to improve the site and reach out to client base, by sending them an email when someone completes and sends the contact form. 
	- implemented using the email.js script


###Features Left to Implement
*A team rosters and info section. 
*Adding team information and more general information to the player search.
*Increasing the quantity of news articles and video content available.
*A recent games section with the latest games from the last week and their box scores.
*Attach another player search or allow for two searches to compare the data for two players.
*Adding in a listener for players called to give data on number of searches for each player to see which are favoured by fans. This adds value to 

##Technologies Used

* JQuery and Ajax
The project uses JQuery to simplify DOM manipulation and Ajax to make API requests with success and error function. 
https://code.jquery.com/

* Bootstrap
The project uses bootstrap to simplify html structure using the grid system and add styling using inbuilt css classes.
https://getbootstrap.com/docs/3.3/getting-started/

* RapidAPI
Uses RapidAPI's NBA API to provide player information and conference standings. 
https://rapidapi.com/api-sports/api/api-nba

* NBA Player API
Used to get player headshot images for image search
https://nba-players.herokuapp.com/

* Email JS
Used to provide functionality to the contact page.
https://www.emailjs.com/

* Google Fonts API
Used to insert more aesthetically pleasing fonts to the CSS
https://fonts.googleapis.com/

##Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. 
Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

### Videos
* Go to "Home" page.
* Locate 'Video' section by clicking dropdown menu on navbar and clicking 'Video'. Confirm scroll to relevent section.
* Try to play the first video by clicking play and confirm video plays.
* Try clicking pausing the video by clicking inside the play area and verify the video pauses.
* Try to extend the video to full screen by clicking the button in the bottom right corner and confirm video extends.

### News
* Go to "Home" Page.
* Locate 'News' section by clicking dropdown menu on navbar and clicking 'News'.Confirm scroll to relevent section.
* Try to click 'More' button on first story and confirm the text and image becomes displayed.
* Try mouseover the title link and 'read more' text to confirm underlined on mouseover.
* Try to click the bold 'read more' text and verify an external page opens with the story. 
* Try to click the title of the article and verified an external page opens to story page. 

### Player Search Box
* Go to 'Player' Page.
* Type in letter 'a' in search box and confirm that the autofill box appears.
* Type the name 'Alex' in the search box and confirm autofill box can be clicked and will correctly select "Alex Abrines" and will not show once selected.
* Tried to click 'Search' button with 'Alex Abrines' entered and confirm the loading gif appears until the information and image for alex abrines is loaded.
* Entered 'Gardeners World' into search box and confirmed the loading gif and error message prompting the user to enter another name or check spelling. 

### Player Search images
* Go to 'Player' Page.
* Mouse over images and verify the toggling of the highlight class to show they are clickable.
* Try to click the first image of "Giannis Antetokounmpo".

###Contact form:
* Go to the "Contact Us" page
* Try to submit the empty form and verify that an error message about the required fields appears
* Try to submit the form with an invalid email address and verify that a relevant error message appears
* Try to submit the form with all inputs valid and verify that a success message appears.
* Checked email response coming through from email.js to personal email in correct form.

