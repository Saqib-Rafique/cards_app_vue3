import http from "../http-common";

class CardDataService {
  getAll() {
    return http.get();
  }

  get(id) {
    return http.get(`/cards/${id}`);
  }

}

export default new CardDataService();