import API from "../config/api";

const ListRides = () => {
  return async dispatch => {
    try {
      const response = await fetch(API.ride.list, {
        method: "GET",
        credentials: "include",
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

const GetRideByID = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${API.ride.show}${id}`, {
        method: "GET",
        credentials: "include",
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

const CreateRide = ride => {
  return async dispatch => {
    try {
      const response = await fetch(API.ride.post, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(ride),
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

const UpdateRide = ride => {
  return async dispatch => {
    try {
      const response = await fetch(API.ride.update, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(ride),
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

const DeleteRide = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${API.ride.delete}${id}`, {
        method: "DELETE",
        credentials: "include",
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

export { ListRides, GetRideByID, CreateRide, UpdateRide, DeleteRide };
