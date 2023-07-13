import { useState } from 'react';
import jsonData from './../../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import ProductRow from './ProductRow';

function ProductsPage () {
  const [products, setProducts] = useState(() => jsonData);
  const [searchKey,searchSetKey] = useState(() => '')
  const filterProducts = products.filter(product =>{
    return product.name.toLowerCase().includes(searchKey.toLowerCase())
  })
  
  return(
      <div>
        <h1>IronStore</h1>

        <SearchBar searchkey={searchKey} searchSetKey={searchSetKey } />

        <h2>Name</h2>
        <h2>Price</h2>

        <h3>
          {filterProducts.map((product) => <ProductTable key={product.id} product={product}/>)}
        </h3>
      </div>    
  )
}