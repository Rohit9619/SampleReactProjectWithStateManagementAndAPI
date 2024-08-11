const initialState = {
  data: localStorage.getItem("ProductList")
    ? JSON.parse(localStorage.getItem("ProductList"))
    : [],
  dataCopy: [],
  filteredData: [],
};

const ListHandler = (state = initialState, action) => {
  if (action.type === "FILTER") {
    let filteredData = state.filteredData;
    let list = state.dataCopy;
    if (action.payload.flag === 1) {
      console.log(action.payload.categories);
      const result = list.filter(
        (data) => data.category === action.payload.categories
      );
      console.log(result);
      return {
        ...state,
        data: [...filteredData, ...result],
        filteredData: [...filteredData, ...result],
      };
    } else if (action.payload.flag === 3) {
      const result =
        state.filteredData.length > 0
          ? state.filteredData.filter((data) =>
              data.title
                .toLowerCase()
                .includes(action.payload.search.toLowerCase())
            )
          : list.filter((data) =>
              data.title
                .toLowerCase()
                .includes(action.payload.search.toLowerCase())
            );
      return {
        ...state,
        data: [...result],
      };
    } else {
      // console.log(action.payload.categories, action.payload.flag);
      const result = filteredData.filter(
        (data) => data.category !== action.payload.categories
      );
      // console.log(result);
      if (result.length > 0) {
        return {
          ...state,
          data: [...result],
          filteredData: [...result],
        };
      } else {
        return {
          ...state,
          data: list,
          filteredData: [],
        };
      }
    }
  } else if (action.type === "GET_PRODUCT_LIST") {
    localStorage.setItem("ProductList", JSON.stringify(action.payload));
    return {
      ...state,
      data: action.payload,
      dataCopy: action.payload,
    };
  } else {
    let list = state.data;
    return {
      ...state,
      dataCopy: list,
    };
  }
};

export default ListHandler;
