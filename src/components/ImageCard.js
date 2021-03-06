import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Architects Daughter",
    fontWeight: 'bold',
    fontSize: '2rem',
    
  },
  desc: {
    fontFamily: "Architects Daughter",
    fontSize: '1.1rem',
   
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.image}
          title={place.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.desc}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}