import API from "../config/api";

const RegisterCar = car => {
  return async dispatch => {
    try {
      const newCar = Object.assign({}, car, { year: parseInt(car.year) });
      const response = await fetch(API.car.create, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newCar),
      });
      const status = response.status;
      const { data, error } = await response.json();
      const err = status < 200 || status >= 300;
      if (err) {
        throw new Error(error);
      } else {
        return { err, data };
      }
    } catch (e) {
      return {
        err: e.message,
      };
    }
  };
};

export { RegisterCar };
