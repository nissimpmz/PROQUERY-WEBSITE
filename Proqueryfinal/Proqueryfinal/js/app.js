document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

// JavaScript to trigger loading spinner and redirect after a delay
document.getElementById("start-btn").addEventListener("click", function() {
    // Show the loading spinner
    document.getElementById("loading-container").style.display = "flex";
    
    // Simulate a loading delay of 2 seconds (you can change this to whatever delay you want)
    setTimeout(function() {
        // Redirect to another index or page (change this URL as necessary)
        window.location.href = "HOMEPAGE.html"; // Replace with your target URL
    }, 2000); // 2-second delay before redirecting
});
