// Variable for <nav></nav>
const navbarNav = document.getElementById('navbarNav');
// notChecked.style
const notChecked = document.querySelectorAll('input[type=checkbox]:not(:checked)');

// This Function moves navbar links to the right.
// And it slides content upward.
function mobileNav(q) {
  if (q.matches) {
		// Small screens
		navbarNav.childNodes[11].style.flexDirection = 'column';
		navbarNav.children[0].style.transform = 'translateY(0%)';
		if (notChecked == true) {document.querySelector("#menuList > li:nth-child(3) > a").style.color = '#343a40';}
  }
  else {
		// Big screens
		navbarNav.childNodes[11].style.flexDirection = 'row';
		navbarNav.children[0].style.transform = 'translateY(-150%)';
  }
}
