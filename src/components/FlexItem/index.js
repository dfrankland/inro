import styled from 'styled-components';
import styledBreakpoint from '../../hocs/styledBreakpoint';
import gridGutterColumn from '../../hocs/gridGutterColumn';
import gridColumnOffset from '../../hocs/gridColumnOffset';
import gridColumn from '../../hocs/gridColumn';
import flexItem from '../../hocs/flexItem';

export default (
  styledBreakpoint()(
    gridGutterColumn()(
      gridColumnOffset()(
        gridColumn()(
          flexItem()(
            styled.div``,
          ),
        ),
      ),
    ),
  ).component
);
