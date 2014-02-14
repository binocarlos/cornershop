cornershop
==========

Shopping cart that saves to LocalStorage.

## installation

npm/browserify:

```bash
$ npm install cornershop
```

component:

```bash
$ component install binocarlos/cornershop
```

## usage


### cart access

Each cart has a name - this is used for the localstorage variable name and so you can have as many carts as you want.

```js
var shop = require('cornershop');
var cart = shop('mystoreid');
```

### load()

To load the cart from localstorage either pass true as the second argument:

```js
var shop = require('cornershop');
var cart = shop('mystoreid', true);
```

or call the .load method manually:

```js
var shop = require('cornershop');
var cart = shop('mystoreid');
cart.load();
```

### save()

To save the cart to localstorage call the .save() method:

```js
var shop = require('cornershop');
var cart = shop('mystoreid');
cart.load();

// do stuff

cart.save();
```

### items

The cart works on a list of items.  An item is a plain JavaScript object with these properties:

 * id 		(10)
 * name 	(Superman Poster)
 * price	(12.5)
 * qty		(2)

You can add any meta-data to an item that you want, for example a description and image:

 * desc		(10x5 - superman logo bottom-right) 
 * image	(/img/shop/superman.png)

Access the items in the cart:

```js
// an array of items
var items = cart.items;

var item = items[0];
console.log(item);

/*
{
	id:10,
	name:'Superman Poster',
	desc:'10x5 - superman logo bottom-right',
	price:12.5,
	qty:2,
	image:'/img/shop/superman.png'
}
*/
```

### addItem({...})

To add a new item to the cart:

```js
cart.addItem({
	id:10,
	name:'Superman Poster',
	desc:'10x5 - superman logo bottom-right',
	price:12.5,
	qty:2,
	image:'/img/shop/superman.png'
})
```

### getItem(id)

To edit an item you fetch it by id and change properties of the item object and then save the cart.

```js
var item = cart.getItem(10);
item.qty++;
cart.save();
```

### removeItem(id)

Remove an item with an id - this auto-saves:

```js
cart.removeItem(10);
```

### getTotal(withExtras)

The cart will return the current total - this is based on item.price * item.qty:

```js
var total = cart.getTotal();
```

```js
var totalwithshipping = cart.getTotal(true);
```

## extras

This accounts for extra things like shipping and any other things that are not products but have a charge associated.

### setExtra(field, {...})

Add an extra item to the cart - like shipping.

Each extra item should have a 'name', 'price' and 'qty' field like the products.

```js
cart.setExtra('shipping', {
	name:'Shipping UK - 5 day',
	price:12
})
```

### removeExtra(field)

Remove an extra field

```js
cart.removeExtra('shipping');
```

### getExtras()

Return an array of the extra settings in the cart:

```js
var extra_array = cart.getExtras();
```

### getExtraTotal()

Return the sub-total just for the extra items

## License

MIT