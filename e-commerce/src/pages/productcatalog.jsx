import React, { useState, useEffect } from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import '../styles/Prod';

const products = [
  { id: 1, name: 'Product 1', price: 10.99, image: 'https://media.gettyimages.com/id/1384947546/photo/laptop-isolated-mockup-with-white-screen-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kgcVDNTO2LbyIUAQ5qZpShDCt5fgR4o_TsGf1m8oIoU=', category: 'Category 1' },
  { id: 2, name: 'Product 2', price: 15.99, image: 'https://media.gettyimages.com/id/1276979385/photo/laptop-computer-blank-white-screen-on-table-in-cafe-background-laptop-with-blank-screen-on.jpg?s=612x612&w=0&k=20&c=ywr1A16NIpbmJUADXgllsrOst3jak68GXrqSw0O5zJc=', category: 'Category 2' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://media.gettyimages.com/id/1251629816/photo/the-perfect-setting-to-complete-work.jpg?s=612x612&w=0&k=20&c=gH1kQhV4MdvrFnzto7YGEk-6Q1RDZ01w9-0NVTiGmT0=', category: 'Category 1' },
  { id: 4, name: 'Product 4', price: 12.99, image: 'https://media.gettyimages.com/id/185223710/photo/laptop-floating-angled-open.jpg?s=612x612&w=0&k=20&c=gUifJap4dFkGynLBAsCCBtTxyjM511y0-85F-ntGOvU=', category: 'Category 2' },
];

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    let newFilteredProducts = products;
    if (searchTerm) {
      newFilteredProducts = newFilteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory) {
      newFilteredProducts = newFilteredProducts.filter(
        product => product.category === selectedCategory
      );
    }
    setFilteredProducts(newFilteredProducts);
  }, [searchTerm, selectedCategory])

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = event => {
    setSelectedCategory(event.target.value);
  };

  const categories = Array.from(new Set(products.map(product => product.category)));

  const filteredProductsList = loading ? (
    <div className="row">
      {[...Array(4)].map((_, index) => (
        <div className="col-md-3" key={index}>
          <div className="card mb-4 shadow-sm loading">
            <div className="skeleton-image"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="row">
      {filteredProducts.map(product => (
        <div className="col-md-3" key={product.id}>
          <div className="card mb-4 shadow-sm">
            <img
              className="card-img-top"
              src={product.image}
              alt={product.name}
              style={{height:'15rem',objectFit:'cover'}}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  <FiShoppingCart className="cart-icon" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container">
      <h1 className="text-center mb-5">Product Catalog</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <FiSearch className="search-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <select
            className="form-control"
            value={selectedCategory}
            onChange={handleFilter}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filteredProductsList}
    </div>
  );
};

export default ProductCatalog;