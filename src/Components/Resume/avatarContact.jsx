import React from "react";
// Icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import GitHubIcon from '@material-ui/icons/GitHub';
// Material UI
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
// Google Map
import GoogleMapReact from 'google-map-react';
// Styled Components
import styled from "styled-components";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "60%",
    height: "1000px",
    padding: "0px 10px 0px 0px",
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
  },
  addressPop: {
    padding: "5px",
    textAlign: "center"
  },
});



const PhotoContainer = styled.div`
  height: 110px;
  width: 110px;
  margin: 30px 50px 10px 0px;
`;
const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  filter: grayscale(10);
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
  padding: 5px 0px 5px 0px;
  position: relative;
`;


const Map = ({ text }) => <div>{text}</div>;

export default function AvatarContact() {
  const classes = useStyles();

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
        <ProfilePicture src="/images/profile.jpg" alt="profile" />
      </PhotoContainer>
      <ContactSection>
        <Typography>Contact</Typography>
        <Line></Line>
        <FlexRow onClick={handleClick}>
          <Button className={`${classes.f12} ${classes.button}`} aria-controls="simple-menu" aria-haspopup="true" onMouseEnter={handleClick}>
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
        <FlexRow>
          <LocationOnIcon />
          <Typography className={classes.f12}>
            Vidisha, Madhya Pradesh
          </Typography>
        </FlexRow>
        <FlexRow>
          <LocationOnIcon />
          <Typography className={classes.f12}>
            Vidisha, Madhya Pradesh
          </Typography>
        </FlexRow>
      </ContactSection>

    </div>
  )
}
