### HOCs

To make `inro` easy to integrate with projects, libraries, etc. each responsive
utility has been made as a higher-order component (HOC). This abstraction allows
for supreme customizability and convenience of development.

[More on HOCs can be found on react's official docs.][react docs]
[react docs]: https://facebook.github.io/react/docs/higher-order-components.html

#### inro.flexContainer(\[options\])

*   `options` [`<Object>`][mdn docs type object]
    *   `defaultProps` [`<Object>`][mdn docs type object]
        *   `inline` [`<boolean>`][mdn docs type boolean] **Default:** `false`,
        *   `alignContent` [`<string>`][mdn docs type string] **Default:** `'stretch'`
        *   `alignItems` [`<string>`][mdn docs type string] **Default:** `'stretch'`
        *   `flexDirection` [`<string>`][mdn docs type string] **Default:** `'row'`
        *   `flexWrap` [`<string>`][mdn docs type string] **Default:** `'wrap'`
        *   `justifyContent` [`<string>`][mdn docs type string] **Default:** `'flex-start'`

Returns an HOC wrapping `function`. This HOC decorates with the following props:

*   `inline` [`<boolean>`][mdn docs type boolean] **Default:** See `defaultProps`
    *   Switches the [`display`][mdn docs display] value between `inline-flex` and `flex`
*   `alignContent` [`<string>`][mdn docs type string] **Default:** See `defaultProps`
    *   Sets the [`align-content`][mdn docs align-content] value
    *   Possible values include:
        *   `'flex-start'`
        *   `'flex-end'`
        *   `'center'`
        *   `'space-between'`
        *   `'space-around'`
        *   `'space-evenly'`
        *   `'stretch'`
*   `alignItems` [`<string>`][mdn docs type string] **Default:** See `defaultProps`
    *   Sets the [`align-items`][mdn docs align-items] value
    *   Possible values include:
        *   `'flex-start'`
        *   `'flex-end'`
        *   `'center'`
        *   `'baseline'`
        *   `'stretch'`
*   `flexDirection` [`<string>`][mdn docs type string] **Default:** See `defaultProps`
    *   Sets the [`flex-direction`][mdn docs flex-direction] value
    *   Possible values include:
        *   `'row'`
        *   `'row-reverse'`
        *   `'column'`
        *   `'column-reverse'`
*   `flexWrap` [`<string>`][mdn docs type string] **Default:** See `defaultProps`
    *   Sets the [`flex-wrap`][mdn docs flex-wrap] value
    *   Possible values include:
        *   `'nowrap'`
        *   `'wrap'`
        *   `'wrap-reverse'`
*   `justifyContent` [`<string>`][mdn docs type string] **Default:** See `defaultProps`
    *   Sets the [`justify-content`][mdn docs justify-content] value
    *   Possible values include:
        *   `'flex-start'`
        *   `'flex-end'`
        *   `'center'`
        *   `'space-between'`
        *   `'space-around'`
        *   `'space-evenly'`

[mdn docs display]: https://developer.mozilla.org/en-US/docs/Web/CSS/display
[mdn docs align-content]: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
[mdn docs align-items]: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
[mdn docs flex-direction]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
[mdn docs flex-wrap]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
[mdn docs justify-content]: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content

#### inro.flexItem(\[options\])

*   `options` [`<Object>`][mdn docs type object]
    *   `defaultProps` [`<Object>`][mdn docs type object]
        *   `alignSelf` [`<string>`][mdn docs type string] **Default:** `'auto'`
        *   `flexBasis` [`<string>`][mdn docs type string] **Default:** `'auto'`
        *   `flexGrow` [`<number>`][mdn docs type number] **Default:** `1`
        *   `flexShrink` [`<number>`][mdn docs type number] **Default:** `1`
        *   `order` [`<number>`][mdn docs type number] **Default:** `0`

Returns an HOC wrapping `function`. This HOC decorates with the following props:

*   `alignSelf` [`<string>`][mdn docs type string] **Default:** See `defaultProps`
    *   Sets the [`align-self`][mdn docs align-self] value
    *   Possible values include:
        *   `'auto'`
        *   `'flex-start'`
        *   `'flex-end'`
        *   `'center'`
        *   `'baseline'`
        *   `'stretch'`
*   `flexBasis` [`<string>`][mdn docs type string] **Default:** See `defaultProps`
    *   Sets the [`flex-basis`][mdn docs flex-basis] value
    *   Possible values include:
        *   `'auto'`
        *   `'content'`
        *   `<'width'>`
*   `flexGrow` [`<number>`][mdn docs type number] **Default:** See `defaultProps`
    *   Sets the [`flex-grow`][mdn docs flex-grow] value
    *   Possible values include:
        *   `<number>`
*   `flexShrink` [`<number>`][mdn docs type number] **Default:** See `defaultProps`
    *   Sets the [`flex-shrink`][mdn docs flex-shrink] value
    *   Possible values include:
        *   `<number>`
*   `order` [`<number>`][mdn docs type number] **Default:** See `defaultProps`
    *   Sets the [`order`][mdn docs order] value
    *   Possible values include:
        *   `<integer>`

[mdn docs align-self]: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
[mdn docs flex-basis]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
[mdn docs flex-grow]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
[mdn docs flex-shrink]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
[mdn docs order]: https://developer.mozilla.org/en-US/docs/Web/CSS/order

#### inro.gridColumn(\[options\])

*   `options` [`<Object>`][mdn docs type object]
    *   `columns` [`<number>`][mdn docs type number] **Default:** `inro.constants.columns`
    *   `styledBreakpointOptions` [`<Object>`][mdn docs type object] **Default:** `{ suffix: '-columns' }`
        *   For more properties and defaults, see the `styledBreapoint` HOC docs
    *   `defaultProps` [`<Object>`][mdn docs type object] **Default:** `{}`
    *   `flex` [`<boolean>`][mdn docs type boolean] **Default:** `true`

If `flex` is `false`, flexbox properties will not be applied, instead
`float: left` will be used.

Returns an HOC wrapping `function`. This HOC decorates with the following props:

*   `[prefix][breakpoint][suffix]` [`<number>`][mdn docs type number] | [`<string>`][mdn docs type string]
    *   Possible values include:
        *   An integer between 1 and `columns`
        *   `'auto'`

#### inro.gridColumnOffset(\[options\])

*   `options` [`<Object>`][mdn docs type object]
    *   `columns` [`<number>`][mdn docs type number] **Default:** `inro.constants.columns`
    *   `styledBreakpointOptions` [`<Object>`][mdn docs type object] **Default:** `{ suffix: '-column-offset' }`
        *   For more properties and defaults, see the `styledBreapoint` HOC docs
    *   `defaultProps` [`<Object>`][mdn docs type object] **Default:** `{}`

Returns an HOC wrapping `function`. This HOC decorates with the following props:

*   `[prefix][breakpoint][suffix]` [`<number>`][mdn docs type number]
    *   Possible values include:
        *   An integer between 1 and `columns`

#### inro.gridContainer(\[options\])

*   `options` [`<Object>`][mdn docs type object]
    *   `styledBreakpointOptions` [`<Object>`][mdn docs type object] **Default:** `{ suffix: '-container' }`
        *   For more properties and defaults, see the `styledBreapoint` HOC docs
    *   `gridContainerMaxWidths` [`<Object>`][mdn docs type object] **Default:** `inro.constants.gridContainerMaxWidths`
    *   `gutterHalfWidth` [`<string>`][mdn docs type string] **Default:** `inro.constants.gutterHalfWidth`
    *   `defaultProps` [`<Object>`][mdn docs type object] **Default:** `{ [prefix][breakpoint][suffix]: [gridContainerMaxWidth] }`

Returns an HOC wrapping `function`. This HOC decorates with the following props:

*   `[prefix][breakpoint][suffix]` [`<string>`][mdn docs type string]
    *   Possible values include:
        *   `<'width'>`

#### inro.gridGutterColumn(\[options\])

*   `options` [`<Object>`][mdn docs type object]
    *   `gutterHalfWidth` [`<string>`][mdn docs type string] **Default:** `inro.constants.gutterHalfWidth`

Returns an HOC wrapping `function`.

#### inro.gridGutterRow(\[options\])

*   `options` [`<Object>`][mdn docs type object]
    *   `gutterHalfWidth` [`<string>`][mdn docs type string] **Default:** `inro.constants.gutterHalfWidth`

Returns an HOC wrapping `function`.

#### inro.gridRow()

Returns an HOC wrapping `function`.

#### inro.styledBreakpoint(\[options\])

*   `options` [`<Object>`][mdn docs type object]
    *   `prefix` [`<string>`][mdn docs type string] **Default:** `''`
    *   `suffix` [`<string>`][mdn docs type string] **Default:** `'-style'`
    *   `breakpointWidths` [`<Object>`][mdn docs type object] **Default:** `inro.constants.breakpointMinWidths`
    *   `cssTemplate` [`<Function>`][mdn docs type function] **Default:**
        ```js
        ({ breakpointWidth, value }) => (
          `@media (min-width: ${breakpointWidth}) { ${value} }`
        )
        ```
    *   `defaultProps` [`<Object>`][mdn docs type object] **Default:** `{}`

Returns an object with the following properties:

*   `propNameMap` [`<Object>`][mdn docs type object]
    *   An object that maps `{ [prefix][breakpoint][suffix]: [breakpointWidth] }`
*   `propNames` [`<Array>`][mdn docs type array]
    *   An array of prop names `[prefix][breakpoint][suffix]`
*   `propTypes` [`<Object>`][mdn docs type object]
    *   For use with react component typechecking
*   `template` [`<Function>`][mdn docs type function]
    *   Takes a props object and reduces only the relevant props to a CSS string
*   `component` [`<Function>`][mdn docs type function]
    *   An enhanced react component.

The enhanced react component will have the following props:

*   `[prefix][breakpoint][suffix]` [`<string>`][mdn docs type string] | [`<Function>`][mdn docs type function]
    *   For the specified breakpoint, the string will be used directly
        in the media query
    *   For the specified breakpoint, the function will be called with
        the following arguments, and must return a string:
        *   `props` [`<Object>`][mdn docs type object]
        *   `cssReducerAccumulation` [`<Object>`][mdn docs type object]
            *   `css` [`<string>`][mdn docs type string]
            *   `propName` [`<string>`][mdn docs type string]
            *   `breakpoint` [`<string>`][mdn docs type string]
            *   `breakpointWidth` [`<string>`][mdn docs type string]
        *   `styledBreakpointConfiguration` [`<Object>`][mdn docs type object]
            *   `propNameMap` [`<Object>`][mdn docs type object]
            *   `propNames` [`<Array>`][mdn docs type array]
            *   `propTypes` [`<Object>`][mdn docs type object]
            *   `breakpointWidths` [`<Object>`][mdn docs type object]
            *   `cssTemplate` [`<Function>`][mdn docs type function]

[mdn docs type object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[mdn docs type function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[mdn docs type array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[mdn docs type boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[mdn docs type string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[mdn docs type number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
