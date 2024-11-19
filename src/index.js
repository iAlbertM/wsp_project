const navLinks = document.querySelectorAll('nav ul li a');
function toActive(el) {
	for(let link in navLinks) {
		if(link.classList.contains('active')) {
			link.classList.remove('active');
			el.classList.add('active');
		}
	}		
}
document.querySelectorAll('nav ul li a').addEventListener("click", toActive(this));

