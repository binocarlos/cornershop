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

  it('should set and get values', function(){

    var cart = get_cart();
    cart.setting('test', 10);
    cart.setting('test').should.equal(10);
    
  })

  it('should set an extra value', function(){

    var cart = get_cart();

    cart.setExtra('shipping', {
      name:'Shipping',
      price:10
    })

    var total = cart.getTotal();
    var shippingtotal = cart.getExtraTotal();
    var grandtotal = cart.getTotal(true);

    total.should.equal(36);
    shippingtotal.should.equal(10);
    grandtotal.should.equal(46);

  })


  it('should inject a qty', function(){

    var cart = Shop('store');

    cart.addItem({
      name:'thing'
    })

    cart.addItem({
      name:'thing2'
    })

    cart.qty().should.equal(2);
  })

  it('should list extra values', function(){

    var cart = get_cart();

    cart.setExtra('shipping', {
      name:'Shipping',
      price:10
    })

    cart.setExtra('giftwrap', {
      name:'Gift Wrap',
      price:2
    })

    var extras = cart.getExtras();

    extras.length.should.equal(2);
  })

  it('should merge the same products qty', function(){

    var cart = Shop('store');

    cart.addItem({
      name:'poster',
      qty:2
    })

    cart.addItem({
      name:'poster',
      qty:1
    })

    cart.items.length.should.equal(1);
    cart.items[0].qty.should.equal(3);
  })

})
