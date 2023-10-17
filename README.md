# PWA Text Editor

## Table of Contents
+ [Description](#description)
+ [User Story](#userstory)
+ [Acceptance Criteria](#acceptance)
+ [Installation](#installation)
+ [Usage](#usage)
+ [License](#license)
+ [Video & Screenshots](#screenshots)
+ [Contact Me](#contact)
+ [Notes](#notes)
##

<a id='description'></a>
## Description

As a current student, I wanted to a PWA Text Editor using data persistence techniques that allow the user to maintain the data that they enter.  The app as a PWA is not dependant on the browser, the user may download the app and be able to access it offline.
##

<a id='userstory'></a>
## User Story

AS A developer\
I WANT to create notes or code snippets with or without an internet connection\
SO THAT I can reliably retrieve them for later use
##

<a id='acceptance'></a>
## Acceptance Criteria

GIVEN a text editor web application\
WHEN I open my application in my editor\
THEN I should see a client server folder structure\
WHEN I run `npm run start` from the root directory\
THEN I find that my application should start up the backend and serve the client\
WHEN I run the text editor application from my terminal\
THEN I find that my JavaScript files have been bundled using webpack\
WHEN I run my webpack plugins\
THEN I find that I have a generated HTML file, service worker, and a manifest file\
WHEN I use next-gen JavaScript in my application\
THEN I find that the text editor still functions in the browser without errors\
WHEN I open the text editor\
THEN I find that IndexedDB has immediately created a database storage\
WHEN I enter content and subsequently click off of the DOM window\
THEN I find that the content in the text editor has been saved with IndexedDB\
WHEN I reopen the text editor after closing it\
THEN I find that the content in the text editor has been retrieved from our IndexedDB\
WHEN I click on the Install button\
THEN I download my web application as an icon on my desktop\
WHEN I load my web application\
THEN I should have a registered service worker using workbox\
WHEN I register a service worker\
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets\
WHEN I deploy to Heroku\
THEN I should have proper build scripts for a webpack application
##

<a id='installation'></a>
## Installation
You can use the link below to access the deployed app and from there you can download it onto your computer by clicking on the "Install" button located in the top left corner.\
[PWA Text Editor](https://fast-brook-86367-d21f795e7f85.herokuapp.com/)
##

<a id='usage'></a>
## Usage
This app is meant to help the user quickly and easily add/update/remove text.
##

<a id='license'></a>
## License:  NONE
##

<a id='screenshots'></a>
## Screenshots:
##

![](https://github.com/jenstem/tech-blog/blob/main/public/assets/login.png) <br>
*This is a screenshot of PWA Text Editor blank*
##

![](https://github.com/jenstem/tech-blog/blob/main/public/assets/blogpost.png) <br>
*This is a screenshot of how the PWA Text Editor looks with a list*
##

<a id='contact'></a>
## Contact Me
Email:  jennifer.stemkowski@gmail.com <br>
GitHub URL:  https://github.com/jenstem

##
<a id='notes'></a>
## Notes:

I received help on most files from a tutor, [Scott Everett](https://calendly.com/fsf-tutor-team/scott-everett?month=2023-06).

I borrowed and changed code for webpack.config.js file, [StackOverflow](https://stackoverflow.com/questions/49832547/how-to-include-a-generated-pwa-manifest-into-a-precache-manifest-rendered-by-wor).

I borrowed and changed code for the event listener, [StackOverflow](https://stackoverflow.com/questions/50762626/pwa-beforeinstallprompt-not-called).

I borrowed and changed code for the event listener, [web.dev](https://web.dev/articles/codelab-make-installable).