const initialState = {
  data: localStorage.getItem("RegisteredUsers")
    ? JSON.parse(localStorage.getItem("RegisteredUsers"))
    : [],
  idCount: localStorage.getItem("idCount")
    ? JSON.parse(localStorage.getItem("idCount"))
    : 0,
  loading: false,
  auth: false,
  switchPage: false,
};

const RegisterHandler = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const addUser = {
        Id: state.idCount + 1,
        Username: action.payload.Username,
        Password: action.payload.Password,
        IsActive: false,
      };
      localStorage.setItem("emailId", JSON.stringify(addUser.Username));
      localStorage.setItem(
        "RegisteredUsers",
        JSON.stringify([...state.data, addUser])
      );
      localStorage.setItem("idCount", JSON.stringify(state.idCount + 1));
      return {
        ...state,
        data: [...state.data, addUser],
        idCount: state.idCount + 1,
      };

    case "LOADING":
      return {
        loading: action.payload === 1 ? true : false,
        ...state,
      };

    case "SIGNUP/SIGNIN":
      return {
        ...state,
        switchPage: !state.switchPage,
      };

    case "LOGIN/LOGOUT":
      const rand = () => Math.random(0).toString(36).substr(2);
      const generateToken = (length) =>
        (rand() + rand() + rand() + rand()).substr(0, length);

      let updateUser;
      if (action.payload.flag === 1) {
        let token = generateToken(10);
        localStorage.setItem("LoginId", JSON.stringify(action.payload.id));
        localStorage.setItem("token", JSON.stringify(token));
        const findUserName = state.data.find(
          (user) => user.Id === action.payload.id
        );
        localStorage.setItem("emailId", JSON.stringify(findUserName.Username));
        updateUser = state.data.map((p) =>
          p.Id === action.payload.id
            ? {
                ...p,
                Token: token,
                IsActive: true,
              }
            : p
        );

        localStorage.setItem(
          "RegisteredUsers",
          JSON.stringify([...updateUser])
        );
        return {
          ...state,
          data: [...updateUser],
          auth: true,
        };
      } else {
        updateUser = state.data.map((p) =>
          p.Id === action.payload.id
            ? {
                ...p,
                Token: "",
                IsActive: false,
              }
            : p
        );

        const orders = localStorage.getItem("orders");
        const data = localStorage.getItem("data");
        localStorage.clear();
        localStorage.setItem(
          "RegisteredUsers",
          JSON.stringify([...updateUser])
        );

        if (orders) {
          localStorage.setItem("orders", orders);
        }
        if (data) {
          localStorage.setItem("data", data);
        }

        return {
          ...state,
          data: [...updateUser],
          auth: false,
        };
      }

    default:
      return {
        ...state,
        auth: localStorage.getItem("Auth")
          ? JSON.parse(localStorage.getItem("Auth"))
          : false,
      };
  }
};

export default RegisterHandler;
