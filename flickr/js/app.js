

requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
      
    },
    "shim": {
        //"flickr-infinitescroll": ["jquery"],
        "dom.js":['jquery'],
        "ajax":['jquery'],
        "jquery-ui":['jquery']
    		}
        
		});

// starting the app
requirejs(["app/main"]);
