class Cart{
    constructor(page){
        this.page = page;
        this.ShoppingCartbtn = page.locator("#topcartlink");
        this.CheckBox = page.locator("//input[@value='5603386']");
        this.QuantityofProduct = page.locator(".qty-input");
        this.updateshoppingcart = page.locator("//input[@name='updatecart']");
        this.countryDropDown = page.locator("//select[@name='CountryId']");
        this.stateprovience = page.locator("//select[@name='StateProvinceId']");
        this.PostalCode = page.locator("#ZipPostalCode");
        this.Total = page.locator('.product-subtotal');
        this.TermsCheckBox = page.locator("//input[@name='termsofservice']");
        this.totalPrice = null;

    }

    async navigateToCart(){
        await this.ShoppingCartbtn.click();
        // await this.CheckBox.check();
       
   
       
    
}

async EditProductDetails(Quantity){
    await this.QuantityofProduct.fill(Quantity);
    await this.updateshoppingcart.click();

}

async ShipingDetails(country,State,ZipCode){
    const CountrySelect = await this.countryDropDown;
    await CountrySelect.selectOption({label: country});
    const StateSelect = await this.stateprovience;
    await StateSelect.selectOption({label: State});
    await this.PostalCode.fill(ZipCode);
    
    

}
async getProductDetails(){
    this.totalPrice = await this.Total.innerText();
    // console.log(totalprice);
    return this.totalPrice;
}

async TermsAndConditions(){
    await this.TermsCheckBox.check();
    // await this.page.waitForTimeout(7000);
 }

}
export {Cart};