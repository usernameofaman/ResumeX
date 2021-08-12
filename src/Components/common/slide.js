import React from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import styled from 'styled-components'

const AnchorLinks = styled.a`
    text-decoration: none;
    cursor: pointer;
  color: #292929;
  font-size: 15px;


    transition:font-size 0.3s;
    &:hover{
        color: #4d4d4d;
        font-size: 16px;
    }
`

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    wrapper: {
        width: 100 + theme.spacing(2),
    },
    paper: {
        zIndex: 1,
        position: 'absolute',
        fontFamily: "Raleway, sans-serif",
        right:"-50px",
        top:"100px",
        width:200,
        height:200,
        padding:"10px",
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

export default function SimpleSlide() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Fab style={{background:"#334257"}} onClick={handleChange} color="primary" aria-label="add">
                    <InfoIcon />
                </Fab>
                <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                    <Paper elevation={4} className={classes.paper}>
                        This resume is created with: <br/>
                        <br/>
                        <b>ReactJS</b> <br/>
                        <b>Material UI </b> <br/>
                        <b>Styled Components</b> <br/>
                        <br/>
                        <br/>
                        <AnchorLinks href="https://github.com/usernameofaman/ResumeX">Checkout the Source code</AnchorLinks>

                    </Paper>
                </Slide>
            </div>
        </div>
    );
}
