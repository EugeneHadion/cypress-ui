import { invertoryElements } from "../pages/inventory.page";
import { loginPage } from "../pages/login.page";

describe("Login", () => {
  it("Enter credentials", () => {
    loginPage.open();
    loginPage.login();
    invertoryElements.extendSidebarMenuBtn().should('be.visible')
  });
});
