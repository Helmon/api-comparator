import axios from "axios";

interface IApi {
  data?: any;
  headers?: any;
  url: any;
  method: any;
}

export const api = ({ data, headers, url, method }: IApi) => {
  return axios({
    data,
    headers,
    url,
    method
  })
    .then(resp => {
      const { status, statusText } = resp;
      if (resp && resp.data) {
        const { data } = resp;
        return { status, statusText, data };
      }
      return { status, statusText, data: null };
    })

    .catch(error => {
      const { status, statusText } = error.response;
      if (error.response && error.response.data) {
        const { data } = error.response;
        return { status, statusText, data };
      }
      return { status, statusText, data: null };
    });
};
