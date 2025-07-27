class CheckOut{
    constructor(page){
        this.page=page;
        this.checkoutbtn=page.locator("//button[@id='checkout']");
        this.SelectBillingDropdown = page.locator("//select[@id='billing-address-select']");
        this.BillingFirstName = page.locator("//input[@id='BillingNewAddress_FirstName']");
        this.BillingLastName = page.locator("//input[@id='BillingNewAddress_LastName']");
        this.BillingEmail = page.locator("//input[@id='BillingNewAddress_Email']");
        this.BillingCompany = page.locator("//input[@id='BillingNewAddress_Company']");
        this.BillingCountryDrop = page.locator("//select[@id='BillingNewAddress_CountryId']");
        this.BillingStateDrop = page.locator("//select[@id='BillingNewAddress_StateProvinceId']");
        this.BillingCity = page.locator("//input[@id='BillingNewAddress_City']");
        this.BillingAddress1 = page.locator("//input[@id='BillingNewAddress_Address1']");
        this.BillingAddress2 = page.locator("//input[@id='BillingNewAddress_Address2']");
        this.BillingZip = page.locator("//input[@id='BillingNewAddress_ZipPostalCode']");
        this.BillingPhoneNumber = page.locator("//input[@id='BillingNewAddress_PhoneNumber']");
        this.BillingFaxNumber = page.locator("//input[@id='BillingNewAddress_FaxNumber']");
        this.BillingAddressContinueBtn = page.locator("//input[@onclick='Billing.save()']");
        this.ShippingAddressContinueBtn = page.locator("//input[@onclick='Shipping.save()']");
        this.ShippingMethodContinueBtn = page.locator("//input[@class='button-1 shipping-method-next-step-button']");
        this.CODAmount = page.locator("//label[normalize-space()='Cash On Delivery (COD) (7.00)']");
        this.PaymentMethodContinueBtn = page.locator("//input[@class='button-1 payment-method-next-step-button']");
        this.PaymentInformationContinueBtn = page.locator("//input[@class='button-1 payment-info-next-step-button']");
        this.amount = null;
           
        
}
async checkout(){
    await this.checkoutbtn.click();
    

}
async BillingAddress(New){
    const SelectDrop = await this.SelectBillingDropdown;
    await SelectDrop.selectOption(New)
}

async AddressFilling(BFirstName, BLastName, BEmail, BCompany, BCountry, BState, ){

    await this.BillingFirstName.fill(BFirstName);
    await this.BillingLastName.fill(BLastName);
    await this.BillingEmail.fill(BEmail);
    await this.BillingCompany.fill(BCompany);
    await this.BillingCountryDrop.selectOption({label: BCountry});
    await this.BillingStateDrop.selectOption({label: BState});
    await this.BillingCity.fill("York");
    await this.BillingAddress1.fill( "123 Main St");
    await this.BillingAddress2.fill("Apt 2");
    await this.BillingZip.fill("10001");
    await this.BillingPhoneNumber.fill("123-456-7890");
    await this.BillingFaxNumber.fill("987-654-3210");
    
}
async BillingAddressContinue(){
    await this.BillingAddressContinueBtn.click();
}

async ShippingAddressContinue(){
    await this.ShippingAddressContinueBtn.click();
}

async ShippingMethodContinue(){
    await this.ShippingMethodContinueBtn.click();
}

async getCODAmount(){
    const paymentLabel = await this.CODAmount.innerText();
    this.amount = paymentLabel.match(/\((\d+)\.\d+\)/)[1];
    console.log(this.amount);
    return this.amount;
    
    
}
async PaymentMethodContinue(){
    await this.PaymentMethodContinueBtn.click();
}

async PaymentInformationContinue(){
    await this.PaymentInformationContinueBtn.click();
    
 }

}




export {CheckOut}
