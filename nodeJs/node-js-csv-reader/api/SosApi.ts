import Http from "../service/Http";

const Base_URL = `https://preprod-shop.alfah.de/`;

const Api = {
  getStockDetails: () => {
    return Http.get(`${Base_URL}/api/atp-catalog/stock`);
  },
};

export default Api;
