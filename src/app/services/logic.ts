export class Logic {
  isLoggedIn = false;
  loginsuccess() {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }
  loginout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}