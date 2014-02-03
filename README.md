cornershop
==========

Shopping cart that saves to LocalStorage.

## installation

npm/browserify:

```
$ npm install cornershop
```

component:

```
$ component install binocarlos/cornershop
```

## usage


### cart access

Each cart has a name - this is used for the localstorage variable name and so you can have as many carts as you want.

```
var shop = require('cornershop');
var cart = shop('mystoreid');
```

### items

The cart gives access to a list of items.  An item is a plain JavaScript object with these properties:

 * id 		(10)
 * name 	(Superman Poster)
 * price	(12.5)
 * qty		(2)

You can add any meta-data to an item that you want, for example a description and image:

 * desc		(10x5 - superman logo bottom-right) 
 * image	(/img/shop/superman.png)

Access the items in the cart:

```
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

### add item

To add a new item to the cart:

```
cart.addItem({
	id:10,
	name:'Superman Poster',
	desc:'10x5 - superman logo bottom-right',
	price:12.5,
	qty:2,
	image:'/img/shop/superman.png'
})
```

### edit item

To edit an item you fetch it by id and change properties of the item object and then save the cart.

```
var item = cart.getItem(10);
item.qty++;
cart.save();
```

### remove item

Remove an item with an id - this auto-saves:

```
cart.removeItem(10);
```

### get total

The cart will return the current total - this is based on item.price * item.qty:

```
var total = cart.getTotal();
```

## License

MIT