import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { productActions, productHooks } from "../../store/product";
import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = productHooks.useProductDetail();

  useEffect(() => {
    dispatch(productActions.getDetail(slug));
  }, [dispatch, slug]);

  const handleBack = () => {
    navigate("/products");
  };

  if (!product) {
    return (
      <div className={styles.productDetailContainer}>
        <h2 className={styles.notFoundMessage}>
          Loading product details or product not found...
        </h2>
        <button onClick={handleBack} className={styles.backButton}>
          &larr; Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className={styles.productDetailContainer}>
      <button onClick={handleBack} className={styles.backButton}>
        &larr; Back to Products
      </button>
      <div className={styles.detailCard}>
        <div className={styles.imageSection}>
          <img
            src={product.thumbnail}
            alt={product.name}
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoSection}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productPrice}>
            ${product.price.toLocaleString()}
          </p>
          <div
            className={styles.productDescription}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
