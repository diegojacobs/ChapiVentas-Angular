# Start selenium server and trash the verbose error messages from webdriver
node_modules/protractor/bin/webdriver-manager start 2>/dev/null &
# Wait 3 seconds for port 4444 to be listening connections
while ! nc -z 127.0.0.1 4444; do sleep 3; done
#  run protractor
node_modules/protractor/bin/protractor Static/Tests/e2e/conf.js