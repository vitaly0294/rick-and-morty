import axios from 'axios';

export default class EpisodeService {
  static async getAll(link) {
    const response = await axios.get(`${link}`);
    return response;
  }
}