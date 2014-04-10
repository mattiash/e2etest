function counterValue() {
    return browser.executeScript(function () {
        /*
         var $injector = angular.injector(['myApp']);
         var counterService = $injector.get("counterService");
         // counterService is now a new instance of counterService, not the
         // same as the one in the browser...
         */

        // Use a global object instead.
        return window.counterService.value();
    });
}

describe("counterService", function() {
    it('Initially has a zero', function () {
        browser.get('src/index.html');
        expect(element(by.tagName('h1')).getText()).toBe('0');
    });

    it('Clicking the button increases', function () {
        browser.get('src/index.html');
        element(by.tagName('button')).click();
        expect(element(by.tagName('h1')).getText()).toBe('2');
    });

    it("shall be possible to read the value", function () {
        expect(counterValue()).toBe(2);
    });
});
