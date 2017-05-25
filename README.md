# RaProject04

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).
This project includes the use of angular components, some of which require information from a service in order to display blog/journal entries, and one posts a new blog/journal entry to the server.

may 25, 2017: Future steps:
-navigation/routing in the show-latest-journals component seems off; the address bar still shows as "home", but the proper component loads.
-adventure-list html is currently coded to show 15 most recent adventure entries, however I would like to generate this html in javascript so it is easy to show less or more posts if required.  This javascript is currently commented out in the ts file.
-the images from the service are not working as background images to the containers they are placed in; therefor some of the styling aspect are off from the received comps.
-the top navigation and aside should be made into their own components.
-.css files should be changes to .scss files to clean up the styling a bit.
-build, test the site on firebase.
-save the retrieved information from the service to memory/storage so that the user can use the site even if they lose internet connection.
