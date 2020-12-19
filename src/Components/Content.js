import React, { Component } from 'react';
import PropTypes from "prop-types";
import ContentStyle from '../Styles/ContentStyle'
import { Grid, Paper, Typography, withStyles, Button,Divider } from '@material-ui/core'
import FilterComponent from './FilterComponent';
import DataComponent from './DataComponent';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
            s_lauch: ["true", "false"],
            s_land: ["true", "false"]

        }

    }
    render() {
        const { classes } = this.props;
        const matchParams = window.location.pathname;
        console.log(matchParams, "href")
        let firstpath = (matchParams.split('/')[1]);
        let secondpath = (matchParams.split('/')[2]);
        console.log(firstpath,secondpath,"secondpath")
        return (
            <>
                <Grid className={classes.gridcontainer} container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <Paper className={classes.paper}>
                           <FilterComponent buttons={this.state.buttons} s_land={this.state.s_land} s_lauch={this.state.s_lauch}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                         <DataComponent/>

                    </Grid>
                </Grid>
            </>
        )
    }
}
Content.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(ContentStyle)(Content)