import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Touchable from '../src';

describe('Touchable', () => {
  it('snapshot', () => {
    const component = render(
      <Touchable>
        <div />
      </Touchable>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('onPress', () => {
    const fn = jest.fn();
    const component = render(
      <Touchable onPress={fn}>
        <div />
      </Touchable>,
    );

    fireEvent.click(component.container);

    expect(fn).toHaveBeenCalled();
  });

  it('onPressIn', () => {
    const fn = jest.fn();
    const component = render(
      <Touchable onPressIn={fn}>
        <div />
      </Touchable>,
    );

    fireEvent.click(component.container);

    expect(fn).toHaveBeenCalled();
  });

  it('onPressOut', () => {
    const fn = jest.fn();
    const component = render(
      <Touchable onPressOut={fn}>
        <div />
      </Touchable>,
    );

    fireEvent.click(component.container);

    expect(fn).toHaveBeenCalled();
  });
});
