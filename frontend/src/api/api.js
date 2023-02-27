import axios from 'axios';
import Cookies from 'js-cookie';

const csrftoken = Cookies.get('csrftoken');
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export const request = async (url, data) => {
  try {
    const res = await axios.get(`${url}/${data}`);
    return res.data;
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
    return res.data;
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
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export const uploadImg = async (formData) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/images',
      headers: { 'X-CSRFToken': csrftoken, 'Content-Type': 'multipart/form-data' },
      data: formData,
    });
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export const uploadPost = async (postData) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/posts',
      headers: { 'X-CSRFToken': csrftoken, 'Content-Type': 'application/json' },
      data: postData,
    });
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export const getStyles = async (params) => {
  try {
    const res = await axios({
      method: 'get',
      url: '/api/posts',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
      params,
    });
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export const getMyPosts = async (userNo) => {
  try {
    const res = await axios({
      method: 'get',
      url: `/api/posts/users/${userNo}`,
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (e) {
    return e.message;
  }
};
