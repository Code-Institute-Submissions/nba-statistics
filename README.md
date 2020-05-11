# NBA-statistics


The site is essentially a newsletter designed to promote NBA basketball through the providing of information on players, teams, media and news from around the nba.
Users will be able to see up to date league rankings for the season, search for up to date statistics from their favourite player and see media
from the latest games to be played. They will also have the ability to contact the service to request data for specific players as all current nba players are listed. The value to the user will be the gaining of information through searches, viewing media and related content around the nba
and contacting the service with specific feedback or requests. The value to the provider will be increased traffic and outreach to fans and potential fans,
, direct feedback and usable data on players favoured by users and an interactive site that is engaging to the user. 

## UX
 The users for this website can be split into three main groups. The first are general type users who are already fans of basketball or the NBA in general and will likely be looking for specific
information and have come to the site with a specific purpose. These users are likely the ones who will recieve the most engagement. The second group of users are organisational users connected to
the league and its subsidieres itself, be that the NBA organisation or specific franchises within the league. This would be the group that stands to benefit through engagement with 
their customer base. The third group are more general type users that do not fit into either category, who are not necessarily basketball fans and perhaps happened across the site by accident or were 
recommended it by a friend. This group will likely be less engage but are the ones who are set to learn the most from the site as all information may be things they haven't seen before. 

### User Stories
* As an NBA Fan, I want to keep up to date with current players statistics and leage standings by visiting a site regularly that has this information as the season progresses.
* As a basketball fan, I want a convenient place to see stories and video from a variety of mainstream media outlets, by visiting a site that has all of them in one place.
* As an NBA player/ franchise, I want to grow my following of fans and supporters to increase my own popularity and the popularity of the game of basketball. 
* As an NBA official representative, I want to publicise the NBA and its teams and content, to increase the popularity of the game and increase revenue from the customer base through sales, traffic and engagement.
* As a user who does not fit into either category, I want to learn more about the game of basketball, to see if I might want to play it some day.

### UX Scope 
 As detailed in the user stories the main user type will be fans of the game of basketball and their main desire is to have up to date content and 
data for goings on in the league all in one place. Eye catching content in the forms of videos, news articles and team data will be used throughout the project to 
draw in users and provide value. This will also be valuable to users not familiar with the game by being informative and engaging. Another feature users may not know they need will be the ability to find data on any player in the league via a 
search function. This will allow them to search even lesser known players from their favourite teams and see there stats for their career. Limiting factors to data
will be API requests (only 1000 per day) meaning that attempts will need to be made to keep API requests per refresh to a minimum. In the case of extended traffic to the 
website upgrading to a paid service may be necessary. 

### UX Surface
The site will mainly use the font family 'Exo' for styling of all text. Navbar header and footer elements will be sticky (top and bottom) and on the larger pages will assist navigation through 
interactivity. A blue background will be used for both following/as near to as possible the NBA logo color scheme. Social links will use FontAwesome icons in footer elements.
The site will be viewable on all screen sizes with a mobile first approach to responsiveness. Differences between screen layouts have been detailed in wireframes however as it is likely 
tablet and desktop view will be the same wireframes have been included for mobile and desktop view only. See attached file in assets/wireframes for details.

## Features
* Conference Standing section - this section uses the rapidAPI NBA API to provide up to date information on the standings for the season of each team in the Eastern and Western Conference.
* Video Section - section shows videos that boost engagement and shows interesting news from around the NBA. Weekly updates would be plays of the week from that week when the season is back on.
* News Section - with links to relevant news stories this section is interactive allowing users to show more content from the stories that interest them before following the link.
* Player Search - a search function using rapidAPI allows users to search any player in the NBA this season and get their averages for all the games they have played in their career and show up to date stats for that player. 
* Player Search Autofill - as NBA players can often have difficult names to spell (e.g Kristaps Porzingis) an autofill box has been added with all player names searchable.
* Image player search - For users not familiar with the NBA and its player a series of images are displayed on the page which when clicked show the stats for the star in the picture.
* Contact form - a contact form for users to email the site to request players they want information on. This could be past NBA stars not currently in the league. 

### Existing Features

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


### Features Left to Implement
* A team rosters and info section. 
* Adding team information and more general information to the player search (i.e teams player plays for, physical attributes, etc) - not currently attached as information not available for all players searchable.
* Increasing the quantity of news articles and video content available.
* A recent games section with the latest games from the last week and their box scores.
* Attach another player search or allow for two searches to compare the data for two players.
* Adding in a listener for players called to give data on number of searches for each player to see which are favoured by fans. 
* Adding a Youtube search function to player search to show player highlights videos from search.

## Technologies Used

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

## Testing

### Conference standings
* Go to "Home" page.
* Locate 'Conference Standings' section by clicking dropdown menu on navbar and clicking 'Conference Standings'. Confirm loading of all team data, names and logos and order of ranking.
* Compared results to https://www.nba.com/standings and verified results match.
* Alter URL to an incorrect link and confirm the error message is displayed in the event API is unavailable. 

### Videos
* Go to "Home" page.
* Locate 'Video' section by clicking dropdown menu on navbar and clicking 'Video'. Confirm scroll to relevent section.
* Try to play the first video by clicking play and confirm video plays.
* Try clicking pausing the video by clicking inside the play area and verify the video pauses.
* Try to extend the video to full screen by clicking the button in the bottom right corner and confirm video extends.

### News Articles
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
* Entered 'Gardeners World' into search box and confirmed the loading gif followed by error message prompting the user to enter another name or check spelling. 
* Altered first and second API URL's in term and confirmed presence of error message asking user to try again later in the event API is unavailable. 

### Player Search images
* Go to 'Player' Page.
* Mouse over images and verify the toggling of the highlight class to show they are clickable.
* Try to click the first image of "Giannis Antetokounmpo" and verified data and headshot image loaded correctly, with loader gif correctly showing before. 

### Contact form:
* Go to the "Contact Us" page
* Try to submit the empty form and verify that an error message about the required fields appears
* Try to submit the form with an invalid email address and verify that a relevant error message appears
* Try to submit the form with all inputs valid and verify that a success message appears.
* Checked email response coming through from email.js to personal email in correct form.

### Responsive Design
The project was designed with a mobile first approach and aims to be aesthetically pleasing and well ordered on all screen sizes. Generally there is not much 
difference between desktop and tablet screen sizes as during development content seemed to work for both, with the only major difference being the font size at the larger screen size.

For the home page on mobile versions the standings table is slightly thinner, with the shortened team name used and with several collumns including home and away wins and losses, 
and the team logo removed to fit the screen size. Videos are then displayed with vertical flow, instead of horizontally instead of the horizontal format used on tablet and desktop view. News 
articles similarly have a top down flow at the smaller size with image and text on top of each other. Navbar elements are condensed into a burger dropdown 
to reduce the space they take up on mobile view and then are evenly spaced on tablet and desktop with a slight margin between the logo and nav elements. Nav elements within the home page use a dropdown function.

On the player page using mobile screen size the largest player image is not displayed and the rest use a 2 collumn approach with smaller image sizes. The player data
is loaded in image on top and data below, compared to side by side on tablet and desktop. The space reserved for the data is also larger on tablet and desktop. Similarly the 
Nav elements use the consistent approach of being condensed to a burger dropdown on mobile resolution. 

Finally on the contact page, header elements have a smaller width on mobile sizes compared to other sizes with more of the text being wrapped.
Once again for consistence the Navbar uses the previously detailed approach.

### Bugs 
 Here is detailed several of the bugs discovered through testing and developments:

* Maxing out API requests on retrieving standings 
Very early on in development the API request used XMLHTTPRequest, however as the code developed and the standing data needed to be ordered by ranking
several for loops became required and the function was then in a loop of making a request each time the loop search for a specific ranking. With only 1000 requests per day the 
page was maxing the daily request in one or two page loads. API requests were therefore altered to Ajax and a global variable was initially defined to avoid 
repeat requests for each API. 

* Error message 'Player not found - please enter another player or check the spelling' appearing while loading.
 This bug came early on in development of the player search function. A correct input would cause the loader and error message to display at the same time
and then the data to be loaded. The fix was to alter the player matching function ('playerRequest') to using a 'filter' method creating a new variable and 
then assessing the length of that variable. If the length was 0 the data had not been passed to it meaning the name did not exist and the error message would show. 

* Player search function case sensitive bug
 When entering the name to the search bar it originally only worked if the first and last name were capitalised. The fixe was relatively easy 
and just required a 'toLowerCase' method on the data entered and the player name data from the API. After this was completed the autocomplete was 
initiated making it redundant however as autofill automatically capitalised first and last. The method remains in case the user does not use the autofill selection however.

* Previous player data remaining after a search
 When one search had been attempted and returned data and a new selection, either by the search function or image selector was used the loading gif was coming in 
above the previous player data, with data only being replace upon completion of the function to 'writeToDocument'. Easily fixed with a clearing the "#nba-user-data" and "#player-image-container"
at the start of each new search. 

* Total home wins and losses not adding up to total wins/loses in Standings table
 There was a slight error when data was checked as function 'getData' was originally searching for '[conference][wins]' and '[conference][loses]' 
from the API which was different than total wins and loses. 


## Deployment
 The project was created using Gitpod for Github. Initially the main page was created in conjunction with the script.js file to provide functionality
and interactivity. The style was formated using style.css. The second page, player.html was then created in conjunction with the player-info.js file 
to give functionality to the player search feature with the contact page being created last. The project was then deployed on the Github site by going to settings and Github pages.
While there were several differences between the concept design in the wireframes, there are no major differences between the developmental and deployed version. 


## Credits

### Content

* The text for News section was copied from the New York Times website https://www.nytimes.com/
* The data for conference standings and player data was implemented using RapidAPI's NBA API found here https://rapidapi.com/api-sports/api/api-nba

## Media
* The photos used in this site were obtained from https://espn.co.uk, https://wallpapersafari.com/, https://clutchpoints.com/, https://dailymail.co.uk, https://www.wsj.com/ and https://dribbble.com/shots/3822565-Loading for loader gif by Cody Pearson.
## Acknowledgements
* I received inspiration for this project from Tom Smith and assistance with his personal user story. 
* I would like to thank Rhey Magcalas for her help and support.