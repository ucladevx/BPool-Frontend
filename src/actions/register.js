import API from "../config/api";

const LoginUser = token => {
  return async dispatch => {
    try {
      const response = await fetch(API.user.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(token)
      });
      const status = response.status;
      if (status >= 200 && status < 300) {
        const data = await response.json();
        return {
          err: false,
          data
        };
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (e) {
      return {
        err: e.message
      };
    }
  };
};

const RegisterCar = car => {
  return async dispatch => {
    try {
      const response = await fetch(API.car.create, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(car)
      });
      const status = response.status;
      if (status >= 200 && status < 300) {
        const data = await response.json();
        return {
          err: false,
          data
        };
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (e) {
      return {
        err: e.message
      };
    }
  };
};

export { LoginUser, RegisterCar };
