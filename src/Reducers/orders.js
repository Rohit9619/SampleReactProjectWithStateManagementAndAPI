const initialState = {
  data: [],
  totalPrice: 0,
};

const OrdersHandler = (state = initialState, action) => {
  if (action.type === "BUY") {
    let array = action.payload.data.map((data) => data.price);
    const totalPrice = array.reduce((data, index) => data + index);
    localStorage.setItem(
      "orders",
      JSON.stringify([...state.data, ...action.payload.data])
    );
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    console.log(totalPrice);
    return {
      data: [...state.data, ...action.payload.data],
      totalPrice: totalPrice,
    };
  } else {
    if (localStorage.getItem("orders")) {
      return {
        data: [...JSON.parse(localStorage.getItem("orders"))],
        totalPrice: JSON.parse(localStorage.getItem("totalPrice")),
      };
    } else {
      return state;
    }
  }
};

export default OrdersHandler;
