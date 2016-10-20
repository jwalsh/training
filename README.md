JavaScript Training: Fall 2016
==============================

Provide background on the tutorials through the end of the quarter. 

The emphasis is on delivering client-side examples of core JavaScript
features weekly rather than just language features; priority is given
to likely implementation issue for applications.


w1: Setup: IDE, editors, version control, and environment
---------------------------------------------------------

+ Environment setup for an editor, 
+ version control.  

Create a template for working with jQuery for examples and pulling data externally.

w2: Global, Promises, async 
---------------------------

Summary: Sourcing external data.  Global variables with the var keyword and the window object in web pages.  Using console effectively.  Navigating object structures.


- when and Bluebird

- Promise example

- Closures: http://jibbering.com/faq/notes/closures/

- IIFE: A number of libraries and widgets begin with the following boilerplate:

```
(function() {})();
```

-   http://briancrescimanno.com/2009/09/24/how-self-executing-anonymous-functions-work/


w3: simplePlugin: module pattern
--------------------------------

Summary: Closures, anonymous functions, the foundations of a library.
Sample test questions for interviews.

### Scope revisited

### Scope chain


w4: simpleLibrary: prototypes, constructors, and oojs
-----------------------------------------------------

w5: simpleTool: code review detection patterns
----------------------------------------------

Show example of code reviews from jQuery, Facebook JavaScript SDK, and
YUI for best practices.

Evaluate each with jslint, Closure, and

w6: ES5; ES2015 - ES2017
------------------------

w7: ...scope chains, execution context
--------------------------------------

See JDG 8.8 and ...

w8: Culture
-----------

TODO: Pull from the RSS feed and extract search terms.

Brendan Eich Erik Arvidsson Sam Tobin-Hochstadt Dave Fugate Nebojša
Ćirić Allen Wirfs-Brock Mark S. Miller

Proxies
<http://www.sdtimes.com/blog/post/2009/04/16/Brendan-Eich-Explains-ECMAScript-Fifth-Edition-To-You.aspx>

w9: MVC
------------------

- Read Backbone source
- Create a Router that just supports get against a direct match of the fragment identifier

```
import router from 
```
+ http://emberjs.com/api/classes/Ember.Router.html
+ http://dailyjs.com/2013/03/07/backbone-tutorial-13/
+ https://github.com/aaronblohowiak/routes.js/blob/master/index.js
+ https://expressjs.com/en/starter/basic-routing.html

- Create a Template tool that only replaces {}

+ http://ejohn.org/blog/javascript-micro-templating/
+ https://github.com/janl/mustache.js

- Create a minimal controller

+ Handle a response that has a send() method

- Create minimal models with no DB backing with TODOMVC as the example


w10: Reactive UIs
-----------------

- React 

w11: State Management
---------------------

- https://github.com/reactjs/redux

w12: Transpilers
----------------


- TypeScript 
