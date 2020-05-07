import "core-js/stable";
import "regenerator-runtime/runtime";

/*
** Dependencies
*/
import gsap from "gsap";

/*
** Utils
*/
import utils from "./utils.js";

/*
** Components
*/
import AnimateBloc from "./components/AnimateBloc.js";


window.onload = (e) => {
    
    let blocs = document.querySelectorAll('.js-bloc');

    blocs.forEach( (item, n) => {

        new AnimateBloc(item);

    });

}