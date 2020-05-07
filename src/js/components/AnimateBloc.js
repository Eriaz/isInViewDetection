const _utils = utils.default;

class AnimateBloc {
    constructor(element) {
		
		// UI
		this.element = element;
		
		// Vars
		this.isVisible = undefined;
		this.timeOut = null;
		this.Timeline = this._setTimeline();
		
		this._bindEvents();
    }
    
	_setTimeline() {
		
		let timeline = new gsap.TimelineMax({
                paused: true,
                immediateRender: true,
                default: {
                    ease: "ease.inOut"
                }
            });
		
		timeline.fromTo(this.element, 1, {
			y: '1em',
			x: '-0.5em',
			opacity: '0'
		}, {
			y: '0em',
			x: '0em',
			opacity: 1
		});
		
		return timeline;
		
    }
    
    _bindEvents() {
		
		window.addEventListener('scroll', (e) => {
			
			this.onScroll(e);
			
		});
		
	}
	
	onScroll(e) {
		
		// Check if the element is in view and setting the hook's position
		this.isVisible = _utils.isInView(this.element, 0.8);
			
		// If the element is in view
		if(this.isVisible._inView) {
			
			// Playing the animation from 0 to 1 or 1 to 0
			this.Timeline.progress(this.isVisible._perone);
		}
		
	}
}

export default AnimateBloc;