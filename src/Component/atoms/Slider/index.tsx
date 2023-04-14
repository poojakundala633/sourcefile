import React from 'react';
import { Slider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type SliderProps = {
  defaultValue: number;
  max: number;
  step: number;
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#9747FF',
    },
  },
});

const SliderCom = ({ defaultValue, max, step }: SliderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: 250, height: 200, margin: 30 }}>
        <Slider
          defaultValue={defaultValue}
          max={max}
          step={step}
          sx={{
            '& .MuiSlider-root': {
              height: '20px',
            },
            '& .MuiSlider-thumb': {
              borderRadius: '20%',
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default SliderCom;
