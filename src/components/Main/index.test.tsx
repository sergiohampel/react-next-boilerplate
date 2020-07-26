import { screen, render } from '@testing-library/react';

import { Main } from './index';

describe('<Main />', () => {
  it('should render <Main />', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Sérgio Hampel/i })
    ).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
