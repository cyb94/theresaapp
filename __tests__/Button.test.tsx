// __tests__/Button.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../src/Components/Button';

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    colors: {
      sys: {
        primary: 'blue',
        onPrimary: 'white',
        onSurface: 'gray',
      },
    },
  }),
}));

describe('Button Component', () => {
  it('should render a button with a label', () => {
    const {getByText} = render(<Button label="Click Me" onPress={() => {}} />);
    const buttonLabel = getByText('Click Me');
    expect(buttonLabel).toBeTruthy();
  });

  it('should trigger onPress when clicked', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button label="Click Me" onPress={onPressMock} />,
    );
    const button = getByText('Click Me');

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should disable the button when disabled prop is true', () => {
    const {getByText} = render(
      <Button label="Disabled" onPress={() => {}} disabled={true} />,
    );
    const button = getByText('Disabled');
    expect(button).toBeDisabled();
  });

  it('should apply label style when labelStyle is passed', () => {
    const {getByText} = render(
      <Button
        label="Styled Label"
        onPress={() => {}}
        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
      />,
    );
    const buttonLabel = getByText('Styled Label');
    expect(buttonLabel.props.style.fontSize).toBe(20);
    expect(buttonLabel.props.style.fontWeight).toBe('bold');
  });
});
