import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const CardList = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  columnGap: theme.spacing(2),
  rowGap: theme.spacing(2),
  flexWrap: "wrap",
  [theme.breakpoints.between("xs", "sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
