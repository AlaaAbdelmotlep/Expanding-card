/*
* Using querySelector instead of getElementBy , Because querySelector select any type of element (p,h,class)
* Using querySelectorAll to get all divs with panel class
* The return is NodeList it act like an array
*/

var panels = document.querySelectorAll('.panel');

/*console.log(panels);  //NodeList[5] */

/*
* We waant to loop over array and add some action to each panel
* forEach is high ordered array Method
* classList gives u list of classes
*/
panels.forEach( panel => {
	panel.addEventListener( 'click' , () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach( panel => {
		panel.classList.remove('active')
	})
}