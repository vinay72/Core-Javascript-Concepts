async and defer are boolean attributes in js which are used along with script 
tag to load the external scripts efficiently into our web page

// OLA INTERVIEW QUESTION

when you load webpage there are two things happening in your browser
1. HTML Parsing  
2. loading of the scripts

loading of scripts contains two parts - 
1. Fetching the scripts from the network
2. actually executing the scripts line by line

<script src="    "/>

// in normal scenario suppose your broswer is parsing the html line by line and it suddenly
// encounters a script tag , the broswer stops the parsing at that point of time and then sees the
// script tag. fetches the script from the network, gets into the browser and runs it there and then.
// the browser start the parsing after the script is fully executed in the browser.
// actually javascripts are blocking the rendering of the html.



// now using async attribute
<script async src= "   " />

// while using the async attribute, meanwhile the html parsing is going on, any of our script with async 
// tag are fetched from the network asynchronously along with the html parsing. So as soon as the scripts are fetched
// and are available in the browser , the html parsing stops, and the scripts are executed then and there. and once these
// scripts are executed, then html parsing continues like regular.


<script defer src="   "/>

so in case of defer attribute, the html parsing continues to go on and script tag fetched in parallel and
these scripts are executed once the html parsing has been completely executed


Optimizing Resource loading 
// preload – when you’re going to need a resource in a few seconds
// prefetch – when you need a resource for the next page
// preconnect – when you know you’ll need a resource soon, but you don’t know its full url yet
// dns-prefetch – when you know you’ll need a resource soon, but you don’t know its full url yet (for older browsers)
// prerender – when you’re certain most users will navigate to a specific page, and you want to speed it up

preload
<link rel="preload"> tells the browser to download and cache a resource (like a script or a stylesheet) as soon as
 possible. It’s helpful when you need that resource a few seconds after loading the page, and
 you want to speed it up.


prefetch
<link rel="prefetch"> asks the browser to download and cache a resource (like, a script or a stylesheet) 
in the background.
 The download happens with a low priority, so it doesn’t interfere with more important resources.
It’s helpful when you know you’ll need that resource on a next page, and you want to cache it ahead of time.

preconnect
<link rel="preconnect"> asks the browser to perform a connection to a domain in advance.
 It’s helpful when you know you’ll download something from that domain soon, but you don’t know what exactly, 
 and you want to speed up the initial connection.

dns-prefetch
<link rel="dns-prefetch"> asks the browser to perform a DNS resolution of a domain in advance.
 It’s helpful when you know you’ll connect to that domain soon, and you want to speed up the initial connection.


<link rel="prerender"> asks the browser to load a URL and render it in an invisible tab. 
When a user clicks on a link to that URL, the page should be rendered immediately.
It’s helpful when you’re really sure a user will visit a specific page next, and you want to render it faster.


Caching
Caching is the process of storing copies of frequently used data or files (like images, scripts, or API responses) 
in a temporary storage location (cache) so they can be quickly accessed later without fetching them again from the 
server.

In short — it speeds up performance, reduces load times, and saves network bandwidth by reusing previously 
loaded resources.

