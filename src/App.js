import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Header from './components/Header'
import Types from './components/Types'
import {CssBaseline} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  root: {
    Height: '100vh',
    backgroundImage : `url(${process.env.PUBLIC_URL + '/assets/main.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
}));

function App() {
  const classes = useStyles();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className = {classes.root}>
      <CssBaseline/>
      <Header/>
      <Types/>
    </div>
  );
}

export default App;
