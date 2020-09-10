import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// console.log(item)
		// add the given item to the cart
		setCart([...cart, item]);
		// console.log(cart)
	};

	const removeItem = item => {
		// console.log(item)
		setCart(
			cart.filter((itm) => (itm.id !== item.id))
			)};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<div className="App">
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
							<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
