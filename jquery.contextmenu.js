// jQuery ContextMenu Plugin
// 		Create right-click UI context menus and attach them to elements
//
// Author: Gordon Hall

/*
	Usage:
	
	Be sure to include both the CSS and JS files, as well as the jQuery library.
	
	To enable a right-click context menu on an item, call the method like so:
	
		$('#element').contextmenu(whatMenu);
	
	As you can see, contextmenu() takes an argument to determine which menu list it should use for that element.
	
	These menu lists can be defined anywhere, as long as they are global and are within scope. 
	The lists are defined as JSON objects, where 'key' is the label that appears in the menu, and 'val'
	is the function to run when that option is clicked.
	
	Example:
		
		testmenu = { 'Test' : 'testFunction()' , 'Another Test' : 'anotherTestFunction()' };

	You can have as many unique menus as you like, just pass the name as the argument. 

*/

////////////////////////////////////////////
//	JQUERY CONTEXTMENU - GORDON HALL
////////////////////////////////////////////

(function( $ ) {
	$.fn.contextmenu = function(whichMenu) {	
		
		$('html').click(function() { 
			$('#gh_contextMenu').fadeOut(300, function() {
				$(this).remove(); 
			}); 
		});
		
		this.bind('click', function(event) { event.stopPropagation(); });
		
		this.bind('contextmenu', function(event) { event.preventDefault(); });
		
		this.css('cursor','default !important');
		
		this.mousedown(function(event) {
		
			var xpos = event.pageX;
			var ypos = event.pageY;
			
			if ( event.which == 3 ) {
				
				if (whichMenu == undefined) { console.log('no context menu defined'); } else { 
				
					var menuCtr = '<div id="gh_contextMenu"><\/div>';
					$('body').append(menuCtr);
					
					$('#gh_contextMenu').css({
						'top' : (ypos + 6) + 'px',
						'left' : (xpos + 6) + 'px'
					});
					
					$('#gh_contextMenu').fadeIn(200);
					
					$.each(whichMenu, function(key,val) {
						var menuItm = '<div class="gh_menuItem" onclick="' + val + '">' + key + '<\/div>';
						$('#gh_contextMenu').append(menuItm);
						console.log('click ' + key + ' to run: ' + val);
					}); 
					
				}
			
			}
		
		});
	
	};
})( jQuery );


////////////////////////////////////////////
//	MENUS LISTS (JSON) - REPLACE WITH YOUR OWN
////////////////////////////////////////////

menu1 = {
			'Save' : 'saveItem()',
			'Delete' : 'deleteItem()',
			'Edit' : 'editItem()',
			'Rename' : 'renameItem()'
		};
		
		
menu2 = {
			'Delete' : 'deleteItem()',
			'Edit' : 'editItem()'
		};
		
		
menu3 = {
			'Open' : 'openItem()',
			'Open With…' : 'openItemWith()'
		};



////////////////////////////////////////////
//	ITEM FUNCTIONS - REPLACE WITH YOUR OWN
////////////////////////////////////////////

function saveItem() { 
	console.log('saveItem function called.');
}

function deleteItem() {
	console.log('deleteItem function called.');
}

function editItem() {
	console.log('editItem function called.');
}

function renameItem() {
	console.log('renameItem function called.');
}

function openItem() {
	console.log('openItem function called.');
}

function openItemWith() {
	console.log('openItemWith function called.');
}