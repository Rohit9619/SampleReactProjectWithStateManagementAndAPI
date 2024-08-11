const initialState = {
  data: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [],
};

const cartHandler = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    if (state.data.length > 0) {
      const filterData = state.data.filter(
        (data) =>
          data.userId === parseInt(JSON.parse(localStorage.getItem("LoginId")))
      );
      const otherData = state.data.filter(
        (data) =>
          data.userId !== parseInt(JSON.parse(localStorage.getItem("LoginId")))
      );
      const findItem = filterData.find((data) => data.id === action.payload.id);
      if (findItem) {
        const updateItem = filterData.map((data) =>
          data.id === action.payload.id
            ? {
                ...data,
                price: data.price + action.payload.price,
                numberOfProducts: data.numberOfProducts + 1,
              }
            : data
        );
        localStorage.setItem(
          "data",
          JSON.stringify([...otherData, ...updateItem])
        );
        return {
          ...state,
          data: [...otherData, ...updateItem],
        };
      } else {
        const updateUser = [...state.data, action.payload];
        localStorage.setItem("data", JSON.stringify(updateUser));

        return {
          ...state,
          data: updateUser,
        };
      }
    } else {
      localStorage.setItem(
        "data",
        JSON.stringify([...state.data, action.payload])
      );

      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    if (action.payload.clear) {
      const filterData = state.data.filter(
        (data) =>
          data.userId !== parseInt(JSON.parse(localStorage.getItem("LoginId")))
      );

      localStorage.setItem("data", JSON.stringify([...filterData]));

      return {
        ...state,
        data: [...filterData],
      };
    } else {
      const filterData = state.data.filter(
        (data) =>
          data.userId === parseInt(JSON.parse(localStorage.getItem("LoginId")))
      );
      const otherData = state.data.filter(
        (data) =>
          data.userId !== parseInt(JSON.parse(localStorage.getItem("LoginId")))
      );
      const findItem = filterData.find((data) => data.id === action.payload.id);
      if (findItem) {
        if (findItem.numberOfProducts === 1) {
          const filter = filterData.filter(
            (item) => item.id !== action.payload.id
          );

          localStorage.setItem(
            "data",
            JSON.stringify([...otherData, ...filter])
          );

          return {
            ...state,
            data: [...otherData, ...filter],
          };
        } else {
          const updateItem = filterData.map((data) =>
            data.id === action.payload.id
              ? {
                  ...data,
                  price: data.price - action.payload.price,
                  numberOfProducts: data.numberOfProducts - 1,
                }
              : data
          );
          localStorage.setItem(
            "data",
            JSON.stringify([...otherData, ...updateItem])
          );

          return {
            ...state,
            data: [...otherData, ...updateItem],
          };
        }
      } else {
        const updateUser = [...state.data, action.payload];
        localStorage.setItem("data", JSON.stringify(updateUser));

        return {
          ...state,
          data: updateUser,
        };
      }
    }
  } else {
    return state;
  }
};

export default cartHandler;
