import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Test component <GifExpertApp', () => {
  test('should show the title', () => {
    render(<GifExpertApp />);
    const { container } = render(<GifExpertApp />);
    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain('GifExpertApp');
    expect(h1).toMatchSnapshot();
    // screen.debug();
  });

  // Tests that the component renders without throwing an error
  test('should render without errors', () => {
    render(<GifExpertApp />);
    expect(true).toBeTruthy();
  });

});
