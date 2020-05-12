export class AuthService {
  async authenticate(email, password) {
    const host = process.env.REACT_APP_API_HOST;
    const url = host + "/authentication";
    const authData = { email, password, strategy: "local" };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    const payload = await response.json();

    if (response.ok) {
      return {
        success: true,
        token: payload.accessToken,
        user: payload.user,
      };
    } else {
      return {
        success: false,
        message: payload.message,
      };
    }
  }

  async getUserById(id) {
    const host = process.env.REACT_APP_API_HOST;
    const url = host + "/users/" + id;
    const token = this.getToken();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      return null;
    }
  }

  deleteToken() {
    sessionStorage.removeItem("api-token");
  }

  setToken(token) {
    sessionStorage.setItem("api-token", token);
  }

  getToken() {
    return sessionStorage.getItem("api-token");
  }
}

export const authService = new AuthService();
