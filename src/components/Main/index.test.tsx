import { screen, render } from '@testing-library/react';

import { Main } from './index';

describe('<Main />', () => {
  it('should render <Main />', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Sérgio Hampel/i })
    ).toBeInTheDocument();
  });
});
