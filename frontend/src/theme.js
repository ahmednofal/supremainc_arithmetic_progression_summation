import { createTheme } from '@mui/material/styles';
import { useState, useMemo } from 'react';

export function useAppTheme() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#f5f5f5',
            paper: mode === 'dark' ? '#1e1e1e' : '#fff',
          },
          text: {
            primary: mode === 'dark' ? '#fff' : '#333',
            secondary: mode === 'dark' ? '#aaa' : '#666',
          },
        },
      }),
    [mode],
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return { theme, mode, toggleColorMode };
} 