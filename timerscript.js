(function() {

	var root = document.documentElement;
    var container = document.querySelector('.container');
    var button = document.querySelector('.button');
    var counter = document.querySelector('.counter');
    var running = false;
    var timer = null;
    var seconds = 0;
    var secondsInitial = 0;
    var e = document.getElementbyID("treeSelect");

	var treeDict = {
		//type : [mature_time, climate]
		"apple": [14.3, "temperate"],
		"hornbeam": [8, "N/A"],
		"oak": [49, "temperate"],
		"cork": [5+(43/60),"temperate"],
		"grapevine": [5+(43/60),"temperate"],
		"fig": [5+(43/60),"tropical"],
		"yucca": [26,"arid"],
		"avocado": [5+(43/60),"tropical"],
		"poplar": [12,"N/A"],
		"lemon": [14.3,"arid"],
		"cedar": [26, "temperate"],
		"banana": [26,"tropical"],
		"traveler": [14.3,"tropical"],
	};

	button.addEventListener("click", function () {
		if (running){
			stop();
		} else {
			start();
		}
		running = !running;
	});

	function start() {
		// get value time from dropdown
		var time = treeDict[e.options[e.selectedIndex].value][0];
		seconds = time*60**2; // Convert time to secs

		counter.timeText = secondsInitial = seconds;

		timer = setInterval(function () {
			//update values
			counter.timeText = --seconds;
			if (!seconds) {
				stop();
				running = false;
			}
		}, 1000); // update time every second.
	}

	function stop(){
		clearInterval(timer);
	}
})();