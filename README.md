# be-a-beacon

<a href="https://nodei.co/npm/be-netaniroguc/"><img src="https://nodei.co/npm/be-metamorphic.png"></a>

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-metamorphic?style=for-the-badge)](https://bundlephobia.com/result?p=be-metamorphic)

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-metamorphic?compression=gzip">

be-a-becon is an HTML Element behavior / decorator that causes the HTMLTemplate element it adorns to emit event 'i-am-here", the moment it is connected to the element.

## Use cases

1.  be-a-beacon provides an very similar, but slightly different solution to a current [limitation of the platform](https://github.com/WICG/webcomponents/issues/809) -- we don't know when a DOM element has finished parsing.  The solution this component provides is an alternative to the solution spelled out [here](https://github.com/WICG/webcomponents/issues/809#issuecomment-534115603).

The difference is that this solution gets applied to a template element, which can appear in many more places without violating HTML decorum.  In particular, it can appear inside a table element without being rudely ejected:

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

2.  If a div element (say) is populating by a (streaming) fetch request, and that populating is done numerous times based on user interaction / timing events, then the placement of the beacon at the end of the stream can be used instead of a mutation observer to indicate, for example, that some content dirived from the contents of the DOM is ready to be generated.
