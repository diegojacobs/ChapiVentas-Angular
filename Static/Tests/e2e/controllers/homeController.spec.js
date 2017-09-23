describe('Home Integration', function() {

    it('should go to home page', function() {
        browser.get('http://localhost:8000/?#!/');

        element(by.id('home')).click();
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/');
    });

    it('should go to report page', function() {
        browser.get('http://localhost:8000/?#!/');

        element(by.id('report')).click();
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/report');
    });

    it('should go to calendar page', function() {
        browser.get('http://localhost:8000/?#!/');

        element(by.id('calendar')).click();
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/calendar');
    });

    it('should logout succesfully', function() {
        browser.get('http://localhost:8000/?#!/');

        element(by.id('logout')).click();
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/SignIn');
    });
});