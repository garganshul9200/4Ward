import axios from "axios";

const AxiosApi = (endpoint, method, header, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: endpoint,
      method: method,
      headers: header,
      data: data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getApi = (endpoint) => {
  return AxiosApi(endpoint, "get");
};

export const postApi=(endpoint, header, data)=>{
    return AxiosApi(endpoint, 'post', header, data)
}
