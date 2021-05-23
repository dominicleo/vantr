import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../';

describe('Button', () => {
  it('snapshot', () => {
    const component = render(<Button />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('onPress', () => {
    const onPress = jest.fn();
    const component = render(<Button onPress={onPress}>button</Button>);
    const element = component.getByText('button');

    fireEvent.click(element);

    expect(onPress).toHaveBeenCalled();
  });
});
