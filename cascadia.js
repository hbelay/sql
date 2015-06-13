function initialize() {
	
	// Initial setup of the map
	mapOptions = {
		zoom: 5,
		center: new google.maps.LatLng(47.60972, -122.3331)
	};
	map = new google.maps.Map(document.getElementById('map_area'),
	mapOptions);
	// End of the initial setup of the map
	
	getEventTypes();
	getEventTopics();
	//getEventAgenda();
	
	var findNearEventsButton = document.getElementById('find_near_events');
	var findEventsButton = document.getElementById('find_events');
	findNearEventsButton.addEventListener('click', findNearEvents);
	findEventsButton.addEventListener('click', findEvents);
}

function findNearEvents() {
	var xmlhttp = new XMLHttpRequest();
	
}

// Event div to use the records of the fake json object.
function findEvents() {
	var xmlhttp = new XMLHttpRequest();
	
}

function getEventTypes() {
	// AJAX request for event type checkboxes
	var xmlhttp = new XMLHttpRequest();
	var url = "http://www.danjinguji.com/ITGuys/get_type.php";
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var eventTypObj = JSON.parse(xmlhttp.responseText);
			for(var i = 0; i < eventTypObj.length; i++) {
				// Create the checkboxes
				var checkboxes = document.createElement('input');
				checkboxes.type = "checkbox";
				checkboxes.id = eventTypObj[i]['type_id'];
				checkboxes.value = eventTypObj[i]['type_name'];
				checkboxes.checked = false;
				// Create the labels next to the checkboxes
				var labels = document.createTextNode(checkboxes.value);
				// Add the checkboxes and their labels to the event type div
				document.getElementById('event_type_checkbox').appendChild(checkboxes);
				document.getElementById('event_type_checkbox').appendChild(labels);
			}
		}
	}
	xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getEventTopics() {
	// AJAX request for event topic checkboxes
	var xmlhttp = new XMLHttpRequest();
	var url = "http://www.danjinguji.com/ITGuys/get_topic.php";
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var eventTopObj = JSON.parse(xmlhttp.responseText);
			for(var i = 0; i < eventTopObj.length; i++) {
				// Create the checkboxes
				var checkboxes = document.createElement('input');
				checkboxes.type = "checkbox";
				checkboxes.id = eventTopObj[i]['topic_id'];
				checkboxes.value = eventTopObj[i]['topic_name'];
				checkboxes.checked = false;
				// Create the labels next to the checkboxes
				var labels = document.createTextNode(checkboxes.value);
				// Add the checkboxes and their labels to the event topic div
				document.getElementById('event_topic_checkbox').appendChild(checkboxes);
				document.getElementById('event_topic_checkbox').appendChild(labels);
			}
		}
	}
	xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getEventAgenda() {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://www.danjinguji.com/ITGuys/get_events.php";
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var agendaObjs = JSON.parse(xmlhttp.responseText);
			for(var i = 0; i < agendaObjs.length; i++) {
				var agendaDivs = document.createElement('div');
				//agendaDivs.id = agendaObjs[i]['id'];
				//agendaDivs.className = agendaObjs[i]['title'];
				agendaDivs.innerHTML = "reached";
				agendaDivs.innerHTML = agendaObjs[i]['end_date_time'];
				document.getElementById('agenda_container').appendChild(agendaDivs);
			}
		}
	}
	xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

google.maps.event.addDomListener(window, 'load', initialize);

