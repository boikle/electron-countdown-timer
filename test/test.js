const Timer = require('../src/js/countdown_timer');
const assert = require('assert');

const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const dom = new JSDOM(
	`<!DOCTYPE HTML>
    <html lang="en">
	   <head>
           <meta charset="UTF-8">
           <link rel="stylesheet" href="css/window.css">
		   <link rel="stylesheet" href="css/timer.css">
		   <link rel="stylesheet" href="css/control_panel.css">
		   <title>Countdown Timer</title>
	    </head>
	    <body>
		    <div id="countdown">
			    <div id="countdown_timer">00:00:00</div>
			    <div id="countdown_control_panel"></div>
		    </div>
		    <script src="js/index.js"></script>
	    </body>
    </html>`
);

global.document = dom.window.document;

// Countdown timer tests
describe('Timer', function() {
    let timer = new Timer();
    describe('getCountdownTime()', function() {
        it('Should return a numeric value', function() {
            assert.equal(typeof timer.getCountdownTime(), "number");
        });

        it('The default initial value should be 300000', function() {
            assert.equal(timer.getCountdownTime(), 300000);
        });
    });

    describe('setCountdownTime()', function() {
        it('The timer value should be updated to the set value', function() {
            timer.setCountdownTime(500000);
            assert.equal(timer.getCountdownTime(), 500000);
        });
    });

	describe('convertMStoHHMMSS()', function() {
		it('3745000 ms should return a formatted string of 01:02:25', function() {
			assert.equal(timer.convertMStoHHMMSS(3745000), '01:02:25')
		});
	});
});
