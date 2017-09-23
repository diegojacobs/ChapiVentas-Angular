describe('Signup Integration', function() {
    
        it('should signed up successfully', function() {
            browser.get('http://localhost:8000/?#!/signup');

            element(by.model('vmSignUp.firstName')).sendKeys("some");
            element(by.model('vmSignUp.lastName')).sendKeys("some");
            element(by.model('vmSignUp.username')).sendKeys("some");
            element(by.model('vmSignUp.password')).sendKeys("some");

            var checkBox = element(by.model('vmSignUp.terms'));
            var loginForm = element(by.name('vmSignUp.registrationForm'));

            checkBox.click();
            loginForm.submit();

            expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/');
        });
    
        it('should not signed up successfully, T&Cs not accepted', function() {
            browser.get('http://localhost:8000/?#!/signup');
            
            element(by.model('vmSignUp.firstName')).sendKeys("some");
            element(by.model('vmSignUp.lastName')).sendKeys("some");
            element(by.model('vmSignUp.username')).sendKeys("some");
            element(by.model('vmSignUp.password')).sendKeys("some");

            var checkBox = element(by.model('vmSignUp.terms'));
            var loginForm = element(by.name('vmSignUp.registrationForm'));

            loginForm.submit();

            expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/signup');
        });

        it('should not signed up successfully, invalid first name', function() {
            browser.get('http://localhost:8000/?#!/signup');
            
            element(by.model('vmSignUp.firstName')).sendKeys("");
            element(by.model('vmSignUp.lastName')).sendKeys("some");
            element(by.model('vmSignUp.username')).sendKeys("some");
            element(by.model('vmSignUp.password')).sendKeys("some");

            var checkBox = element(by.model('vmSignUp.terms'));
            var loginForm = element(by.name('vmSignUp.registrationForm'));

            checkBox.click();
            loginForm.submit();

            expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/signup');
        });

        it('should not signed up successfully, invalid last name', function() {
            browser.get('http://localhost:8000/?#!/signup');
            
            element(by.model('vmSignUp.firstName')).sendKeys("some");
            element(by.model('vmSignUp.lastName')).sendKeys("");
            element(by.model('vmSignUp.username')).sendKeys("some");
            element(by.model('vmSignUp.password')).sendKeys("some");

            var checkBox = element(by.model('vmSignUp.terms'));
            var loginForm = element(by.name('vmSignUp.registrationForm'));

            checkBox.click();
            loginForm.submit();

            expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/signup');
        });

        it('should not signed up successfully, invalid username', function() {
            browser.get('http://localhost:8000/?#!/signup');
            
            element(by.model('vmSignUp.firstName')).sendKeys("some");
            element(by.model('vmSignUp.lastName')).sendKeys("some");
            element(by.model('vmSignUp.username')).sendKeys("");
            element(by.model('vmSignUp.password')).sendKeys("some");

            var checkBox = element(by.model('vmSignUp.terms'));
            var loginForm = element(by.name('vmSignUp.registrationForm'));

            checkBox.click();
            loginForm.submit();

            expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/signup');
        });

        it('should not signed up successfully, invalid password', function() {
            browser.get('http://localhost:8000/?#!/signup');
            
            element(by.model('vmSignUp.firstName')).sendKeys("some");
            element(by.model('vmSignUp.lastName')).sendKeys("some");
            element(by.model('vmSignUp.username')).sendKeys("some");
            element(by.model('vmSignUp.password')).sendKeys("");

            var checkBox = element(by.model('vmSignUp.terms'));
            var loginForm = element(by.name('vmSignUp.registrationForm'));

            checkBox.click();
            loginForm.submit();

            expect(browser.getCurrentUrl()).toBe('http://localhost:8000/?#!/signup');
        });
    });