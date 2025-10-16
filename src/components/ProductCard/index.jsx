import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.slug}`} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img
          src={product.thumbnail}
          alt={product.name}
          className={styles.productImage}
        />
      </div>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price.toLocaleString()}</p>
    </Link>
  );
};

export default ProductCard;
