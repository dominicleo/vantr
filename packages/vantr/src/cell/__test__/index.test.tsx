import * as React from 'react';
import { render } from '@testing-library/react';
import Loading from '../';

describe('Loading', () => {
  it('snapshot', () => {
    const component = render(<Loading />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
