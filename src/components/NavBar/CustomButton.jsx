import { styled } from '@mui/material'
import Button from "@mui/material/Button";

export default function CustomButton({ children }) {
   const StyledButton = styled(Button)({
     border: "1px solid",
     boxShadow: "black 4px",
     borderColor: "black"
   });
  return (
    <StyledButton className="w-60 h-8" disableRipple={true}>{ children }</StyledButton>
  )
}
