# simplyrotate-js
 Package to rotate elements with js

Attribution to this [post](https://stackoverflow.com/questions/48916517/javascript-click-and-drag-to-rotate) on stackoverflow for pointing out how to go about this.
Figured that this is a feature that many people just need a one stop solution for (particularly myself included). So here this is for when I or anyone might need it later.


# Usage:
HTML
```
<span class="rotatible"></span>
```

JavaScript
```
import { makeRotatable } from 'simplyrotate-js'

//get all elements classed rotatible
var rotatibleArr = document.querySelectorAll('.rotatible')
//for each of these called makeRotatable on them
rotatibleArr.forEach((r) => makeRotatable(r as HTMLElement))
```

and there you go...

It should just rotate on drag about the edges of your element


