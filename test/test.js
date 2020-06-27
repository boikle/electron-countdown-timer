const Timer = require('../src/js/countdown_timer');
const assert = require('assert');

// Countdown timer tests
describe('Timer', function() {
    let timer = new Timer();
    describe('getCountdownTime()', function() {
        it('Should return a numeric value', function() {
            assert.equal(typeof timer.getCountdownTime(), "number");
        });

        it('The default initial value should be 300', function(){
            assert.equal(timer.getCountdownTime(), 300);
        });
    });
});
