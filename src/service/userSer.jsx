import { http } from './urlConfig';

export const userSer = {
  postLogin: (data) => {
    let uri = '/api/auth/signin';
    return http.post(uri, data);
  },
  postSignup: (data) => {
    let uri = '/api/auth/signup';
    return http.post(uri, data);
  },
};


