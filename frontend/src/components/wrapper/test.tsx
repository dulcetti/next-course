import { render, screen } from '@testing-library/react';
import Wrapper from '.';

describe('Container Component', () => {
  it('should be render the Heading', () => {
    const { container } = render(<Wrapper />);

    expect(screen.getByRole('heading', { name: /papo de bar/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
