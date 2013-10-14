function Prikbord(title){
	
	//Set attributes.
	this.title = title;
	this.items = new Array();
	
	//Adds a new item to items array.
	this.addItem = function(item){
		
		this.items.push(item);
	}
}