function ImgItem(title, number, alt, url){
	
	//Call constructor from superclass.
	Item.call(this, title, number);
	
	//Set attributes.
	this.alt = alt;
	this.url = url;
	this.width = 100;
	this.height = 100;
}

//Inherit from item.
ImgItem.prototype = new Item();
ImgItem.prototype.constructor = ImgItem;