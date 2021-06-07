import './index.less';

import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import * as React from 'react';
import { Cell } from 'vantr';

export default () => {
  const [state, setState] = React.useState({ visible: false, motionName: '' });

  const animate = (motionName: string) => {
    setState({ visible: true, motionName });
    setTimeout(() => {
      setState({ ...state, visible: false });
    }, 500);
  };

  return (
    <div className='demo-style'>
      <Cell.Group title='1px 边框' border={false} radius>
        <Cell>
          <div className='vanr-hairline-top' />
        </Cell>
      </Cell.Group>
      <Cell.Group title='动画' border={false} radius>
        <Cell onPress={() => animate('vanr-fade')}>Fade</Cell>
        <Cell onPress={() => animate('vanr-slide-up')}>Slide Up</Cell>
        <Cell onPress={() => animate('vanr-slide-down')}>Slide Down</Cell>
        <Cell onPress={() => animate('vanr-slide-left')}>Slide Left</Cell>
        <Cell onPress={() => animate('vanr-slide-right')}>Slide Right</Cell>
        <Cell onPress={() => animate('vanr-move-up')}>Move Up</Cell>
        <Cell onPress={() => animate('vanr-move-down')}>Move Down</Cell>
        <Cell onPress={() => animate('vanr-move-left')}>Move Left</Cell>
        <Cell onPress={() => animate('vanr-move-right')}>Move Right</Cell>
        <Cell onPress={() => animate('vanr-zoom-up')}>Zoom Up</Cell>
        <Cell onPress={() => animate('vanr-zoom-down')}>Zoom Down</Cell>
        <Cell onPress={() => animate('vanr-zoom-left')}>Zoom Left</Cell>
        <Cell onPress={() => animate('vanr-zoom-right')}>Zoom Right</Cell>
        <Cell onPress={() => animate('vanr-zoom-big')}>Zoom Big</Cell>
        <Cell onPress={() => animate('vanr-zoom-big-fast')}>Zoom Big Fast</Cell>
      </Cell.Group>
      <CSSMotion visible={state.visible} motionName={state.motionName}>
        {({ className, style }) => (
          <div className={classNames('demo-style-animate', className)} style={style} />
        )}
      </CSSMotion>
    </div>
  );
};
