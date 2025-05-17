import MainPage from "./main.page";
import { creds as defaultCreds } from "../fixtures/creds.json";

const elements = {
  usernameField: () => cy.get("#user-name"),
  passwordField: () => cy.get("#password"),
  loginBtn: () => cy.get("#login-button"),
  errorLabel: () => cy.get('[data-test="error"]'),
};

class LoginPage extends MainPage {
  fillCreds(creds?: { username?: string; password?: string }) {
    const { username, password } = creds ?? defaultCreds;
    if (username !== undefined) elements.usernameField().type(username);
    if (password !== undefined) elements.passwordField().type(password);
  }

  login(creds?: { username?: string; password?: string }) {
     this.fillCreds(creds);
     elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
