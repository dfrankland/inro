import styled from 'styled-components';
import display from '../hocs/display';
import gridGutterColumn from '../hocs/gridGutterColumn';
import gridColumnOffset from '../hocs/gridColumnOffset';
import gridColumn from '../hocs/gridColumn';
import flexItem from '../hocs/flexItem';

export default (
  display(
    gridGutterColumn(
      gridColumnOffset(
        gridColumn(
          flexItem(
            styled.div``,
          ),
        ),
      ),
    ),
  )
);
