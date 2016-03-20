# angular-areas
Angular Directive ( ng-areas )  that let you select and manipulate multiple areas on an image, create, edit, move them and resize them too.

# Quick Start

## Use like so:

    $("#mypic").selectAreas({
      minSize: [30, 30],    // Minimum size of a selection
      maxSize: [400, 300],  // Maximum size of a selection
      onChanged: $.noop,    // fired when a selection is released
      onChanging: $.noop    // fired during the modification of a selection
    });


## DEMO and example to learn from.
Check out [DEMO](https://rawgit.com/delkant/angular-areas/angular-areas/master/src/main/webapp/demo.html)

## Browser Compatibiilty:
This plugin is fully compatible with every modern browser and IE >= 9.

# API Doc

## Area
An area is described (when retrieved or set) by a json object:

    {
        id, // ID identifying the area in the plugin
        x,  // X coordinate (Position)
        y,  // Y coordinate (Position)
        z,  // Z-index (0 when inactive or 100 when focused)
        width,  // Width of the area (Size)
        height  // Height of the area (Size)
    }

## Options and parameters
Here is a list of available options for selectAreas, with their *default value*:
 - **ng-areas-allow** : Json Object
 i.e.  ng-areas-allow="{'edit':true, 'move':true, 'resize':false, 'select':true, 'remove':false, 'nudge':false}"
			
 - **edit** (*true*) : When set to false, unset allowMove, allowResize, allowSelect and allowDelete
 - **move** (*true*) : When set to false, Areas can not be moved with a drag & drop.
 - **resize** (*true*) : When set to false, Areas can not be resized.
 - **select** (*true*) : When set to false, Areas can not be created.
 - **remove** (*true*) : When set to false, Areas can not be removed.
 - **nudge** (*true*) : When set to false, Areas can not be moved with arrow keys.
 
 - **ng-areas** : Required attribute. Area list **areas** (*[]*) : list of areas to add to the image from the beginning  (id will be ignored);
 	controller i.e.:
    **$scope.areasArray** = [ {
		"x" : 557,
		"y" : 35,
		"z" : 100,
		"height" : 130,
		"width" : 925,
		"name" : "Menu Options",
		"cssClass" : "class_red",
		"id" : 37,
		"description" : "Menu"
	}, {
		"x" : 822,
		"y" : 274,
		"z" : 0,
		"height" : 250,
		"width" : 829,
		"name" : "AngularJS Main Logo",
		"cssClass" : "class_red",
		"id" : 35,
		"description" : "AngularJS Main Logo"
	} ];
 	template i.e.: **ng-areas="areasArray"** 
 
 - **ng-areas-width** (*0*) : When not 0, scale the image to this width (px).

## Events handlers
Three events are fired by the plugin:
 - **ng-areas-on-remove** (*null*): fired a selected area is removed. arguments : (event, id, areas, area)
 - **ng-areas-on-add**  (*null*): fired when a selection is released. arguments : (event, id, areas, area)
 - **ng-areas-on-change** (*null*) : triggered when the event "changed" is fired. arguments : (event, id, areas, area)
 
 
 Inspired by https://github.com/360Learning/jquery-select-areas