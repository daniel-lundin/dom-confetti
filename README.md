# dom-confetti

[![npm version](https://badge.fury.io/js/dom-confetti.svg)](https://www.npmjs.com/package/dom-confetti)

Trigger confetti explosions in the DOM.

```js
import { confetti } from 'dom-confetti';

const button = document.querySelector(".my-button")
button.addEventListener("click", () => confetti(button))
```

This will trigger a confetti explosion every time a button is clicked.

## Demo

[https://daniel-lundin.github.io/react-dom-confetti/](https://daniel-lundin.github.io/react-dom-confetti/)

## Interface

**`confetti`**`(root, config = {})`

`root` should be the DOM element to start the explosion at, and
`config`, if given, may be an object specifying the following options:

- `angle` - direction of the explosion in degrees, defaults to 90.
- `spread` - spread of the explosion in degrees, defaults to 45.
- `startVelocity` - Initial velocity of the particles, defaults to 45.
- `width`: - width of the confetti elements as css string, defaults to `10px`.
- `height`: - height of the confetti elements as css string, defaults to `10px`.
- `perspective` - perspective of root element.
- `height`: - height of the confetti elements
- `elementCount` - Number of particle elements, defaults to 50.
- `decay` - *deprecated* - Decrease in velocity per frame, defaults to 0.9 (Use of this will disable dragFriction)
- `dragFriction` - Decrease in velocity proportional to current velocity, default to 0.1
- `duration` - Duration in milliseconds, defaults to 3000
- `stagger` - Delay for each fetti in milliseconds, defaults to 0.
- `random` - Randomization function, defaults to Math.random
- `colors` - An array of color codes, defaults to `['#a864fd', '#29cdff', '#78ff44', '#ff718d' '#fdff6a']`
- `image` - Replace colors with an image instead (absolute or relative url). 

Returns a promise that resolves once the confetti has completed its fade out.

License MIT, copyright [Daniel Lundin](https://twitter.com/danielundin) 2019
