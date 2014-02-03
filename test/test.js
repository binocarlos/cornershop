var Shop = require('../');

describe('CornerShop', function(){

	function get_cart(){
		var cart = Shop('store');
    cart.addItem({
    	id:10,
    	name:'product',
    	price:10,
    	qty:2
    })

    cart.addItem({
    	id:11,
    	name:'product2',
    	price:4,
    	qty:4
    })
    return cart;
	}
  it('should be a function', function(){

    Shop.should.be.type('function');

  })

  it('should add an item', function(){

    var cart = get_cart();

    var item = cart.getItem(10);

    item.price.should.equal(10);

  })

  it('should remove an item', function(){

  	var cart = get_cart();
  	cart.removeItem(10);
  	cart.items.length.should.equal(1);
    
  })

  it('should get the total', function(){

  	var cart = get_cart();
  	var total = cart.getTotal();

  	total.should.equal(36);
    
  })

})
