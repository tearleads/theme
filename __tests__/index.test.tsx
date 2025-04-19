import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import {ThemeProvider} from '@mui/material/styles';
import { darkTheme, lightTheme } from '../index';

const TestComponent = () => {
  const theme = useTheme();
  return <div data-testid="theme-test">{JSON.stringify(theme)}</div>;
};
import { useTheme } from '@mui/material/styles';

describe('Theme', () => {
  it('should mount the dark theme successfully', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={darkTheme}>
        <TestComponent />
      </ThemeProvider>
    );
    
    const themeElement = getByTestId('theme-test');
    expect(themeElement).toBeDefined();
    expect(themeElement.textContent).not.toBe('');
  });
  it('should mount the light theme successfully', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <TestComponent />
      </ThemeProvider>
    );
    
    const themeElement = getByTestId('theme-test');
    expect(themeElement).toBeDefined();
    expect(themeElement.textContent).not.toBe('');
  });
});
