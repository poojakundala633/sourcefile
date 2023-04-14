import { Typography } from "@mui/material";

export interface TypographyProps{
   variant?:|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'body1'|'body2'|'button'|'caption';
   children:React.ReactNode;
}
const MuiTypography=(props:TypographyProps) => {
   return(
       <div>
      <Typography variant={props.variant}>{props.children}</Typography>
     </div>
   )
   };
export default MuiTypography;
