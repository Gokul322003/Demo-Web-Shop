class SuccessfullOrder{
    constructor(page){
        this.page = page;
        this.successfullMessage = page.locator(".title")
        this.OrderId=page.locator(".details");
        this.continueShopping = page.locator("//input[@value='Continue']");



    }

    async VerifySuccessMessage(){
        const SuccessMessage = await this.successfullMessage.innerText();
        console.log(SuccessMessage);

    }

    async VerifyOrderId(){
        const SuccessOrderId = await this.OrderId.innerText();
        console.log(SuccessOrderId)
        await this.continueShopping.click();
        await this.page.waitForTimeout(3000);
}
}
export {SuccessfullOrder};