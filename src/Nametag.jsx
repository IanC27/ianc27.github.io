import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material';

export const NameTag = styled(Paper)(() => ({
    "fontSize":"1em",
    "padding":"0.5em",
    "display":"block",
    "textAlign":"left",
    "width":300,
    "height":"40%",
    "backgroundColor":"white",
    "backgroundImage":"linear-gradient(#43714a 40%, white 40.5%, white 95%, #43714a 95.5%)",
    "color":"white",
    "border":"",
    "borderRadius":"15pt",
    "marginBottom": 10,
    "transform": "rotate(-2deg)"
  }));
