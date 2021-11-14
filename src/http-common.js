import axios from "axios";

export default axios.create({
  baseURL: "https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772",
  headers: {
    "Content-type": "application/json"
  }
});