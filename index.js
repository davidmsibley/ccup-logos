!!(function carousel() {
	var index = 0;
	var maxIndex = 0;

	(function initIDs() {
		console.log("init'd")
		var imgs = document.getElementsByTagName("img");
		for (img of imgs) {
			img.id = maxIndex++;
		}
		updateTransition();
	})();

	function updateTransition() {
		console.log("updated")
		var activated = document.querySelector("img.activated");
		var next = document.getElementById("" + index++);

		if (index >= maxIndex) {
			index = 0;
		}

		if (activated) {
			activated.className = "queued";
		}
		if (next) {
			next.className = "activated";
		}

		return true;
	}

	var intervalID = window.setInterval(updateTransition, 7000);
})();
