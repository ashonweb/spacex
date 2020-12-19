import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    appbarroot:{
        background:"#E8E8E8",
       
    },
    typography :{
        color:"black"
    }
  }));
export default function Header(props){
    const classes = useStyles ();
    return(
        <>
        <AppBar position='static'
            classes={{
                root: classes.appbarroot
            }} 
        >
            <Toolbar>
                <Typography variant="h5" className={classes.typography}>SpaceX Launch Programs</Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}