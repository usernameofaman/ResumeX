import React from 'react'
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";


const useStyles = makeStyles({
  card: {
    position: "fixed",
    padding: "10px",
    minWidth: 775,
    minHeight: 600,
    backgroundColor: "#ffffff",
    zIndex: "10",
    top: 130,
    bottom: 130,
    left: 130,
    right: 130,
  },
});

const Container = styled.div`
  background-color: #161618;
  width:100%;
  height:100%;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
`
const Project = styled.div`
  width:80%;
  display:flex;
  flex-direction: column;
  /* height:100%; */
  color: #e4e4e4;
  padding:30px 0px 0px 30px;
`
const Title = styled.div`
  width:60%;
  min-width: 650px;
  padding:10px 10px 10px 10px;
  font-size:30px;
  font-weight: 600;
  display: flex;
  align-items: baseline;
  color:  #000000;
  background-color: white;
`
const SubHeading = styled.div`
  font-size:20px;
  font-weight: 300;
  margin-left: 20px;
`
const AnchorLinks = styled.a`
    text-decoration: none;
    cursor: pointer;
  color: #000000;

    transition:color 0.3s;
    &:hover{
        color: #a0a0a0
    }
`
const Details = styled.div`
    font-size:18px;
    margin-top: 20px;
    width:900px;
`
const GitBackDrop = styled.img`
    position:absolute ;
    right:50px;
    top:0px;
    width: 400px;
    z-index: 0;
    opacity: 10%;
`
const Firebase = styled.img`
    position:absolute ;
    right:50px;
    top:200px;
    width: 400px;
    z-index: 0;
    opacity: 10%;
`


export default function GitHub() {
  const classes = useStyles();

  return (

    <Card className={classes.card}>
      <Container>
        <GitBackDrop src="/images/gitback.png"/>
        <Firebase src="/images/firebase.png"/>

        <Project>
          <Title>
            <AnchorLinks href="https://github.com/usernameofaman/Chiranjeevi-Dashboard" target="_blank">Hospital Billing Management</AnchorLinks>
            <AnchorLinks href="https://chiranjeevi-dashboard.web.app/" target="_blank"><SubHeading> - Chiranjeevi Hospital</SubHeading></AnchorLinks>
          </Title>
          <Details>
            This is the project designed for a hospital which needs to manage their daily patients
            walk-ins. Manage their entry forms, Discharge papers, Active Patient List, Bill Generation.
          </Details>
          <Details>
            Build with <b>ReactJS and Firebase</b>. As this project requirements did not need any backend, We went
            with firebase. Compact and minimal webapp. UI created with <b>Material-UI, styled-components.</b>

          </Details>
        </Project>
        <Project>
          <Title>
            <AnchorLinks href="https://github.com/usernameofaman/FoodOrderDemo" target="_blank">Food Ordering App Demo</AnchorLinks>
            <AnchorLinks href="https://github.com/usernameofaman/FoodOrderDemo" target="_blank"><SubHeading> Mini Project</SubHeading></AnchorLinks>
          </Title>
          <Details>
            This mini project gives a slight hint of my skills related to ReactJS Hooks, Redux and UI.
          </Details>
          <Details>
            Build with <b>ReactJS Only</b>

          </Details>
        </Project>
        <Project>
          <Title>
            <AnchorLinks href="https://github.com/usernameofaman/ResumeX" target="_blank">Dynamic Resume</AnchorLinks>
            <AnchorLinks href="https://projectresumex.netlify.app/" target="_blank"><SubHeading> Personal Project</SubHeading></AnchorLinks>
          </Title>
          <Details>
            This idea originated when I wanted to create interesting resume for myself, where i could show my abilities more
            intuitively. So here it is, You are currently browsing on this, and I really believe that you can really see a glimse
            of what I am capable of.
          </Details>
          <Details>
            Build with <b>ReactJS and various other support JS Libraries</b>
          </Details>
        </Project>
      </Container>
    </Card>

  )
}
