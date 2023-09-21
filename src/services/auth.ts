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
  static async registerUser(user: UserToRegister): Promise<void> {
    throw Error("not implemented");
  }

  static async loginUser(user: UserToLogin): Promise<CurrentUser> {
    return axios
      .post(`${API_BASE_URL}/auth/users/tokens`, {
        email: user.email,
        password: user.password,
      })
      .then((response) =>
        Promise.resolve({
          email: user.email,
          tokens: {
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          },
        })
      );
  }
}
