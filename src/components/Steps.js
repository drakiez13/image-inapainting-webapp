import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({ value, setValue }) {
    // const [value, setValue] = React.useState(
    //     30,
    // );

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div className='steps-container'>
            <Box>
                <label className='steps-label label'>steps</label>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 10,
                                min: 10,
                                max: 250,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            min={10}
                            max={250}
                        />
                    </Grid>
                </Grid>
                <p className='steps-text'>Reduce the total number of steps (without resampling) for faster inference. The lower it is, the more noise gets removed per step. (minimum: 10; maximum: 250)</p>
            </Box>
        </div>
    );
}