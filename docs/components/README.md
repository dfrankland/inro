### Components

All components that are exported by `inro` are merely for convenience. They
are completely consisted of HOCs that are also exported. For the individual
props used with each, refer to the HOCs documentation.

#### inro.FlexContainer

The row of the grid system which typically contains `FlexItem`s as children.

`FlexContainer` is composed by the following HOCs:

*   `styledBreakpoint`
*   `gridGutterRow`
*   `gridRow`
*   `flexContainer`

#### inro.FlexItem

The columns of the grid system which contain content.

`FlexItem` is composed by the following HOCs:

*   `styledBreakpoint`
*   `gridGutterColumn`
*   `gridColumnOffset`
*   `gridColumn`
*   `flexItem`

#### inro.GridContainer

This is more of an optional container for the rows of the grid system, to center
and give a max width to content for larger screens.

`FlexItem` is composed by the following HOCs:

*   `styledBreakpoint`
*   `gridContainer`
