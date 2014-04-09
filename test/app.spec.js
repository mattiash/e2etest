describe("counterService", function() {
/*   it("shall be possible to read the value", function() {
       browser.executeScript(function() {
           angular.module("counterService").get()
       })
   })
*/
    it('Initially has a zero', function () {
        browser.get('src/index.html');
        expect(element(by.tagName('h1')).getText()).toBe('0');
    });

    it('Clicking the button increases', function () {
        browser.get('src/index.html');
        element(by.tagName('button')).click();
        expect(element(by.tagName('h1')).getText()).toBe('2');
    });
});
