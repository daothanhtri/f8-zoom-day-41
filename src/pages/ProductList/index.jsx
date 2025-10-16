import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productActions, productHooks } from "../../store/product";
import ProductCard from "../../components/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = productHooks.useProducts();

  useEffect(() => {
    dispatch(productActions.getList());
  }, [dispatch]);

  return (
    <div className={styles.productListContainer}>
      <h1 className={styles.pageTitle}>Our Products</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
