import { Box } from "@mui/material";
import {styled} from "@mui/system";

const userImage = ({image,size="60px"}) => {
    return(
        <Box width={size} height={size}>
            <img
                style={{objectFit:"cover",borderRadius:"50%"}}
                width={size} height={size}
                alt="user"
                src={`https://localhost:3001/assets/${image}`}
            />
        </Box>
    )
}