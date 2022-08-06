import { render } from '@testing-library/react';
import MainContent from './main-content.component';

let component;

describe('MainContent component', () => {
  beforeEach(() => {
    const mainContentChild = <h1>Testing</h1>;
    component = render(<MainContent>{mainContentChild}</MainContent>);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
