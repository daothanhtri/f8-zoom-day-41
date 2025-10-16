import { http } from "../../utils/http";
import { showLoading, hideLoading } from "../ui/actions";
import { GET_LIST, SET_LIST, GET_DETAIL, SET_DETAIL } from "./constants";

// Action creators
export const setList = (products) => ({
  type: SET_LIST,
  payload: products,
});

export const setDetail = (product) => ({
  type: SET_DETAIL,
  payload: product,
});

// Thunk actions
export const getList = () => async (dispatch) => {
  dispatch({ type: GET_LIST });
  dispatch(showLoading());
  try {
    const products = await http.get("/products");
    dispatch(setList(products.items)); // API trả về { items: [...], total: ... }
  } catch (error) {
    console.error("Failed to fetch product list:", error);
  } finally {
    dispatch(hideLoading());
  }
};

export const getDetail = (slug) => async (dispatch) => {
  dispatch({ type: GET_DETAIL });
  dispatch(showLoading());
  try {
    const product = await http.get(`/products/${slug}`);
    dispatch(setDetail(product));
  } catch (error) {
    console.error(`Failed to fetch product detail for slug ${slug}:`, error);
    dispatch(setDetail(null));
  } finally {
    dispatch(hideLoading());
  }
};
