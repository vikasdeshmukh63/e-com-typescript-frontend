import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const addToCartHandler = ()=>{

  }


  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard productId="adfds" name="mackbook" price={233} stock={233} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/618d5bS2lUL._SL1500_.jpg"/>
      </main>
    </div>
  );
};

export default Home;
