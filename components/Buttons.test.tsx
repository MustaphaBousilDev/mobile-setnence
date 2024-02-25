import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from './Buttons'; // assuming CustomButton is in the same directory

describe('CustomButton', () => {
  test('renders with default props', () => {
    const { getByText } = render(<CustomButton title="Press Me" />);
    const button = getByText('Press Me');
    expect(button).toBeDefined();
  });

  test('renders with custom props', () => {
    const onPressMock = jest.fn();
    const { getByText, getByTestId } = render(
      <CustomButton title="Press Me" onPress={onPressMock} filled />
    );
    const button = getByText('Press Me');
    expect(button).toBeDefined();

    fireEvent.press(getByTestId('custom-button')); // assuming you add a testID to TouchableOpacity
    expect(onPressMock).toHaveBeenCalled();
  });

  // Add more tests as needed
});