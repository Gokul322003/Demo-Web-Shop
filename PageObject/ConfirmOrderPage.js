class ConfirmOrder{
    constructor(page){
        this.page=page;
        this.ConfirmOrderAmount = page.locator(".order-total strong");
        this.FinalAmount = null;
        this.ConfirmOrderContinueBtn = page.locator("//input[@value='Confirm']");
    }

    async getConfirmOrderAmount(){
       this.FinalAmount =  await this.ConfirmOrderAmount.innerText();
       console.log(this.FinalAmount);
       return this.FinalAmount;
        
    }

    async ConfirmOrderContinue(){
        await this.ConfirmOrderContinueBtn.click();
        await this.page.waitForTimeout(7000);
    }

}
export {ConfirmOrder};