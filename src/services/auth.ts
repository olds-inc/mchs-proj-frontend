import axios from "axios";

import { API_BASE_URL } from "../constants";
import { UserBase, CurrentUser } from "../types";

// soon or later something may be added and it will differ from the UserToLogin
interface UserToRegister extends UserBase {
  password: string;
}

interface UserToLogin extends UserBase {
  password: string;
}

export default class AuthService {
  /* fake CRUD goes here */

  async loginUser(user: UserToLogin): Promise<CurrentUser> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          email: user.email,
          tokens: {
            accessToken: "user.access.token",
            refreshToken: "user.refresh.token",
          },
        });
      }, 1000);
    });
  }

  /* real CRUD goes here */

  // static async loginUser(user: UserToLogin): Promise<CurrentUser> {
  //   return axios
  //     .post(`${API_BASE_URL}/auth/users/tokens`, {
  //       email: user.email,
  //       password: user.password,
  //     })
  //     .then((response) => {
  //       return Promise.resolve({
  //         email: user.email,
  //         tokens: {
  //           accessToken: response.data.access_token,
  //           refreshToken: response.data.refresh_token,
  //         },
  //       });
  //     });
  // }
}
