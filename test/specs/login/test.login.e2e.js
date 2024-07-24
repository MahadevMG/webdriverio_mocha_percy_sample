import LoginPage from '../../pageobjects/login/login.page.js';
import { MAMMOTH_EMAIL, MAMMOTH_PASSWORD } from '../../../env/env.var.js';
import percySnapshot from '@percy/webdriverio';

describe('My Login application', () => {
    it('should display an error message with invalid credentials:  @login  @percy_login', async () => {
        await LoginPage.open();
        await LoginPage.login('invalid@example.com', 'invalidpassword');
        await LoginPage.waitForErrorMessage();
        await percySnapshot('invalid_login_page_with_error_message');
        expect(await LoginPage.isErrorMessageDisplayed()).toBe(true);
    });

    it('should login with valid credentials @login_valid', async () => {
        await LoginPage.open();
        await LoginPage.login(MAMMOTH_EMAIL, MAMMOTH_PASSWORD);
    });
});
