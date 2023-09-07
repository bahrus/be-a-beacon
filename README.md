# be-a-beacon

be-a-beacon is an HTML Element enhancement that causes the HTMLTemplate element it adorns to emit bubbling event 'i-am-here", the moment it is connected to the element

```html
<div be-a-beacon>
    ...
</div>
```

## Specify event name [TODO]

To specify a different event name, set the attribute to the name ("type") of the event you would like it to emit:

```html
<section>
    ...
    <div be-a-beacon=how-can-i-help>
        ...
    </div>
</section>
```

```JavaScript
oSection.addEventListener('how-can-i-help', e => {
    console.log(e.target);
})
```

[![Playwright Tests](https://github.com/bahrus/be-a-beacon/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-a-beacon/actions/workflows/CI.yml)
[![NPM version](https://badge.fury.io/js/be-a-beacon.png)](http://badge.fury.io/js/be-a-beacon)

Size of package, including custom element behavior framework (be-decorated):

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-a-beacon?style=for-the-badge)](https://bundlephobia.com/result?p=be-a-beacon)

Size of new code in this package:

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-a-beacon?compression=gzip">



## Use cases

1.  be-a-beacon provides a similar, but slightly different solution to a current [limitation of the platform](https://github.com/WICG/webcomponents/issues/809) -- we don't know when a DOM element has finished parsing.  The solution this component provides is an alternative to the solution spelled out [here](https://github.com/WICG/webcomponents/issues/809#issuecomment-534115603).

The difference is that this solution doesn't require a separate web component, but can simply "enhance" the last built-in DOM element of the stream.  The template element, for example can be used universally, because it is one of the few elements that can appear in many more places without violating HTML decorum.  In particular, it can appear inside a table element without being rudely ejected:

```html
<table>
    <thead>
        ...
    </thead>
    <tbody>
        ...
    </tbody>
    <template be-a-beacon></template>
</table>
```

2.  If a div element (say) is populated by a (streaming) fetch request, and that populating is done numerous times based on user interaction / timing events, then the placement of the beacon at the end of the stream can be used instead of a mutation observer to indicate, for example, that some content that should be derived from the contents of the DOM is ready to be generated.

3.  If a component wishes to provide its own default light children, in the event that the consumer doesn't provide their own, a cue is needed to know when no light children will be provided.

## Viewing Locally

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:3030/demo/dev in a modern browser.

## Importing in ES Modules:

```JavaScript
import 'be-a-beacon/be-a-beacon.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-a-beacon';
</script>
```
