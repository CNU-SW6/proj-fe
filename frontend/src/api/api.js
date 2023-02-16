import axios from 'axios';
axios.defaults.withCredentials = true;

export const request = async (url, data) => {
  try {
    const res = await axios.get(`${url}/${data}`);
    return res.status === 200 ? res.data : 'error';
  } catch (e) {
    return e.message;
  }
};
/*
export const request = async (url) => {
  try {
    const res = await axios.get(`${API_END_POINT}${url}`);

    if (!res.ok) {
      throw new Error('API Call Fail');
    }

    return await res.json();
  } catch (e) {
    return e.message;
  }
};
*/
