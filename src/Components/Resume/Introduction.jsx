import React from 'react'
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typewriter from 'typewriter-effect';
import Expandable from '../common/expandable'
import GitHubComponent from "./GitHub"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const ProjectBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  width: 90%;
  padding: 25px 20px 25px 20px;
  position: relative;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover{
    /* border-radius: 24px; */
background: #e6e6e6;
box-shadow:  9px 9px 18px #c4c4c4,
             -9px -9px 18px #ffffff;
  }
`;


const ClickTrick = styled.div`
  position:fixed;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,0.5);
`

const ClickAwayBox = styled.div`
  display: flex;
  width: 50%;
  background-color: #e6e6e6;
  border-radius: 5px;
  /* position: relative; */
`

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
    display: flex;
    align-items: center;
    height: 30px;

`
const AboutMe = styled.div`
    font-family: 'Raleway', sans-serif;
    margin-top: 10px;
    width: 100%;
    min-height:80px;
`
const WorkExperience = styled.div`
    font-family: 'Raleway', sans-serif;
    margin-top: 20px;
    width: 100%;
`
const CompanyTitle = styled.span`
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    /* width: 100%; */
`
const ProfileTitle = styled.div`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    margin-left: 10px;
    display: flex;
`
const WorkDetails = styled.div`
    display:flex;
    /* width:100%; */
`
const ProfileDetails = styled.div`
    /* display:flex; */
    width:100%;
    text-align: justify;
`
const AnchorLinks = styled.a`
    text-decoration: none;
    cursor: pointer;
    color:#334257;
    transition: 0.3s;
    &:hover{
        font-size: 16.4px;
    }
`
const AnchorLinkTitle = styled.a`
    text-decoration: none;
    cursor: pointer;
    color:#334257;
    transition: 0.2s;
    &:hover{
        font-size: 22px;
    }
`
const MiniIcons = styled.img`
    width: 20px;
    margin-left: 8px;
`

const useStyles = makeStyles((theme) => ({
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
    tabsLeft: {
        height: "130px",
        textTransform: "none",
        fontSize: "13px"
    },
    tabsRight: {
        width: 540,
    },
    toggle: {
        // width:50,
        '& .Mui-checked': {
            color: '#43556e',
            transform: 'translateX(25px) !important'
        },
        '& .MuiSwitch-track': {
            backgroundColor: '#434446'
        }
    },
}))

export default function Introduction() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // CheckBox Handlers
    const [state, setState] = React.useState({
        checkedB: false,
    });

    const handleSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    // Projects
    const [github, setGithub] = React.useState(false);

    const handleClickAwayEvent = () => {
        setGithub(false);
    };

    const handleClickEvent = () => {
        setGithub((prev) => !prev);
    };
    return (
        <>
            <Header>
                <Name variant="h1">Aman<Lastname>Sharma</Lastname></Name>
                <Title>
                    <AnchorLinkTitle href="https://www.mongodb.com/mern-stack" target="_blank">
                        MERN STACK DEVELOPER
                    </AnchorLinkTitle>
                    <MiniIcons src="/images/react.svg" />
                    <MiniIcons src="/images/nodejs.svg" />
                </Title>
                <AboutMe>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.changeDelay("40") 
                            .typeString(`
                    My name is Aman Sharma, I am having 1+ years of experience as Full Stack Developer.
                    I started my programming journey with C++, where I got to learn the fundamentals.
                    Currently I am working as a MERN Stack Developer. I like developing front-end,
                    as I love when I can visually express my work.
                    `)
                     .pauseFor(2500)
                            .start();
                        }}
                    /> 
                </AboutMe>
            </Header>
            <WorkExperience>
                <FormGroup row>
                    <FormControlLabel
                        // value="start"
                        // control={<Switch color="primary" />}
                        // label="Start"
                        // labelPlacement="start"
                        control={
                            <Switch
                                checked={state.checkedB}
                                onChange={handleSwitch}
                                name="checkedB"
                                color="primary"
                                className={classes.toggle}
                            />
                        }
                        label={state.checkedB ? "Education" : "Work Experience"}
                    />
                </FormGroup>

                <Divider className={classes.divider} />
                {!state.checkedB ?
                    <div className={classes.navigation}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                            TabIndicatorProps={{ style: { background: '#334257' } }}
                        >
                            <Tab className={classes.tabsLeft} label="2021.05 - Date.now()" {...a11yProps(0)} />
                            <Tab className={classes.tabsLeft} label="2020-2021" {...a11yProps(1)} />
                            <Tab className={classes.tabsLeft} label="2020-2020" {...a11yProps(2)} />
                        </Tabs>
                        <TabPanel className={classes.tabsRight} value={value} index={0}>
                            <WorkDetails>
                                <CompanyTitle>
                                    <AnchorLinks href="https://www.leewayhertz.com/" target="_blank">
                                        LEEWAYHERTZ TECHNOLOGIES -
                                    </AnchorLinks>
                                </CompanyTitle>
                                <ProfileTitle> Full Stack Developer </ProfileTitle>
                            </WorkDetails>
                            <ProfileDetails>
                                Working as Frontend Developer on ReactJS and as Backend Developer on NodeJs.<br />
                                <div style={{ display: "flex", width: "100%", justifyContent: 'space-between' }}>
                                    <div>
                                        <b>Development</b>
                                        <Expandable
                                            list={["UI / UX", "API Integration"]}
                                            default={["ReactJS", "Material UI", "Styled Components"]}
                                            icons={[<MiniIcons src="/images/ux-design.png" />,]}
                                        />
                                        <b>Project Management</b>
                                        <ul>
                                            <li> Jira</li>
                                            <li> Confluence</li>
                                            <li> Bitbucket/Github</li>
                                        </ul>

                                    </div>
                                    <div>
                                        <b>Deployment</b>
                                        <Expandable
                                            list={["AWS Lamda Functions"]}
                                            default={["AWS EC2/ECS", "Jenkins", "Firebase"]}
                                            icons={[<MiniIcons src="/images/backend.png" />]}
                                        />
                                        <b>Database</b>
                                        <ul>
                                            <li> MongoDB</li>
                                            <li> Amazon DocumentDB</li>
                                            <li> SQL</li>
                                        </ul>
                                    </div>
                                </div>

                            </ProfileDetails>
                        </TabPanel>
                        <TabPanel className={classes.tabsRight} value={value} index={1}>
                            <WorkDetails>
                                <CompanyTitle>
                                    <AnchorLinks href="https://www.xebdot.com/" target="_blank">
                                        XEBDOT TECHNOLOGIES -
                                    </AnchorLinks>
                                </CompanyTitle>
                                <ProfileTitle> MERN Stack Trainee </ProfileTitle>
                            </WorkDetails>
                            <ProfileDetails>
                                This is where I started my journey as MERN stack developer. I started with ReactJS UI developer
                                It was an amazing kickstart as I got to see my work visually and loved working on JSX with JavaScript<br />
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <b>Development</b>
                                        <ul>
                                            <li> ReactJS / JSX / TS</li>
                                            <li> Material UI</li>
                                            <li> Styled Components</li>
                                        </ul>
                                        <b>Deployment</b>
                                        <ul>
                                            <li> AWS EC2/ECS</li>
                                            <li> Jenkins</li>
                                            <li> AWS Lamda Functions</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <b>Project Management</b>
                                        <ul>
                                            <li> Jira</li>
                                            <li> Confluence</li>
                                            <li> Bitbucket/Github</li>
                                        </ul>
                                        <b>Database</b>
                                        <ul>
                                            <li> MongoDB</li>
                                            <li> Amazon DocumentDB</li>
                                            <li> SQL</li>
                                        </ul>
                                    </div>
                                </div>


                            </ProfileDetails>
                        </TabPanel>
                        <TabPanel className={classes.tabsRight} value={value} index={2}>
                            <WorkDetails>
                                <CompanyTitle>Amazon Development Center -</CompanyTitle>
                                <ProfileTitle> VOTS Technical Support </ProfileTitle>
                            </WorkDetails>
                            <ProfileDetails>
                                I know this is not relative to my profile and definately not what you might be looking for,
                                but this is the first time I experienced corporate culture. During hard times of Covid, I wanted to invest
                                my time somewhere productive. As colleges were off, and Amazon is such a big name, I explored a
                                lot there. Learned work ethics. Here are my takeaways from this time :
                                <ul>
                                    <li>Persuasive Communication skills</li>
                                    <li>Work ethics</li>
                                    <li>Empath</li>
                                    <li>Patience</li>
                                    <li>Self-Control.</li>
                                </ul>
                            </ProfileDetails>
                        </TabPanel>
                    </div> : ""}
                {state.checkedB ?
                    <div className={classes.navigation}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                            TabIndicatorProps={{ style: { background: '#334257' } }}
                        >
                            <Tab className={classes.tabsLeft} label="2021.05 - Date.now()" {...a11yProps(0)} />
                            <Tab className={classes.tabsLeft} label="2020-2021" {...a11yProps(1)} />
                            <Tab className={classes.tabsLeft} label="2020-2020" {...a11yProps(2)} />
                        </Tabs>
                        <TabPanel className={classes.tabsRight} value={value} index={0}>
                            <WorkDetails style={{ flexDirection: "column" }}>
                                <CompanyTitle>
                                    <AnchorLinks href="https://lnct.ac.in/" target="_blank">
                                        Lakshmi Narayan College of Technology, Bhopal
                                    </AnchorLinks>
                                </CompanyTitle>
                                <ProfileTitle style={{ marginLeft: "0" }}>Masters of Computer Application </ProfileTitle>
                            </WorkDetails>
                            <ProfileDetails>
                                Completed Masters with 9.2 CGPA and participated in various events and hackathons during
                                my two years masters journey. I learned about <b> Algorithm and Design, System Design,
                                    Data Structures, Automata, Computer Networking and much more.</b> Due to covid, I had enourmous
                                time in my hand, which I utilized to refine my skills on the topics and practical implementation
                                of Web Developement.

                                <br />
                                <div>
                                    <b>Certifications</b>
                                    <ul>
                                        <li>
                                            <AnchorLinks href="https://googlecloudcertified.credential.net/profile/d91945ea426f998f6e4c53868a6f4971d358026e" target="_blank">

                                                Google Cloud Certified - Associate Cloud Engineer
                                            </AnchorLinks>
                                        </li>
                                        <li>
                                            <AnchorLinks href="https://drive.google.com/file/d/12pb8YWWOtGl5VhZcMUcgTiBQR5e6gaqZ/view" target="_blank">

                                                Smart India Hackathon
                                            </AnchorLinks>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <b>Projects</b>
                                    <ul>
                                        <li>
                                            PlacementBuddy - Interactive study material web app for placement.
                                            created with <b> Django-Python, HTML CSS.</b>
                                        </li>
                                        <li>
                                            Feeders - E-FoodDonation web app, can take request from user to pick up
                                            food from his/her location.<b> Android App with Android Studio, Java.</b>
                                        </li>
                                    </ul>
                                </div>
                            </ProfileDetails>
                        </TabPanel>
                        <TabPanel className={classes.tabsRight} value={value} index={1}>
                            <WorkDetails style={{ flexDirection: "column" }}>
                                <CompanyTitle>
                                    <AnchorLinks href="https://www.xebdot.com/" target="_blank">
                                        Maharana Pratap College, Vidisha
                                    </AnchorLinks>
                                </CompanyTitle>
                                <ProfileTitle style={{ marginLeft: "0" }}>Bachelor of Computer Application</ProfileTitle>
                            </WorkDetails>
                            <ProfileDetails>
                                There is nothing much to tell about my graduation, Though I did learn about
                                <b> Fundamentals of Computers, Operating Systems ,Multimedia Systems,
                                    Understanding Organisational Behaviour, Data and Database Management Systems, Web-Based Application Development
                                    Computer Lab and Practical Work </b>
                                here while doing my graduation.
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <b>Development</b>
                                        <ul>
                                            <li> ReactJS / JSX / TS</li>
                                            <li> Material UI</li>
                                            <li> Styled Components</li>
                                        </ul>
                                        <b>Deployment</b>
                                        <ul>
                                            <li> AWS EC2/ECS</li>
                                            <li> Jenkins</li>
                                            <li> AWS Lamda Functions</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <b>Project Management</b>
                                        <ul>
                                            <li> Jira</li>
                                            <li> Confluence</li>
                                            <li> Bitbucket/Github</li>
                                        </ul>
                                        <b>Database</b>
                                        <ul>
                                            <li> MongoDB</li>
                                            <li> Amazon DocumentDB</li>
                                            <li> SQL</li>
                                        </ul>
                                    </div>
                                </div>


                            </ProfileDetails>
                        </TabPanel>
                        <TabPanel className={classes.tabsRight} value={value} index={2}>
                            <WorkDetails>
                                <CompanyTitle>LEEWAYHERTZ TECHNOLOGIES -</CompanyTitle>
                                <ProfileTitle> Full Stack Developer </ProfileTitle>
                            </WorkDetails>
                        </TabPanel>
                    </div> : ""}
            </WorkExperience>
            <WorkExperience>
                <Title>Certifications</Title>
                <li>
                    <AnchorLinks href="https://googlecloudcertified.credential.net/profile/d91945ea426f998f6e4c53868a6f4971d358026e" target="_blank">

                        Google Cloud Certified - Associate Cloud Engineer
                    </AnchorLinks>
                </li>
                <li>
                    <AnchorLinks href="https://drive.google.com/file/d/12pb8YWWOtGl5VhZcMUcgTiBQR5e6gaqZ/view" target="_blank">

                        Smart India Hackathon
                    </AnchorLinks>

                </li>
                <li>
                    <AnchorLinks href="https://drive.google.com/file/d/19b1ZDG6v4ydH7CaoPNB3qP0_yEQpMqHN/view?" target="_blank">

                        Smart Campus Hackathon
                    </AnchorLinks>

                </li>
            </WorkExperience>
            <WorkExperience>
                {github && <ClickTrick></ClickTrick>}
                <ClickAwayListener onClickAway={handleClickAwayEvent}>
                    <div style={{ width: "100%" }}>
                        <ProjectBox className={classes.gitButton} onClick={handleClickEvent}>
                            PROJECTS >>>>>>>>>>>>>>>>>>
                        </ProjectBox>
                        {github ? (
                            <ClickAwayBox>
                                <GitHubComponent />
                            </ClickAwayBox>
                        ) : null}
                    </div>
                </ClickAwayListener>
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