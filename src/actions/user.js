import API from "../config/api";

const LoginUser = token => {
  return async dispatch => {
    try {
      const response = await fetch(API.user.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ token }),
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

export { LoginUser };
