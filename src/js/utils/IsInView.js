/*
** Detects if the target element is in the viewport 
** and returns a value between 0 and 1 for animation purposes.

** @params: 
** element = DOM Element to test
** hookPos = Hook's position on the page (0 = top of the screen / 1 = bottom of the screen)
*/

const isInView = (element, hookPos = 0) => {

	const OBJ = {};
	
	let posY      = window.innerHeight,
        h         = element.offsetHeight,
        offset    = element.getBoundingClientRect().top,
        isVisible = (offset <= posY && offset >= -h) ? true : false;
	
	OBJ._inView = isVisible;
	
	if(isVisible) {
			
		let scroll = window.scrollY,
            hook = scroll + (posY * hookPos),
            elPos = element.offsetTop,
            end = elPos + h,
            perone = 0;
		
		if(hook >= elPos) {

			if(hook <= end) {
				perone = (hook - elPos) / (end - elPos);
			} else {
				perone = 1;
			}
			
		} else {
			perone = 0;
		}
		
		OBJ._perone = perone;
		
	}
	
	return OBJ;
	
}

export default isInView;