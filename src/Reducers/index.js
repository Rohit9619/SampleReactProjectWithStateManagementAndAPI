import { combineReducers } from "redux";

import ListHandler from "./ItemsList";
import RegisterHandler from "./register";
import cartHandler from "./cart";
import OrdersHandler from "./orders";

const rootReducer = combineReducers({
  ListHandler,
  RegisterHandler,
  cartHandler,
  OrdersHandler,
});

export default rootReducer;
