
import React from 'react'
import SliderCom from '../../atoms/Slider';
import MuiTypography from '../../atoms/Typography';
import Button from '../../atoms/Buttton/Index';
import {styled} from '@mui/material';

const StyleSlider = styled('div')({
    height:"60px"
})

export const MuiSlider = styled('div')({
    width: "100px",
            height: "22px",
            
            /* body 1 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "140%",
            /* or 22px */
            
            
            /* text/low emp */
            
            color: "#A5A5A6",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "0",
            flexGrow: "1",
})

const StyledText = styled('div')({
    width: "100px",
    height: "22px",
    
    /* body 1 */
    
    fontFamily: 'Gilroy',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "140%",
    /* or 22px */
    
    
    /* Primary/purple/400 */
    
    color: "#B4A9FF",
    
    
    /* Inside auto layout */
    
    flex: "none",
    order: "2",
    alignSelf: "stretch",
    flexGrow: "0",
})


type SliderProps = {
  defaultValue: number;
  max: number;
  step: number;
};

const Slider_Change = () => {
  return (
    <div>
      <div style={{display:"flex"}}>
        <MuiSlider>
          <MuiTypography variant="body1">Slide to autoselect</MuiTypography>
        </MuiSlider>


        <Button variant='contained' sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "6px 12px",
                    gap: "8px",                    
                    width: "85px",
                    height: "31px",
                    
                    marginRight:'15px',
                    
                    /* background/elevation 2 */
                    
                    background: "#2D2D30",
                    borderRadius: "12px",
                    color:'#413F4D',
                    '&:hover': {
                        background: 'transparent', /* change background color on hover */
                      },
                    
                    /* Inside auto layout */
                    
                    flex: "none",
                    order: "1",
                    flexGrow: "0",
        }}>Reset</Button>
      </div>
    <StyleSlider>
      <SliderCom defaultValue={0} max={100} step={20}></SliderCom>
    </StyleSlider>

 
    <StyledText style={{width:"500px"}}>
    <MuiTypography variant='body1'> $0.00 selected of  $888,000.00</MuiTypography>               
    </StyledText>
   
</div>
   
  )
}

export default Slider_Change
