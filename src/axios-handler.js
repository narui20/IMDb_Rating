import axios from "axios";

const instance = axios.create({
  baseURL: "https://imdb-46611.firebaseio.com/"
});

export default instance;
