import { browser } from 'protractor';

export async function getPath() {
    return new URL(await browser.getCurrentUrl()).pathname;
}