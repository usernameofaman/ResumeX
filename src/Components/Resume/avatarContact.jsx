import React from "react";
// Icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
import Progress from '../common/progress'

const AnchorLinks = styled.a`
    text-decoration: none;
    cursor: pointer;
    width:"100%";
    color:white;
    transition: 0.3s;

`

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    width: "60%",
    height: "1000px",
    padding: "0px 10px 0px 0px",
  },
  gitButton: {
    width: "100%",
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
    fontSize: "14px",
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
  border-radius: 5px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover{
    box-shadow:9px 9px 18px #2b384a,-9px -9px 18px #3b4c64;
    color:white;
  }
`;
const SkillsSection = styled.div`
  margin-top: 30px;
  padding-right: 10px;
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
            Vidisha, MP
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
                defaultZoom={8}
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




            <FlexRow className={classes.gitButton}>
              <Button type="button" className={`${classes.f12} ${classes.button}`}  >
                <GitHubIcon style={{ width: "20px", marginLeft: "3px" }} />
                <Typography style={{ marginLeft: "10px" }} className={classes.f12}>
                <AnchorLinks href="https://github.com/usernameofaman" target="_blank">
                  Github
                  </AnchorLinks>
                </Typography>
              </Button>
            </FlexRow>



        <FlexRow>
          <LinkedInIcon />
          <Typography style={{ marginLeft: "10px" }} className={classes.f12}>
            <AnchorLinks href="https://linkedin.com/in/usernameofaman" target="_blank">
              LinkedIn
            </AnchorLinks>
          </Typography>
        </FlexRow>
      </ContactSection>
      <SkillsSection>
        ReactJS
        <Progress max={80} />

        NodeJS
        <Progress max={75} />

        AWS Lamda Functions
        <Progress max={65} />

        Firebase
        <Progress max={50} />

        Frontend/UI/UX
        <Progress max={75} />

        API Integration
        <Progress max={85} />

        C++ / Java
        <Progress max={60} />

      </SkillsSection>


    </div>
  )
}
