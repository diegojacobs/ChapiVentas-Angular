describe('Login Integration', function() {

    it('should logged in successfully', function() {
        browser.get('http://localhost:8000/?#!/SignIn');

        element(by.model('vmLogin.username')).sendKeys("test");
        element(by.model('vmLogin.password')).sendKeys("test");

        element(by.id('login')).click();
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/');
    });

    it('should not logged in successfully, invalid password', function() {
        browser.get('http://localhost:8000/?#!/SignIn');

        element(by.model('vmLogin.username')).sendKeys("test");
        element(by.model('vmLogin.password')).sendKeys("");

        element(by.id('login')).click();
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/SignIn');
    });

    it('should not logged in successfully, invalid username', function() {
        browser.get('http://localhost:8000/?#!/SignIn');

        element(by.model('vmLogin.username')).sendKeys("");
        element(by.model('vmLogin.password')).sendKeys("test");

        element(by.id('login')).click();
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/SignIn');
    });
});