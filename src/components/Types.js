import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import Questions from '../static/Questions';
import Windowlistener from '../events/Windowlistener';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    maxWidth: '240vh',
    display: 'flex',
    justifyContent: 'center',
     alignItems: 'center',
  },
}));
export default function Types() {
  const classes = useStyles();
  const checked = Windowlistener('header');
  return (
        <div className={classes.root} id="types">
            <ImageCard place = {Questions[0]} checked={checked}/>
            <ImageCard place = {Questions[1]} checked={checked}/>
            <ImageCard place = {Questions[2]} checked={checked}/>
        </div>
    );
}