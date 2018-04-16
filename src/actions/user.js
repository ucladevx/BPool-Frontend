import API from "../config/api";

const LoginUser = token => {
  return async dispatch => {
    try {
      const response = await fetch(API.user.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(token),
      });
      const status = response.status;
      const data = await response.json();
      const err = status >= 200 && status < 300;
      return { err, data };
    } catch (e) {
      return {
        err: e.message,
      };
    }
  };
};

export { LoginUser };
