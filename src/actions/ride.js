import API from "../config/api";
import { formatStr } from "../config/utility";

const ListRides = (limit, last) => {
  return async dispatch => {
    try {
      const response = await fetch(formatStr(API.ride.list, limit, last), {
        method: "GET",
        credentials: "include",
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

const GetRideByID = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${API.ride.show}${id}`, {
        method: "GET",
        credentials: "include",
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

const CreateRide = ride => {
  return async dispatch => {
    try {
      // TODO: currently hardcoding in car_id; we should either store it via redux or handle it on the backend
      const newRide = {
        ...ride,
        seats: parseInt(ride.seats),
        start_dest_lat: parseFloat(ride.start_dest_lat),
        start_dest_lon: parseFloat(ride.start_dest_lon),
        end_dest_lat: parseFloat(ride.end_dest_lat),
        end_dest_lon: parseFloat(ride.end_dest_lon),
        price_per_seat: parseInt(ride.price_per_seat),
        car_id: "bbp86018qq98d54rj160",
      };
      const response = await fetch(API.ride.post, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newRide),
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

const DeleteRide = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${API.ride.delete}${id}`, {
        method: "DELETE",
        credentials: "include",
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

export { CreateRide, DeleteRide, GetRideByID, ListRides, UpdateRide };
