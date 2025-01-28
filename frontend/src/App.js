import React, { useState } from 'react';
import './App.css';
import { Button, TextField, Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppTheme } from './theme';

function Summer(){
  const [inputNumber, setInputNumber] = useState('');
  const [value, setValue] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  function onSubmitSend(e){
    e.preventDefault();
    fetch(`/sum?upto=${inputNumber}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setSuccess(data.success);
        setValue(data.value);
        setError(data.error);
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <Box className="summer" sx={{ 
      '& > form': { m: 2 },
      '& .MuiTextField-root': { 
        bgcolor: 'background.paper',
        borderRadius: 1
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <form onSubmit={onSubmitSend}>
        <TextField 
          name="myInput"
          label="Enter number"
          variant="outlined"
          sx={{ mr: 2 }}
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          type="number"
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
        >
          Calculate Sum
        </Button>
      </form>
      {success && (
        <Typography 
          variant="h4" 
          sx={{ mt: 2 }}
          color="primary"
        >
          Sum: {value}
        </Typography>
      )}
    </Box>
  )
}

function App() {
  const { theme, mode, toggleColorMode } = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        bgcolor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <IconButton 
          onClick={toggleColorMode} 
          sx={{ 
            position: 'absolute', 
            top: 16, 
            right: 16,
            color: 'text.primary'
          }}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <header>
          <Typography 
            variant="h3" 
            color="primary" 
            sx={{ mb: 2, textAlign: 'center' }}
          >
            Arithmetic Progression Summation
          </Typography>
          <Summer/>
        </header>
      </Box>
    </ThemeProvider>
  );
}

export default App; 