/* jslint brower : true, continue : true, devel : true, indent : 2, 
  maxerr : 50, newcap : true, nomen : true, plusplus : true, 
  regexp : true, sloppy : true, vars : true, white : true
*/
/*global jQuery*/
// Module /spa/
// Provide chat slider capability
var spa = (function(){
	'use strict';
	  // Module scope variables
	var initModule = function($container){
		spa.model.initModule();
		spa.shell.initModule($container);
	};
	return {initModule : initModule};
}());