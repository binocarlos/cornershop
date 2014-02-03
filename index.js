function Shop(name, autoload){
	this.name = name;
	this.items = [];
	if(autoload){
		this.load();
	}
}

module.exports = Shop;

Shop.prototype.addItem = function(item){
	this.items.push(item);
}

Shop.prototype.getItem = function(id){
	var items = this.items.filter(function(item){
		return item.id==id;
	})
	return items.length>0 ? items[0] : null;
}

Shop.prototype.removeItem = function(id){
	this.items = this.items.filter(function(item){
		return item.id!=id;
	})
}

Shop.prototype.getTotal = function(){
	var total = 0;
	this.items.forEach(function(item){
		total+=(item.price||0)*(item.qty||0);
	})
	return total;
}

Shop.prototype.load = function(){
	var string = localStorage != null ? localStorage[this.name + "_cornershop"] : null;
	if(string){
		try {
      this.items = JSON.parse(string);
    }
    catch (err) {

    }
	}
}

Shop.prototype.save = function(){
	if (localStorage != null){
    localStorage[this.name + "_cornershop"] = JSON.stringify(this.items);
  }
}

module.exports = function(name){
	return new Shop(name);
}

module.exports.Class = Shop;