import React, { Component } from 'react';
import PropTypes from "prop-types";
import ContentStyle from '../Styles/ContentStyle'
import { Grid, Paper, withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom';


class DataComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wholeresponse: []
        }
    }
    async componentDidMount() {
        const matchParams = window.location.pathname;
  console.log(matchParams, "href")
  let firstpath = (matchParams.split('/')[1]);
  let secondpath = (matchParams.split('/')[2]);
  console.log(firstpath,secondpath,"secondpath")
        if(firstpath === 'f' & secondpath === 'year') {
            await fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true')

        }
        else if (firstpath === 'f' & secondpath === 'launch'){
            await fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true')


        }
        else if (firstpath === 'f' & secondpath === 'landing'){
            await fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true')


        }
        else{
        await fetch('https://api.spacexdata.com/v3/launches?limit=100', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    wholeresponse: res
                },
                    () => {
                        console.log(res)
                        console.log(this.state.wholeresponse.map((val, i) => {
                            return val.rocket.first_stage.cores
                        }))
                    })
            })
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
                    {firstpath === 'f' ? <>route changed</>:
                    <>


                    {this.state.wholeresponse.map((value, i) => (
                        <Grid item xs={12} sm={3}>
                            <Paper>
                                {/* <img src={value.links.mission_patch} alt="missing image" /> */}
                                <h6 className={classes.details}>mission_name:<span className={classes.details_item}>{value.mission_name}</span></h6>
                                <h6 className={classes.details}>flight_number: <span className={classes.details_item}>{value.flight_number}</span></h6>

                                <h6 className={classes.details}>Launch Year:<span className={classes.details_item}>{value.launch_year}</span> </h6>
                                <h6 className={classes.details}>Mission Id : <span className={classes.details_item}>
                                    {value.mission_id.length === 0 ? <ul style={{ margin: 0 }}>
                                        <li>
                                            Mission id is not available
                                    </li>

                                    </ul> : value.mission_id.map((value, i) => (
                                        <ul style={{ margin: 0 }}>
                                            <li>
                                                {value}
                                            </li>

                                        </ul>
                                    ))}
                                </span></h6>
                                <h6 className={classes.details}>Successfull Launch :<span className={classes.details_item}>
                                    {value.launch_success ? <>true</> : <>false</>}
                                </span></h6>
                                <h6 className={classes.details}>Successful Landing : <span className={classes.details_item}>
                            {/* {value.rocket.first_stage.cores[0].map((value, i) => (
                                        <ul style={{ margin: 0 }}>
                                            <li>
                                            {value.land_success === null ? <> false </> :  <> true </>}

                                            </li>

                                        </ul>
                                    ))} */}
                                     {value.rocket.first_stage.cores[0].land_success === null ? <> false </> :  <> true </>}

                                </span></h6>
                            </Paper>
                        </Grid>

                    ))}
                    </>
    }

                </Grid>
            </>
        )
    }
}
DataComponent.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(ContentStyle)(DataComponent))