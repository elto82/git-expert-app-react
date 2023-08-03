import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test component <GifItem/>', () => {
  const title = 'giphy';
  const url = 'https://media.giphy.com/media/3o7TKXwuJQwzqQMf2p/giphy.gif';

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the title and url image', () => {
    const { container, getByText } = render(<GifItem title={title} url={url} />);
    expect(getByText(title)).toBeTruthy();
    expect(container.querySelector('img').src).toBe(url);
    const { src } = screen.getByRole('img');
    expect(src).toBe(url);
  });

  test('should show the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

});