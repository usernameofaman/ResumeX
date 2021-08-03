import React from 'react'
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
// import styled from "styled-components";


const useStyles = makeStyles({
    card: {
      position:"fixed",
      minWidth: 775,
      minHeight:600,
      backgroundColor:"#ffffff",
      zIndex:"10",
      top:130,
      bottom:130,
      left:130,
      right:130,
    },
});

export default function GitHub() {
  const classes = useStyles();

    return (
        
            <Card className={classes.card}>
            </Card>
       
            )
}
