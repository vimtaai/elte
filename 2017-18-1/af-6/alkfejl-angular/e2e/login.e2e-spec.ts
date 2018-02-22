import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Login functionality', () => {
    beforeEach(() => {
        browser.get('/login');
    });

    it('should navigate to the login page', () => {    
        // Elvárt eredmény
        expect(getPath()).toEqual('/login');
    });

    it('should fail to login for empty credentials', () => {
        element(by.buttonText('Bejelentkezés')).click();
        expect(getPath()).toEqual('/login');
    });

    it('should fail to login for invalid credentials', () => {
        element(by.css('input[type="email"]')).sendKeys('éasklduélasukdtzél@léasdkélasku.aléskdj');
        element(by.css('input[type="password"]')).sendKeys('éasklduélasukdtzé');
        element(by.buttonText('Bejelentkezés')).click();
        expect(getPath()).toEqual('/login');
    });

    it('should log in for valid credentials', () => {
        element(by.css('input[type="email"]')).sendKeys('anna@example.com');
        element(by.css('input[type="password"]')).sendKeys('almakorte');
        element(by.buttonText('Bejelentkezés')).click();
        expect(getPath()).toEqual('/');
    });
});