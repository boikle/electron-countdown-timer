class CountdownControlPanel {
	constructor() {
	}

	addPlayButton() {
		const panel = document.getElementById('countdown_control_panel');
		let playBtn = document.createElement('div');
		playBtn.innerHTML = '▶';
		playBtn.setAttribute('id', 'playbtn');
		playBtn.addEventListener('click', function() {
			var startEvent = new CustomEvent("startTimer");
			document.dispatchEvent(startEvent);
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
