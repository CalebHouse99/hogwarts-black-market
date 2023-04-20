import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Upgrade from '../components/Upgrade';
import Product from '../components/Product';
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
        return { id: doc.id, ...doc.data(), type: 'potion' };
      });

      const spells = spellsSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data(), type: 'spell' };
      });

      setProducts([...potions, ...spells]);
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar selectedStore="selected" logo={lightLogo} />
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Upgrade />
      <div className="products-container">
        {products.filter((product) =>
        (product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchTerm.toLowerCase()))
        ).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Store;
