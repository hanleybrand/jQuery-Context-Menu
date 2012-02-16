// jQuery ContextMenu Plugin
// 		Create right-click UI context menus and attach them to elements
//
// Author: Gordon Hall

/*
	Usage:
	
	Be sure to include both the CSS and JS files, as well as the jQuery library.
	
	To enable a right-click context menu on an item, call the method like:
	
		$('#element').contextmenu(whatMenu);
	
	As you can see, contextmenu() takes an argument to determine which menu list it should use for that element.
	
	These menu lists can be defined anywhere, as long as they are within scope. 
	The lists are defined as JSON objects, where 'key' is the label that appears in the menu, and 'val'
	is the function to run when that option is clicked.
	
	When writing your context menu functions, if you need to access the selected element, you can select it with:
		
		$('.contextActive:first')
		
	OR if you are performing operations on multiple selected elements you can loop through them with:
	
		$('.contextActive').each(function() {
			// function to run on each item
		});
	
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
			$('.contextActive').removeClass('contextActive');
		});
		
		this.live('click', function(event) { event.stopPropagation(); });
		
		this.live('contextmenu', function(event) { event.preventDefault(); });
		
		this.css('cursor','default !important');
		
		this.live('mousedown', function(event) {
		
			var xpos = event.pageX;
			var ypos = event.pageY;
			
			if ( event.which == 3 ) {
				
				if (whichMenu == undefined) { console.log('no context menu defined'); } else { 
				
					$('#gh_contextMenu').remove();
					$(this).addClass('contextActive');
				
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
	alert('saveItem function called.');
}

function deleteItem() {
	alert('deleteItem function called.');
}

function editItem() {
	alert('editItem function called.');
}

function renameItem() {
	alert('renameItem function called.');
}

function openItem() {
	alert('openItem function called.');
}

function openItemWith() {
	alert('openItemWith function called.');
}