export const loadData = (props) => {
  return {
    type: "GET_PRODUCT_LIST",
    payload: props.payload,
  };
};

export const isLoading = (props) => {
  return {
    type: "LOADING",
    payload: props.payload,
  };
};

export const switchPage = () => {
  return {
    type: "SIGNUP/SIGNIN",
  };
};

export const valid = (props) => {
  return {
    type: "LOGIN/LOGOUT",
    payload: props.payload,
  };
};

export const register = (props) => {
  return {
    type: "ADD_USER",
    payload: props.payload,
  };
};

export const addToCart = (props) => {
  return {
    type: "ADD_TO_CART",
    payload: props.payload,
  };
};

export const removeFromCart = (props) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: props.payload,
  };
};

export const filterItems = (props) => {
  return {
    type: "FILTER",
    payload: props,
  };
};

export const BuyItems = (props) => {
  return {
    type: "BUY",
    payload: props,
  };
};
