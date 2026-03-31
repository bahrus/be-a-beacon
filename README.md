# be-a-beacon (🗽)

[![Playwright Tests](https://github.com/bahrus/be-a-beacon/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-a-beacon/actions/workflows/CI.yml)
[![NPM version](https://badge.fury.io/js/be-a-beacon.png)](http://badge.fury.io/js/be-a-beacon)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-a-beacon?style=for-the-badge)](https://bundlephobia.com/result?p=be-a-beacon)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-a-beacon?compression=gzip">

be-a-beacon is an HTML Element enhancement that causes the HTMLTemplate (or any other) element it adorns to emit, by default, bubbling event 'i-am-here', the moment it is connected to the live DOM tree.  be-a-beacon is specifically tailored for situations where elements arrive on the scene unexpectedly -- while the server-rendered HTML is streaming, or when fragments are added when conditions are warranted in the browser (i.e. lazy loading). 

```html
<div be-a-beacon>
    ...
</div>

...
<be-hive>
    <script type=mountobserver src="be-a-beacon/enh.json"></script>
</be-hive>
<script type=module>
    import 'be-hive/be-hive.js';
</script>
```

The markup above is the "canonical" name, associated with this package name.

To use a shorter name, in a more closed, informal environment where conflicts between libraries can be easily avoided, we can define a file that customizes the name.  For example, [this alternative](https://github.com/bahrus/be-a-beacon/blob/baseline/%F0%9F%97%BD.js) allows us to use 🗽 instead [TODO:  update path]:

```html
<div 🗽>
    ...
</div>
<be-hive>
    <script type=mountobserver src="be-a-beacon/🗽.json"></script>
</be-hive>
<script type=module>
    import 'be-hive/be-hive.js';
</script>
```

### Spell out the name of the event

To specify a different event name, set the attribute to the name ("type") of the event you would like it to emit:

```html
<section>
    ...
    <div be-a-beacon=last-div-at-your-service>
        ...
    </div>
</section>
```

```JavaScript
oSection.addEventListener('last-div-at-your-service', e => {
    console.log(e.target);
})
```

## Shorter name

*be-a-beacon* is the formal canonical name of this enhancement.  In less formal settings, where clashes between different libraries are less likely, you can reference an alternative file, 🗽.js, and use a much shorter name:

To see how easy it is to define your own name, see the [file](https://github.com/bahrus/be-a-beacon/blob/baseline/%F0%9F%97%BD.ts) that registers this alternative name.

### Announce the presence of the id of the element

This is useful, for example, for [bundling HTML includes](https://github.com/bahrus/be-written#support-for-bundling)

```html
<section>
    ...
    <template id=b0735b7a-84d1-42e9-b3b8-e24cb88f5985 🗽=#>
        ...
    </template>
</section>
```

So the special value of "#" means emit event with the name specified by the id.


## Use cases

1.  be-a-beacon provides a similar, but slightly different solution to a current [limitation of the platform](https://github.com/WICG/webcomponents/issues/809) -- we don't know when a DOM element has finished parsing.  The solution this component provides is an alternative to the solution spelled out [here](https://github.com/WICG/webcomponents/issues/809#issuecomment-534115603).

The difference is that this solution doesn't require a separate web component, but can simply "enhance" the last DOM element of the stream.  The template element might be a good element to use be-a-beacon on, because the template element can be used universally -- it is one of the few elements that can appear in many more places without violating HTML decorum.  In particular, it can appear inside a table element without being rudely ejected:

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

However, be-a-beacon can adorn any element, not just the template element.  If adorning a custom element, you will need to prefix the attribute with "enh-by":

```html
<my-fragment>
    ...
    <my-custom-element enh-by-be-a-beacon></my-custom-element>
</my-fragment>
```

2.  If a div element (say) is populated by a (streaming) fetch request, and that populating is done numerous times based on user interaction / timing events, then the placement of the beacon at the end of the stream can be used instead of a mutation observer to indicate, for example, that some content that should be derived from the contents of the DOM is ready to be generated.

3.  If a component wishes to provide its own default light children, in the event that the consumer doesn't provide their own, a cue is needed to know when no light children will be provided.

## Viewing Locally

Any web server that serves static files (html, css, js) will do but...

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:8000/demo in a modern browser.

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


Strategy:

Define enhancementConfig(s)

Each one generates .json



