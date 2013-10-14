function TextItem(title, number, content){
	
	//Call constructor from superclass.
	Item.call(this, title, number);
	
	//Set attributes.
	this.content = content;
}

//Inherit from item.
TextItem.prototype = new Item();
TextItem.prototype.constructor = TextItem;