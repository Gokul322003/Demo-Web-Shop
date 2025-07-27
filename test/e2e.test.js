import { test, expect } from '@playwright/test';
import { login } from '../PageObject/login';
import { ProductSelection } from '../PageObject/ProductSelectionPage';
import { Cart } from '../PageObject/CartPage';
import { CheckOut } from '../PageObject/CheckOutPage';
import { ConfirmOrder } from '../PageObject/ConfirmOrderPage';
import { SuccessfullOrder } from '../PageObject/SuccessfullOrderPage';

test('E2E', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    
    const loginPage = new login(page);
    await loginPage.login("avinashbecse03@gmail.com", "Tomandjerry@1225"); 
    await page.screenshot({ path: 'D:/Playwright/Playwright Automation/Screenshot/Loginpage.png' });
    await page.waitForTimeout(1000);
  
    await loginPage.logo(); 


    // Product Page Test

    const ProductPage = new ProductSelection(page);
    await ProductPage.NavToProductPage();

    // Select DropDown

    await ProductPage.DropdownSelection();

    // Select Product 

    await ProductPage.AddProductToCart("Smartphone");

    //success Message Check

    await ProductPage.SuccessMessageCheck("The product has been added to your shopping cart");

    // navigate to Cart Page
     
    const cartPage = new Cart(page);
    await cartPage.navigateToCart();
   
    // Edit product details

    await cartPage.EditProductDetails("1");

    // edit shipping details 

    await cartPage.ShipingDetails("India","Other (Non US)", "600001")

    // verify product amount
    await cartPage.getProductDetails();

    // checking the product detial fo product page and cart page

    await ProductPage.Pricecheck();
    expect(await ProductPage.Pricecheck()) .toBe(await cartPage.getProductDetails());

    // check terms and conditions
    await cartPage.TermsAndConditions();

    // checkoutpage

    const CheckOutPage = new CheckOut(page);
    await CheckOutPage.checkout();
    
    // addressfilling
    await CheckOutPage.BillingAddress("3312024");
    // await CheckOutPage.AddressFilling("John Doe", "John Doe", "avinashbecse03@gmail.com", "John Doe Inc.", "India", "Other (Non US)" );


    await CheckOutPage.BillingAddressContinue();
    await CheckOutPage.ShippingAddressContinue();
    await CheckOutPage.ShippingMethodContinue();
    await CheckOutPage.getCODAmount();
    await CheckOutPage.PaymentMethodContinue();
    await CheckOutPage.PaymentInformationContinue();

    const TotalPrice = parseFloat(await cartPage.totalPrice )+ parseFloat(CheckOutPage.amount);
    console.log("Total Price: ", TotalPrice);
    // console.log(parseFloat(await cartPage.totalPrice ));
    // console.log( CheckOutPage.amount);

    const ConfirmOrderPage = new ConfirmOrder(page);
    
    await ConfirmOrderPage.getConfirmOrderAmount();

    expect (parseFloat(ConfirmOrderPage.FinalAmount)).toBe(TotalPrice);
    await ConfirmOrderPage.ConfirmOrderContinue();

    const successfullOrderPage = new SuccessfullOrder(page);
    await successfullOrderPage.VerifySuccessMessage();
    await successfullOrderPage.VerifyOrderId();



    

});
  