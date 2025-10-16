import { useSelector } from 'react-redux';
import { getProducts, getProductDetail } from './selectors';

export const useProducts = () => useSelector(getProducts);
export const useProductDetail = () => useSelector(getProductDetail);