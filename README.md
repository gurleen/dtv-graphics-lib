# dtv-graphics-lib

A library for use in HTML broadcast graphics templates.
Made for Drexel Athletics broadcasts.

## Build
````bash
npm run build
````

## Usage
Include the `dist/manager.min.js` file in your template. Then,

````javascript
var elem = document.getElementById("anim");
var handler = new DOMHandler();
var animator = new BasicAnimator(elem);
var manager = new GraphicManager(handler, animator);
````
