# be-a-beacon [TODO]

be-a-becon is an HTML Element behavior / decorator that causes the HTMLTemplate element it adorns to emit event 'i-am-here", the moment it is connected to the element.

## Use cases

1.  be-a-beacon provides an very similar, but slightly different solution to a limitation of the platform -- we don't know when a DOM element has finished parsing.  The solution this component provides an alternative to is spelled out [here](https://github.com/WICG/webcomponents/issues/809).

The difference is that this decorator gets applied to a template element, which can appear anywhere inside a table element without being rudely ejected.