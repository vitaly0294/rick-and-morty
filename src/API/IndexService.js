import axios from 'axios';

export default class IndexService {
  static async getPage(link, params = {}) {
    const response = await axios.get(link, {
      params: params
    });
    return response;
  }

  static async getPageId(link, id) {
    const response = await axios.get(`${link}/${id}`);
    return response;
  }

  static async getAll(link, arrId) {
    const response = await axios.get(`${link}/${arrId}`);
    return response;
  }
}