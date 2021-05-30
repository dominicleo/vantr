import * as React from 'react';
import classnames from 'classnames';
import Touchable from '@vantr/touchable';
import { TouchablePropType } from '@vantr/touchable/es/PropsType';

const TouchableFeedback: React.FC<
  {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
  } & TouchablePropType
> = (props) => {
  const [active, setActive] = React.useState(false);
  const { activeClassName, activeStyle, children, ...rest } = props;

  const pressIn = (event: React.SyntheticEvent) => {
    setActive(true);
    props.onPressIn?.(event);
  };

  const pressOut = (event: React.SyntheticEvent) => {
    setActive(false);
    props.onPressOut?.(event);
  };

  const child = React.Children.only(children);
  const { className, style } = (child as any).props;

  const cls = classnames(className, {
    [`${activeClassName}`]: active && !!activeClassName,
  });

  // @ts-ignore
  const childWithCls = React.cloneElement(child, {
    className: cls,
    style: active ? { ...style, ...activeStyle } : style,
  });

  return (
    <Touchable {...rest} onPressIn={pressIn} onPressOut={pressOut}>
      {childWithCls}
    </Touchable>
  );
};

export default TouchableFeedback;
