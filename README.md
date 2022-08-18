# be-a-beacon

<a href="https://nodei.co/npm/be-netaniroguc/"><img src="https://nodei.co/npm/be-metamorphic.png"></a>

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-metamorphic?style=for-the-badge)](https://bundlephobia.com/result?p=be-metamorphic)

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-metamorphic?compression=gzip">

be-a-becon is an HTML Element behavior / decorator that causes the HTMLTemplate element it adorns to emit event 'i-am-here", the moment it is connected to the element.

## Use cases

1.  be-a-beacon provides an very similar, but slightly different solution to a limitation of the platform -- we don't know when a DOM element has finished parsing.  The solution this component provides an alternative to is spelled out [here](https://github.com/WICG/webcomponents/issues/809).

The difference is that this decorator gets applied to a template element, which can appear anywhere inside a table element without being rudely ejected.