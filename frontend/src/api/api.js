import axios from 'axios';
import Cookies from 'js-cookie';

const csrftoken = Cookies.get('csrftoken');
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export const request = async (url, data) => {
  try {
    const res = await axios.get(`${url}/${data}`);
    return res.status === 200 ? res.data : 'error';
  } catch (e) {
    return e.message;
  }
};

export const signUp = async (postData) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/users/signup',
      headers: { 'X-CSRFToken': csrftoken, 'Content-Type': 'application/json' },
      data: postData,
    });
    return res.status === 200 ? res.data : 'error';
  } catch (e) {
    return e.message;
  }
};

export const login = async (postData) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/users/signin',
      headers: { 'X-CSRFToken': csrftoken, 'Content-Type': 'application/json' },
      data: postData,
    });
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
