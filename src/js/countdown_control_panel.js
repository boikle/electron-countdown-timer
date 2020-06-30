class CountdownControlPanel {
	constructor() {
		this.state = "off";
	}

	addPlayButton() {
		let _this = this;
		const panel = document.getElementById('countdown_control_panel');
		let playBtn = document.createElement('div');
		playBtn.innerHTML = '\u25B6';
		playBtn.setAttribute('id', 'playbtn');
		playBtn.addEventListener('click', function() {
			if (_this.state === "off") {
				var startEvent = new CustomEvent("startTimer");
				document.dispatchEvent(startEvent);
				_this.state = "on";
				this.innerHTML = '\u23F8';

			} else {
				var pauseEvent = new CustomEvent("pauseTimer");
				document.dispatchEvent(pauseEvent);
				_this.state = "off";
				this.innerHTML = '\u25B6';
			}
		});

		panel.appendChild(playBtn);
	}

	addConfigButton() {
		const panel = document.getElementById('countdown_control_panel');
		let configBtn = document.createElement('div');
		configBtn.innerHTML = 'config';
		configBtn.setAttribute('id', 'configbtn');

		panel.appendChild(configBtn);
	}
}

module.exports = CountdownControlPanel;
