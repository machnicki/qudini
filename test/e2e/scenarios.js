'use strict';

describe('Quidini Test App', function() {

    it('added customer should be in the first list a last item', function() {
        browser.get('/');

        element(by.model('name')).sendKeys('Jak Sparrow');

        element(by.model('product')).element(by.css('option[value="0"]')).click();

        element(by.css('button')).click();

        expect(element(by.css('.Queue-customer-list li:last-of-type .Customer span')).getText()).toBe('Jack Sparrow');
    });

    it('served customer is no more visible in the first list, but in the second', function() {
        var customerName;

        browser.get('/');

        customerName = element(by.css('.Queue-customer-list li:last-of-type .Customer span')).getText();

        element(by.css('.Queue-customer-list li:last-of-type .Customer button')).click();

        expect(element(by.css('.Queue-customer-served-list li:last-of-type .Customer span')).getText()).toBe(customerName);

        expect(element(by.css('.Queue-customer-list li:last-of-type .Customer span')).getText()).not.toBe(customerName);
    });
});