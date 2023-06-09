import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Upgrade from '../components/Upgrade';
import Product from '../components/Product';
import Checkout from '../components/Checkout';
import CartBtn from '../components/CartBtn';
import Footer from '../components/Footer';
import { firestore, collection, getDocs } from '../firebase';
import './Store.css';
import lightLogo from '../img/HBM_Logo_v2_Black.png';

function Store() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const potionsCollection = collection(firestore, 'potions');
      const spellsCollection = collection(firestore, 'spells');

      const potionsSnapshot = await getDocs(potionsCollection);
      const spellsSnapshot = await getDocs(spellsCollection);

      const potions = potionsSnapshot.docs.map((doc) => {
        return { id: doc.id, productName: doc.data().name, ...doc.data(), type: 'potion' };
      });

      const spells = spellsSnapshot.docs.map((doc) => {
        return { id: doc.id, productName: doc.data().name, ...doc.data(), type: 'spell' };
      });

      setProducts([...potions, ...spells]);
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const toggleCheckout = () => {
    setIsCheckoutVisible(!isCheckoutVisible);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (existingProductIndex > -1) {
      const newCart = [...cart];
      newCart[existingProductIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <Navbar selectedStore="selected" logo={lightLogo} />
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Upgrade />
      {isCheckoutVisible && (
        <Checkout
          cart={cart}
          onClose={toggleCheckout}
          onClearCart={clearCart}
        />
      )}
      <CartBtn onViewCartClick={toggleCheckout} />
      <div className="products-container">
        {products.filter((product) =>
        (product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchTerm.toLowerCase()))
        ).map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Store;
