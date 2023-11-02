import React from 'react';
import Button from './Button';
import {render, fireEvent} from '@testing-library/react-native';
import {jest, it, describe, expect} from '@jest/globals';

describe('Button', () => {
  it('calls handlePress when the button is pressed', () => {
    const handlePressMock = jest.fn();

    const {getByRole} = render(
      <Button title="Click Me" handlePress={handlePressMock} />,
    );

    const button = getByRole('button');
    fireEvent.press(button);

    expect(handlePressMock).toHaveBeenCalled();
  });
});
