//this is the js file in the packages.  For the animation example, this must be in the public area

import { timeline } from 'wix-animations'

// Private
function isString(str) {
    return Object.prototype.toString.call(str) === "[object String]";
}

function isAnimatable(comps) {
    comps = Array.isArray(comps) ? comps : [comps];
    return comps.length && comps.every(comp => typeof comp.show === 'function');
}

export const testNamespace = {
spin: (elements, { duration = 1000, direction = 'cw', easing = 'easeLinear', pause = false } = {}) => {
    const comps = isString(elements) ? $w(elements) : elements;
    let spinTimeLine = timeline({ repeat: -1 }).add(comps, { duration, rotate: 360, rotateDirection: direction, easing });
    if (!isAnimatable(comps)) {
        console.error(comps, 'is not animatable: \nspin() requires an animatable element or a list of animatable elements as its first parameter');
        return null;
    }
    if (!pause) {
        return spinTimeLine.play();
    }
    return spinTimeLine;
}

}
