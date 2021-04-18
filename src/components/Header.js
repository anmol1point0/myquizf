import React, { useEffect,useState } from 'react';
import {makeStyles,IconButton,Collapse, Toolbar} from '@material-ui/core'
import {AppBar} from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';
import {Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100vh',
        fontFamily: "Architects Daughter",
    },
    appbar: {
        background: 'none',
    },
    appbartitle: {
        display: "inline",
        marginRight: "70%",
    },
    appbarwrapper:{
        width: "80%",
        margin: "0 auto"
    },
    container:{
        textAlign: "center",
    },

    icon:{
        color:"white",
        fontSize: '2rem',

    },

    title:{
        color: "white",
        fontSize: "4.5rem"
    },
    godown:{
        color: "blue",
        fontSize: "2.5rem"
    },
    halftext:{
        color: "blue",
    }
})); 

export default function Header(){
    const [checked,setChecked] = useState(false);
    const classes = useStyles();
    useEffect(()=>{
        setChecked(true);
    },[]);
    return(
        <div className={classes.root} id="header">
            <AppBar className ={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarwrapper}>
                    <h1 className={classes.appbartitle}> My<span className={classes.halftext}>Quiz.</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in = {checked} {...(checked ? { timeout: 2500 } : {})}
            collapsedHeight = {50} >
            <div className={classes.container}>
                <h1 className= {classes.title}> Welcome to<br/>My<span className={classes.halftext}>Quiz.</span></h1>
                <Scroll to="types" smooth={true}>
                <IconButton>
                    <ExpandMoreIcon className={classes.godown}/>
                </IconButton>
                </Scroll>
            </div>
            </Collapse>
        </div>
    );
}