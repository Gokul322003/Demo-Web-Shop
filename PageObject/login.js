import { expect } from '@playwright/test';

class login {
  constructor(page) {
    this.page = page;
    this.loginbt = page.getByText("Log in");
    this.email = page.locator("//input[@id='Email']");
    this.password = page.locator("//input[@id='Password']");
    this.lastlogin = page.locator("//input[@value='Log in']");
    this.logoImage = page.locator(".header-logo img"); 
  }

  async login(email, password) {
    await this.loginbt.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.lastlogin.click();
  }

  async logo() {
    // await this.logoImage.waitFor({ state: 'visible', timeout: 10000 });
    const altText = await this.logoImage.getAttribute('alt');
    console.log("ALT TEXT:", altText);
    expect(altText).toBe("Tricentis Demo Web Shop");
    return altText;
  }
}

export { login };
