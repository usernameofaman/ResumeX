import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 19,
    borderRadius: 2,
    paddingTop:1,
    paddingBottom:1,
    paddingLeft:1,
    border: '1.8px solid white'
  },
  colorPrimary: {
    // backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    backgroundColor: "transparent"
  },
  bar: {
    marginTop:3,
    height:15,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop:"8px",
    marginBottom:"10px"
  },
});

export default function CustomizedProgressBars(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= props.max ? props.max : prevProgress + 10));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}
