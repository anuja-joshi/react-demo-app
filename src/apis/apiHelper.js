import axios from 'axios';

const apiHelper = (type, url, data) => {
  return axios({
    method: type,
    url,
    data
  });
};

export default apiHelper;