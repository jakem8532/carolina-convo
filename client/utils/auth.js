import decode from "jwt-decode";

class AuthService {
  //get user data stored in localstorage
  getUserData() {
    return decode(this.getUserToken());
  }

  //check to see if user is logged in by checking for if token exists and if token expired
  loggedIn() {
    const token = this.getUserToken();

    return !!token && !!this.isTokenExpired(token);
  }

  // checks returns with boolean depending if token arguement has expired
  isTokenExpired(token) {
    try {
      const decodedData = decode(token);
      if (decodedData.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  //tried pulling token from localstorage
  getUserToken() {
    return localStorage.getItem("id_token");
  }

  //creates a new localstorage entry with token information
  login(idToken) {
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }

  //removes token from localstorage
  logout() {
    localStorage.removeItem("id_token");

    window.location.assign("/");
  }
}

export default new AuthService();
