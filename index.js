function Shop(name, autoload){
	this.name = name;
	this.items = [];
	this.settings = {};
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
			var data = JSON.parse(string);
      this.items = data.items || [];
      this.settings = data.settings || {};
    }
    catch (err) {

    }
	}
}

Shop.prototype.save = function(){
	if (localStorage != null){
    localStorage[this.name + "_cornershop"] = JSON.stringify({
    	items:this.items,
    	settings:this.settings
    })
  }
}

Shop.prototype.setting = function(name, val){
	if(arguments.length>=2){
		this.settings[name] = val;
	}
	return this.settings[name];
}

module.exports = function(name, autoload){
	return new Shop(name, autoload);
}

module.exports.Class = Shop;