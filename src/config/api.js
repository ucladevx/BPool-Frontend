const api_base = "http://localhost:3001/api/v1";

const car_base = `${api_base}/cars"`;
const rating_base = `${api_base}/ratings`;
const ride_base = `${api_base}/rides`;
const user_base = `${api_base}/users`;

const API = {
  car: {
    list: car_base,
    show: `${car_base}/`,
    create: car_base,
    delete: `${car_base}/`,
  },
  rating: {
    list: rating_base,
    show: `${rating_base}/`,
    create: rating_base,
    delete: `${rating_base}/`,
  },
  ride: {
    list: ride_base,
    show: `${ride_base}/`,
    post: ride_base,
    update: ride_base,
    delete: `${ride_base}/`,
  },
  user: {
    list: user_base,
    show: `${user_base}/`,
    me: `${user_base}/@me`,
    login: `${api_base}/login`,
  },
};

export default API;
