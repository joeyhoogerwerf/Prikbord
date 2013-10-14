//Uncomment to clear locar storage.
//localStorage.clear();

//When DOM is ready.
$(function(){
	
	//Create new prikbord.
	var prikbord = new Prikbord('Wereldreis');
	
	//Display title.
	$('h1').text(prikbord.title);
	
	//Create new items -> add them to items array.
	var textItem1 = new TextItem('Koffer kopen', prikbord.items.length, 'Ik moet een nieuwe koffer kopen!');
	prikbord.addItem(textItem1);
	var textItem2 = new TextItem('Inenting', prikbord.items.length, 'Informeren betreft inenting!');
	prikbord.addItem(textItem2)
	var imgItem3 = new ImgItem('De fiets', prikbord.items.length, 'Mijn fiets', 'http://www.fietsentoko.nl/public/thumbs/fiets-country-2011-186.jpg');
	prikbord.addItem(imgItem3);
	var imgItem4 = new ImgItem('Bergschoenen', prikbord.items.length, 'Mijn schoenen', 'https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcT3jqxK2bOwEQrkUNhMfLJUSLnxXQ0pjCsaakm_cK5QXw1FrCz7JQ');
	prikbord.addItem(imgItem4);
	
	//Loop trough each item in prikbord.
	for(var i in prikbord.items){
		
		//When item is a textitem -> append div with textual content.
		if(prikbord.items[i].constructor == TextItem)
			$('#prikbord').append('<div class="item"><h4>' + prikbord.items[i].title  + '</h4><p>' + prikbord.items[i].content  + '</p></div>');
		
		//When item is a imgitem -> append div with image content.
		if(prikbord.items[i].constructor == ImgItem)
			$('#prikbord').append('<div class="item"><h4>' + prikbord.items[i].title  + '</h4><img src="' + prikbord.items[i].url + '" alt="' + prikbord.items[i].alt + '" /></div>');
		
		//Set data attribute (number) on current item.
		$('.item').last().data('number', prikbord.items[i].number);
	}
	
	//Set items as draggable.
	$('.item').draggable({
		
		//Add handler that fires when draggin is stopped.
		stop:function(ev,ui){
			
			//Save position from dragged item in local storage.
			localStorage.setObject('item-' + $(ev.target).data('number'), {'left':ui.position.left, 'top':ui.position.top});
		}
	});
	
	//Loop trough each item in local storage.
	for(var key in localStorage){
		
		//Get local storage item.
		var localStorageItem = localStorage.getObject(key);

		//If key matches regular expression 'item-'.
		if(key.match('item-')){
			
			//Get item number from key 
			var itemNumber = key.replace('item-', '');
				
			//Loop trough each item element in DOM.
			$('.item').each(function(){
					
				//If data attribute matches from item element matches item number.
				if($(this).data('number') == itemNumber)
					
					//Position item element.
					$(this).css({'left': localStorageItem.left + 'px', 'top': localStorageItem.top + 'px'});
			});
		}
	}
});