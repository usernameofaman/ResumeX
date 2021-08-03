import React from "react";
// Icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import GitHubIcon from '@material-ui/icons/GitHub';
// Material UI
// import { withStyles } from "@material-ui/core/styles";
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// Google Map
import GoogleMapReact from 'google-map-react';
// Styled Components
import styled from "styled-components";
import GitHubComponent from "./GitHub"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    width: "60%",
    height: "1000px",
    padding: "0px 10px 0px 0px",
  },
  gitButton:{
    width:"100%",
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
    height: "100%",
  },
  addressPop: {
    padding: "5px",
    textAlign: "center"
  },
}));



const PhotoContainer = styled.div`
  height: 130px;
  width: 130px;
  margin: 30px 50px 30px 0px;
`;
const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  /* filter: grayscale(10); */
`;
const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0px;
`;
const Line = styled.hr`
  width: 175px;
  margin-left: 0px;
  margin-top: 0px;
`;
const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 0px 5px 0px;
  position: relative;
  height: 30px;
  &:hover{
    box-shadow:9px 9px 18px #2b384a,-9px -9px 18px #3b4c64;
    color:white;
  }
`;
const SkillsSection = styled.div`
  margin-top: 30px;
`
const SkillBoxOuter = styled.div`
  border: 1px solid #ffffff;
  display: flex;
  justify-content: flex-start;
  height: 20px;
  margin: 8px 10px 10px 0px;
`
const SkillBoxInner = styled.div`
  background-color: #ffffff;
  height: 80%;
  margin: 2px 2px 2px 2px;
`


const Map = ({ text }) => <div>{text}</div>;

export default function AvatarContact() {
  const classes = useStyles();
  // Address Pop Over
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    if (anchorEl === event.currentTarget) {
      console.log("Target")
      setAnchorEl(null)
    } else setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // GitHub PopOver
  const [github, setGithub] = React.useState(false);

  const handleClickAwayEvent = () => {
    setGithub(false);
  };

  const handleClickEvent = () => {
    setGithub((prev) => !prev);
  };


  return (
    <div>
      <PhotoContainer>
        <ProfilePicture src="/images/profile_3.jpg" alt="profile" />
      </PhotoContainer>
      <ContactSection>
        <Typography>Contact</Typography>
        <Line></Line>
        <FlexRow onClick={handleClick} >
          <Button className={`${classes.f12} ${classes.button}`} aria-controls="simple-menu" aria-haspopup="true" >
            <LocationOnIcon />
            Vidisha, Madhya Pradesh
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClick={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            className={classes.addressPop}
          >
            <Typography className={classes.addressPop}>37, Krishna Colony,<br /> Durga Nagar Main Road, Vidisha</Typography>
            <div style={{ height: '200px', width: '250px' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDzt1WeHjdV6czUufVqhvhLw7XGfgYZ5iU" }}
                defaultCenter={{ lat: 23.525110, lng: 77.808136 }}
                defaultZoom={11}
              >
                <Map
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </Popover>
        </FlexRow>
        <FlexRow>
          <PhoneAndroidIcon />
          <Typography className={classes.f12}>+91-9827858545</Typography>
        </FlexRow>

        {github && <ClickTrick></ClickTrick>}


        <ClickAwayListener onClickAway={handleClickAwayEvent}>
          <div style={{width:"100%"}}>
            <FlexRow className={classes.gitButton} onClick={handleClickEvent}>
              <Button   type="button" className={`${classes.f12} ${classes.button}`}  >
                <GitHubIcon  style={{ width: "20px", marginLeft: "3px" }} />
                <Typography style={{ marginLeft: "10px" }} className={classes.f12}>
                  Github
                </Typography>
              </Button>
            </FlexRow>
            {github ? (
              <ClickAwayBox>
                <GitHubComponent />
              </ClickAwayBox>
            ) : null}
          </div>
        </ClickAwayListener>



        <FlexRow>
          <LocationOnIcon />
          <Typography className={classes.f12}>
            Vidisha, Madhya Pradesh
          </Typography>
        </FlexRow>
      </ContactSection>
      <SkillsSection>
              ReactJS
          <SkillBoxOuter>
            <SkillBoxInner style={{width: "90%"}}/>
          </SkillBoxOuter>
              NodeJS
          <SkillBoxOuter>
            <SkillBoxInner style={{width: "70%"}}/>
          </SkillBoxOuter>
              AWS Lamda Functions
          <SkillBoxOuter>
            <SkillBoxInner style={{width: "80%"}}/>
          </SkillBoxOuter>
              C++ / Java
          <SkillBoxOuter>
            <SkillBoxInner style={{width: "60%"}}/>
          </SkillBoxOuter>
      </SkillsSection>


    </div>
  )
}
