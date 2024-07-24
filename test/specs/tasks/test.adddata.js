import LoginPage from "../../pageobjects/login/login.page.js";
import { MAMMOTH_EMAIL, MAMMOTH_PASSWORD } from "../../../env/env.var.js";
import * as path from "path";

describe("Add data to mammoth", ()=>{
    before(async()=>{
        await LoginPage.open();
        await LoginPage.login(MAMMOTH_EMAIL, MAMMOTH_PASSWORD);
    })

    it("Upload file from local", async()=>{
        (await browser.$("//span[text()='Add Data']")).click();
        (await browser.$("(//button//span[text()='Select'])[1]")).click();
        const filePath = path.join(
          process.cwd(),
          "/test/specs/tasks/",
          "Reorder.csv"
        );
        console.log("Location of the file is: ", filePath);
        const remoteFilePath = await browser.uploadFile(filePath);
    
        await browser.$("//input[@type='file']").addValue(remoteFilePath);
        await browser.$("//button//span[contains(text(),'Submit')]").click();
        await browser.waitUntil(
          async () =>
            (
              await browser.$("(//div[contains(@class,'ds-title')])[1]")
            ).isClickable(),
          { timeout: 5000 }
        );
    })
    
    it("Upload file from URL", async()=>{
        
    });
})