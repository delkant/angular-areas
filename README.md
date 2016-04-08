# angular-areas
Angular Directive ( ng-areas )  that let you select and manipulate multiple areas on an image, create, edit, move and resize them too.

# Quick Start
#### Install with Bower
```sh
$ bower install angular-areas
```


## Use like so:
```sh
    <div ng-controller="DemoController">
		<img ng-areas="areasArray" ng-areas-width="900"
			ng-areas-allow="{'edit':true, 'move':true, 'resize':true, 'select':true, 'remove':true, 'nudge':false}"
			ng-areas-on-add="onAddArea"
			ng-areas-on-remove="onRemoveArea"
			ng-areas-on-change="onChangeAreas900"
			ng-areas-extend-data="{pageNumber: 1, tag: 'img900px'}"
			ng-src="aImage.jpg">
	</div>
```

## DEMO and example to learn from.
Check out the [DEMO](https://rawgit.com/delkant/angular-areas/master/src/main/webapp/demo/index.html)

## Browser Compatibiilty:
This plugin is fully compatible with every modern browser and IE >= 9.

# API Doc

## Area
An area is described (when retrieved or set) by a json object:

```sh
    {
        x,  // X coordinate (Position)
        y,  // Y coordinate (Position)
        z,  // Z-index (0 when inactive or 100 when focused)
        width,  // Width of the area (Size)
        height  // Height of the area (Size)
    }
```

## Options and parameters
Here is a list of available options for selectAreas, with their *default value*:
- **ng-areas** : Required attribute. Area list **areas** (*[]*) : list of areas to add to the image from the beginning  (id will be ignored);
 
 	controller i.e.:
 ```sh
    $scope.areasArray = [ {
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
 ```
 	template i.e.: 
```sh 	
 	<img ng-areas="areasArray" src="aImage.jpg">
 ```
 
 - **ng-areas-width** (*0*) : When not 0, scale the image to this width (px).

 - **ng-areas-extend-data** each area will have the properties defined on this JSON object.
  This can be used when you have multiple images with areas on them and you want to know to what image belongs a area-box. 
  You could also use this to create tags to identify the fields.
   
 - **ng-areas-allow** : Json Object
 
 i.e.  ng-areas-allow="{'edit':true, 'move':true, 'resize':false, 'select':true, 'remove':false, 'nudge':false}"
			
 - **edit** (*true*) : When set to false, unset allowMove, allowResize, allowSelect and allowDelete
 - **move** (*true*) : When set to false, Areas can not be moved with a drag & drop.
 - **resize** (*true*) : When set to false, Areas can not be resized.
 - **select** (*true*) : When set to false, Areas can not be created.
 - **remove** (*true*) : When set to false, Areas can not be removed.
 - **nudge** (*true*) : When set to false, Areas can not be moved with arrow keys.
 
 
## Events handlers
Three events are fired by the plugin:
 - **ng-areas-on-remove** (*null*): fired a selected area is removed. arguments : (event, id, areas, area)
 - **ng-areas-on-add**  (*null*): fired when a selection is released. arguments : (event, id, areas, area)
 - **ng-areas-on-change** (*null*) : triggered when the event "changed" is fired. arguments : (event, id, areas, area)
 
 
## Event listeners / subscribers
So far one event is listening by the plugin:
 - on "ngAreas:renameByAreaId"
 
 usage
 
 ```sh
 	$scope.$broadcast("ngAreas:renameByAreaId", {
		areaid : areaid,
		name : "a new Label or Name for this box"
	});
 ```
   
 
 
## LICENSE
```sh 	
 	MIT
```


 Inspired by https://github.com/360Learning/jquery-select-areas

  
