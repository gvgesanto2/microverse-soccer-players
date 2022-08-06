import { render } from '@testing-library/react';
import HamburgerButton from './hamburger-button.component';

describe('HamburgerButton component', () => {
  it('should render correctly with the isHamburgerMenuOpen property set to false', () => {
    const component = render(
      <HamburgerButton
        isHamburgerMenuOpen={false}
        handleClick={() => {}}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with the isHamburgerMenuOpen property set to true', () => {
    const component = render(
      <HamburgerButton
        isHamburgerMenuOpen
        handleClick={() => {}}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
