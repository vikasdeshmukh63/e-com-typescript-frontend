import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");

  const addToCartHandler = () => {};

  const isNextPage = page < 4;
  const isPrevPage = page > 1;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price : {maxPrice || ""}</h4>
          <input type="range" min={100} max={100000} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="">Sample1</option>
            <option value="">Sample2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" placeholder="Search by Name..." value={search} onChange={(e) => setSearch(e.target.value)} />

        <div className="search-product-list">
          <ProductCard
            productId="adfds"
            name="mackbook"
            price={233}
            stock={233}
            handler={addToCartHandler}
            photo="https://m.media-amazon.com/images/I/618d5bS2lUL._SL1500_.jpg"
          />
        </div>

        <article>
          <button disabled={!isPrevPage} onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <span>
            {page} of {4}
          </span>
          <button disabled={!isNextPage} onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
