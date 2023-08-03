import { render, screen } from '@testing-library/react';
import { GitGrid } from '../../src/components/GitGrid';
import { useFetchGits } from '../../src/hooks/useFetchGits';

jest.mock('../../src/hooks/useFetchGits');


describe('Test component <GitGrid', () => {
  const category = 'One Punch';

  test('should show the loading initially', () => {

    useFetchGits.mockReturnValue({
      images: [],
      isLoading: true,

    });

    render(<GitGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('should show items when loading images', () => {

    const gits = [
      {
        id: '1',
        title: 'one punch',
        url: 'https://onepunch.com'
      },
      {
        id: '2',
        title: 'Goku',
        url: 'https://goku.com'
      }
    ];
    useFetchGits.mockReturnValue({
      images: gits,
      isLoading: false,

    });

    render(<GitGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
    expect(screen.getByText(category));
    expect(screen.getByText(gits[ 0 ].title));
    expect(screen.getByText(gits[ 1 ].title));
  });

});
