import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const CommonButton = styled(Button)(() => ({
  color: "#FFFFFF",
  backgroundColor: "#EB820F",
  borderRadius: "20px",
  textTransform: "capitalize",
  maxWidth:"200px",
  textAlign: "center",
  minHeight: "15px",
  maxHeight: "40px",
  "&:hover": {
    backgroundColor: "#EB820F",
    boxShadow: "none",
    color: "#FFFFFF",
  },
  "@media (max-width: 900px)": {
    maxWidth: "150px",
    marginTop: "0px",
    maxHeight: "20px",
    fontSize:'12px'
  },
  "@media (max-width: 1200px)": {
    
    marginTop: "0px",
    maxHeight: "30px",
  },
  "@media (max-width: 600px)": {
    maxWidth: "125px",
    marginTop: "0px",
  },
  "@media (max-width: 400px)": {
    maxWidth:'120px'
  },
}));
