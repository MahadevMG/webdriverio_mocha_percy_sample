// started at 6:13
import LoginPage from "../../pageobjects/login/login.page.js";
import { MAMMOTH_EMAIL, MAMMOTH_PASSWORD } from "../../../env/env.var.js";
import * as path from "path";

describe("Brnachout to dataset", () => {
  before(async function () {
    await LoginPage.open();
    await LoginPage.login(MAMMOTH_EMAIL, MAMMOTH_PASSWORD);
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

  it("Add branchout to dataset", async () => {
    (await browser.$("//span[text()='Combine']")).click();
    (await browser.$("//label[contains(text(),'Branch out to Dataset')]")).click();
    expect(await browser.$("//h3[contains(text(),'Branch Out To Dataset')]")).toBeDisplayed();
    (await browser.$("//span[text()='APPLY']")).click();
    expect(await browser.$("//h5[contains(text(),'Branch Out To Dataset')]")).toBeDisplayed();
  });
});
