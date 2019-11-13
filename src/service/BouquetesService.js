import axios from 'axios';

class BouquetesService {
  constructor(){
    this.api = axios.create({
      baseURL: 'https://bouquets.herokuapp.com/bouquets'
    });
  }

  async getBouquetes() {
    try {
      const {data} = await this.api.get('/');
      return data;
    } catch(e) {
      console.log(e);
    }
  };

  async getBouquete(id) {
    try {
      const {data} = await this.api.get(`/${id}`);
      return data;
    } catch(e) {
      console.log(e);
    }
  };

  async createBouquete(id, body) {
    try {
      const {data} = await this.api.post(`/${id}`, body);
      return data;
    } catch(e) {
      console.log(e);
    }
  };

  async updateBouquete(id, body) {
    try {
      const {data} = await this.api.put(`/${id}`, body);
      return data;
    } catch(e){
      console.log(e);
    }
  };

  async deleteBouquete(id) {
    try {
      const {data} = await this.api.delete(`/${id}`);
      return data;
    } catch(e) {
      console.log(e);
    }
  }
}

const bouqueteService = new BouquetesService();
export default bouqueteService;