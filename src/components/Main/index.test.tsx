import { screen, render } from '@testing-library/react';

import { Main } from './index';

describe('<Main />', () => {
  it('should render <Main />', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Sérgio Hampel/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
