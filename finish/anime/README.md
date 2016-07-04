[项目地址](https://github.com/juliangarnier/anime)

API
---

targets
----

Defines the elements or JS Objects to animate.

* CSS Selectors | 'div' '.thing' 'path'
* DOM Element | document.querySelector('.thing')
* Nodelist | document.querySelectorAll('.thing')
* Javascript Object | {prop1:100,prop2:200}
* Javascript Array | ['.thing-1','div']

Parameters
----

* delay | 0 | number,function(el,index,total)
* duration | 1000 | number,function(el,index,total)
* autoplay | true | boolean
* loop | false | number,boolean
* direction | 'normal' | 'normal' 'reverse' 'alternate'
* easing | 'easeOutElastic' | console.log anime.easings to get the complete functions list

easeInBack

easeInBounce

easeInCirc

easeInCubic

easeInElastic

easeInExpo

easeInOutBack

easeInOutBounce

easeInOutCirc

easeInOutCubic

easeInOutElastic

easeInOutExpo

easeInOutQuad

easeInOutQuart

easeInOutQuint

easeInOutSine

easeInQuad

easeInQuart

easeInQuint

easeInSine

easeOutBack

easeOutBounce

easeOutCirc

easeOutCubic

easeOutElastic

easeOutExpo

easeOutQuad

easeOutQuart

easeOutQuint

easeOutSine

linear

* elasticity(弹性) | 400 | number(higher is stronger)
* round | false | number,boolean
* begin | undefined | function(animation)
* update | undefined | function(animation)
* complete | undefined | function(animation)

<hr/>

Parameters can be set individually to properties by using an Object.

Specific property parameters are :

* value (required)
* delay
* duration
* easing

<hr/>

Delays and durations can be specific to each targeted elements by using a function.

Available function arguments:

Positions   Names   Infos

*  target | The targeted element
*  index  |  The target index (start at 0)
*  length of targets  |  The total number of targets (start at 0)

<hr/>

Any property can be animated, as long as the property value contains at least one numerical value.

* CSS Properties |  width borderRadius 'background-color'
* individual transforms | translateX rotate scaleY
* SVG attributes | d rx transform
* DOM attributes | value volume
* Object properties |  any object property containing at lease one number

<hr/>

property values
---

signle value
----

* Number  100 Will use default units if possible
* String  '100rem'    Will force the animation to use a specific value

From To values
---

Defines the start and end values of the animation.

translateX:[50,250]

Specific target values
---

Property values can be specific to each targeted elements by using a function.

Available function arguments:

*  target  The targeted element
*  index   The target index (start at 0)

Playback controls
---

* .play() Play the animation  animation parameters object
* .pause()    Pause the animation none
* .restart()  Restart the animation   animation parameters object
* .seek() Advance in the animation    a percentage, or an object {time: 1250}


Helplers
---

Return an array of all active animations objects

anime.list;

<hr/>

Change all animations speed (from 0 to 1).

anime.speed = .5; // Will slow down all animations by half of their original speed

<hr/>

Return the complete list of anime.js easing functions

anime.easings;

<hr/>

Remove one or multiple targets from the animation.

anime.remove('.item-2'); // Will remove all divs with the class '.item-2'

<hr/>

Get current valid value from an element.

anime.getValue('div', 'translateX'); // Will return '100px'

<hr/>

Generate a random number between two numbers.

anime.random(10, 40); // Will return a random number between 10 and 40
