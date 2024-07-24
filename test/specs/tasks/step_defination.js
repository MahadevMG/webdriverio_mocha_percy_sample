import {Given, When, Then} from '@wdio/cucumber-framework';
import LoginPage from '../../pageobjects/login/login.page.js';
import { MAMMOTH_EMAIL, MAMMOTH_PASSWORD } from '../../../env/env.var.js';
import * as path from "path";

Given("user is on datalanding page", async() => {
    await LoginPage.open();
    await LoginPage.login(MAMMOTH_EMAIL, MAMMOTH_PASSWORD);
    (await browser.$("//span[contains(text(),'Add Data')]")).click();
    await browser.$("(//button/div/span[contains(text(),'Select')])[1]").click();
    const filePath = path.join(process.cwd(), "/test/specs/tasks/", "Reorder.csv");
    console.log("Location of the file is: ", filePath);
    const remoteFilePath = await browser.uploadFile(filePath);

    await browser.$("//input[@type='file']").addValue(remoteFilePath);
    await browser.$("//button//span[contains(text(),'Submit')]").click();
    await browser.waitUntil(
      async () => (await browser.$("(//div[contains(@class,'ds-title')])[1]")).isClickable(),
      { timeout: 5000 }
    );
    (await browser.$("(//div[contains(@class,'ds-title')])[1]")).doubleClick();
    await browser.waitUntil(
      async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === "complete";
      },
      { timeout: 10000 }
    );
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    
});

When("user clicks on combine option in actionbar", async() => {
    await browser.$("//span[text()='Combine']").click();    
});

When("user clicks on the branchout button", async()=>{
    await browser.$("//label[contains(text(),'Branch out to Dataset')]").click();
})

Then("user should be shown by branchout panel", async()=>{
    expect(await browser.$("//h3[contains(text(),'Branch Out To Dataset')]")).toBeDisplayed();
})

Then("user click on apply button", async()=>{
    await browser.$("//span[text()='APPLY']").click();
})

Then("user should see branchout action in pipeline", async()=>{
    expect(await browser.$("//h5[contains(text(),'Branch Out To Dataset')]")).toBeDisplayed();
})


Given("user is logged in", async () => {
    await LoginPage.open();

    const assetsDiv = await browser.$("//div[contains(@class,'mm-avatar')]");
    const isAssetsDisplayed = await assetsDiv.isExisting();

    if (isAssetsDisplayed) {
        console.log("User is already logged in");
    } else {
        await LoginPage.login(MAMMOTH_EMAIL,MAMMOTH_PASSWORD);
    }
});

When("user clicks on add data option", async()=>{
    await browser.$("//span[contains(text(),'Add Data')]").click();
})

When("user selects file upload option", async()=>{
    await browser.$("(//button/div/span[contains(text(),'Select')])[1]").click();
})

When("user uploads a file", async()=>{
    const filePath = path.join(process.cwd(), "/test/specs/tasks/", "Reorder.csv");
    console.log("Location of the file is: ", filePath);
    const remoteFilePath = await browser.uploadFile(filePath);

    await browser.$("//input[@type='file']").addValue(remoteFilePath);
    await browser.$("//button//span[contains(text(),'Submit')]").click();
    await browser.waitUntil(
      async () => (await browser.$("(//div[contains(@class,'ds-title')])[1]")).isClickable(),
      { timeout: 5000 }
    );
})

When("user selects URL upload option", async()=>{
    await browser.$("(//button/div/span[contains(text(),'Select')])[4]").click();
})

When("user enters a URL", async()=>{
    await browser.$("//span[contains(text(),'Inactive Employees:')]").click();
})

When("user clicks on submit button", async()=>{
    await browser.$("//button//span[contains(text(),'Submit')]").click();
})

Then("user should see the uploaded file {string} on the datalanding page", async (fileName) => {
    await browser.waitUntil(
        async () => (await browser.$("(//div[contains(@class,'ds-title')])[1]")).isClickable(),
        { timeout: 5000 }
      );
    const fileElement = await browser.$(`(//span[contains(text(),'${fileName}')])[1]`);
    expect(await fileElement.isDisplayed()).toBe(true);
});

When("user selects webhook option", async()=>{
    await browser.$("(//button/div/span[contains(text(),'Select')])[2]").click();
})

When("user enters a webhook name as {string}", async(webhookName)=>{
    await browser.$("//input[@placeholder='New webhook']").setValue(webhookName);
})

Then("user should see the webhook created", async()=>{
    expect(await browser.$("(//span[contains(text(),'Test_webhook')])[1]").isDisplayed()).toBe(true);
});
