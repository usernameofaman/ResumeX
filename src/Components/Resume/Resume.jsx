import React from "react";
// Icons
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// Styled Components
import styled from "styled-components";
import Avatar from "./avatarContact"
import Introduction from "./Introduction";
import Slide from '../common/slide'




const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    width: "1000px",
    height: "1000px",
    minWidth: "1000px",
    padding: "0px 0px 0px 0px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
    display: "flex",
    width: "100%",
    height: "1000px",
    padding: "0px 10px 0px 0px",
  },
  f12: {
    fontSize: "12px",
    textTransform: "none"
  },
  button: {
    color: "white",
    padding: "0",
  },
  addressPop: {
    padding: "5px",
    textAlign: "center"
  },
});

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #548CA8;
  padding-top: 20px;
  /* @media(max-width:1200px){
    display:none;
  } */
`;
const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 230px;
  min-width: 230px;
  height: 100%;
  background-color: #334257;
  color: #e9e8e8;
`;
const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EEEEEE;
  padding: 0px 70px 0px 35px;
  /* width: 70%; */
`
const Information = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right:100px;
`

const AltMessage = styled.div`
  display:none;
  font-family: 'Raleway, sans-serif';
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  height: 500px;
  width: 100%;
  /* @media(max-width:1200px){
    display:flex;
  } */
`

export default function Tasker() {
  const classes = useStyles();


  return (
    <>
    <MainContainer>
      <Information>
        <Slide />
      </Information>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <LeftPanel>
              <Avatar />
            </LeftPanel>
            <RightPanel>
              <Introduction />
            </RightPanel>
          </CardContent>
        </Card>
    </MainContainer>
    <AltMessage>
      The Content can only be viewed on <p> Large Screen Devices</p> <p>  i.e. Laptop/Desktop</p>
    </AltMessage>
    </>
  );
}



