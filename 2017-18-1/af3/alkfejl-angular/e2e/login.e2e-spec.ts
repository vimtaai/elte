import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Login functionality', () => {
    beforeEach(() => {
        browser.get('/login');
    })

    it('should be able to navigate to login', () => {
        expect(getPath()).toEqual('/login');
    })

    it('should fail to log in for invalid credentials', () => {
        element(by.css('input[type="email"]')).sendKeys('sdatuéliu@aslédkj.laskdjg');
        element(by.css('input[type="password"]')).sendKeys('eiutzlkjsdzgl');
        element(by.css('input[type="button"]')).click();
        expect(getPath()).toEqual('/login');
    });

    it('should to log in for valid credentials', () => {
        element(by.css('input[type="email"]')).sendKeys('anna@example.com');
        element(by.css('input[type="password"]')).sendKeys('almakorte');
        element(by.css('input[type="button"]')).click();
        expect(getPath()).toEqual('/');
    })
})