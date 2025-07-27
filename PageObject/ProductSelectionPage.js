import { expect } from '@playwright/test';
class ProductSelection{
    constructor(page){
        this.page=page;
        this.Electronics = page.locator("//li[@class='inactive']//a[normalize-space()='Electronics']");
        this.CellPhones = page.locator("//li[@class='inactive']//a[normalize-space()='Cell phones']");
        this.Dropdown = page.locator("#products-orderby");
        this.Waititemtoload = page.locator(".item-box");
        this.ProductList = page.locator(".item-box");
        this.ProductName = page.locator("//h2[@class='product-title']//a");
        this.ProductCartButton = page.locator("//input[@type='button']");
        this.SuccessMessage = page.locator("#bar-notification p");
        this.price = null;


    }
    async NavToProductPage(){
        await this.Electronics.click();
        await this.CellPhones.click();
           
    }
    async DropdownSelection(){
        await this.Dropdown.selectOption({label: 'Name: A to Z'});

    }

    async AddProductToCart(NameToSelect){
        await this.Waititemtoload.first().waitFor();
        const count = await this.ProductList.count();
        for (let i = 0; i <count; i++) {
            const element = this.ProductList.nth(i).locator("//h2[@class='product-title']//a");
            const prdname = await element.innerText();
            if (prdname == NameToSelect) {
                this.ProductList.nth(i).locator("//input[@type='button']").click();
                this.price = await this.ProductList.nth(i).locator(".actual-price").innerText();
                console.log(prdname);
                console.log("Price: ", this.price);
                
                
            }
            
        }


}
async Pricecheck(){
    return this.price;
    
}
async SuccessMessageCheck(Message){
    const successMsg = await this.SuccessMessage.innerText();
    expect(successMsg).toBe(Message);
    console.log("Success Message: ", successMsg);
    return successMsg;
}
}
export { ProductSelection };