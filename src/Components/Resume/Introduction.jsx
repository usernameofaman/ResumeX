import React from 'react'
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


const Header = styled.div`
    display: flex;
    color: #334257;
    flex-direction: column;
    padding: 40px 0px 30px 0px;
`
const Name = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 70px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
`
const Lastname = styled.div`
    font-weight: 300;
    margin-left: 20px;
`
const Title = styled.div`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 20px;

`
const AboutMe = styled.div`
    font-family: 'Raleway', sans-serif;
    margin-top: 30px;
    width: 100%;
`
const WorkExperience = styled.div`
    font-family: 'Raleway', sans-serif;
    margin-top: 20px;
    width: 100%;
`
const CompanyTitle = styled.span`
    font-family: 'Raleway', sans-serif;
    margin-top: 20px;
    font-weight: 400;
    width: 100%;
`
const ProfileTitle = styled.span`
    font-family: 'Raleway', sans-serif;
    margin-top: 20px;
    font-weight: 400;
    width: 100%;
`
const WorkDetails = styled.div`
    display:flex;
    width:100%
`


const useStyles = makeStyles((theme) =>({
    divider: {
        backgroundColor: "#334257",
        marginTop: "5px",
    },
    navigation: {
        flexGrow: 1,
        backgroundColor: "transparent",
        display: 'flex',
        height: 390,
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        // width: 130,
      },
      tabsLeft:{
          height: "130px",
          textTransform: "none",
      },
}))

export default function Introduction() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
            <Header>
                <Name variant="h1">Aman<Lastname>Sharma</Lastname></Name>
                <Title>MERN STACK DEVELOPER</Title>
                <AboutMe>
                    My name is Aman Sharma, I am a Full Stack Developer. I started my programming
                    journey with C++, where I got to learn the fundamentals. Currently I am working
                    as a MERN Stack Developer. I like developing front-end, as I love when I can visually
                    express my work.
                </AboutMe>
            </Header>
            <WorkExperience>
                WORK EXPERIENCE
                <Divider className={classes.divider} />
                <div className={classes.navigation}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                        TabIndicatorProps={{style: {background:'#334257'}}}
                    >
                        <Tab className={classes.tabsLeft} label="2021- Date.now()" {...a11yProps(0)} />
                        <Tab className={classes.tabsLeft} label="2020-2021" {...a11yProps(1)} />
                        <Tab className={classes.tabsLeft} label="" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <WorkDetails>
                            <CompanyTitle>LEEWAYHERTZ TECHNOLOGIES -</CompanyTitle> 
                            <ProfileTitle> Full Stack Developer </ProfileTitle>
                        </WorkDetails>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </div>

            </WorkExperience>
        </>


    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }