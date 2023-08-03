import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test component <AddCategory/>', () => {

  test('should change input value', () => {

    render(<AddCategory onNewCategory={() => { }} />);
    //screen.debug();
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {
      target: { value: 'Saitama' }
    });
    expect(input.value).toBe('Saitama');
  });

  test('should call onNewCategory if input value is not empty', () => {

    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {
      target: { value: inputValue }
    });

    fireEvent.submit(form); // Simular envío del formulario

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    screen.debug();
  });

  test('should not call onNewCategory if input value is empty', () => {

    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');

    fireEvent.submit(input.parentElement); // Simular envío del formulario

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();

  });

});
