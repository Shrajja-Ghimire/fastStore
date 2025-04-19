//this action dispatch before making api cal to get products
export const fetchProductsRequest = () => ({
  type: "FETCH_PRODUCTS_REQUEST",
});

//this action dispatch when the products have been successfully fetched
export const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products, //actual data that retrived and passed to action as parameter and includedin payload.
});

//action dispatched when error occurs while trying to fetched products
export const fetchProductsFailure = (error) => ({
  type: "FETCH_PRODUCTS_FAILURE",
  payload: error, //same like products
});
