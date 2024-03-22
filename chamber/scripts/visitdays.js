if(typeof(Storage) !== "undefined"){
	var lastVisit = localStorage.getItem("lastVisit");

	if(lastVisit){
		var currentDate = new Date();
		var difference = currentDate - new Date(lastVisit);
		var daysDifference = Math.floor(difference / (1000 * 60 * 60* 24));

		if (daysDifference == 0){
			document.getElementById("sidebar").innerText ="Back so soon! Awesome!";

		} else{
			var message = "You last visited ";

			if(daysDifference === 1){
				message += "1 day ago.";
			} else{
				message += daysDifference + "days agp.";
			}
		}   document.getElementById("sidebar").innerText = message;
	} else{
		document.getElementById("sidebar").innerText = "Welcome! Let us Know if have any questions.";
	
		localStorage.setItem("lastVisit", new Date());
    
	} else {
		
		document.getElementById("sidebar").innerText = "Sorry, your browser does not support localStorage.";
	}
}	
	
	
	 
   






