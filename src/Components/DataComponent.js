import React, { Component } from 'react';
import PropTypes from "prop-types";
import ContentStyle from '../Styles/ContentStyle'
import { Grid, Paper, withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom';
import di from '../default-image.jpg'

class DataComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wholeresponse: this.props.wholeresponse
        }
    }

    render() {
        const { classes } = this.props;
        // const matchParams = window.location.pathname;
        // let firstpath = (matchParams.split('/')[1]);

        return (
            <>
                <Grid className={classes.gridcontainer} container spacing={3}>
                    {this.props.wholeresponse.length === 0 ? <h6>No Data available for your selection</h6>:<>
                    {this.props.wholeresponse.map((value, i) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper style={{padding:"10px"}}>
                                <div style={{padding:"15px",background:"#E8E8E8"}}>
                                {/* <img src={value.links.mission_patch} alt="missing image" /> */}
                            <img src={di} alt="missing" style={{height:"125px",width:"160px",display:"block",margin:"0 auto"}}/>
                            </div>

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
                                    {value.launch_success ? <>True</> : <>False</>}
                                </span></h6>
                                <h6 className={classes.details}>Successful Landing : <span className={classes.details_item}>
                                    {value.rocket.first_stage.cores.map((value, i) => (
                                        <>
                                            {/* {value.land_success} */}
                                            {value.land_success === null ? <> - </> : <>{value.land_success === true ? <>True</>:<>False</>}</>}

                                            {/* {(value.land_success === null || value.land_success === false) ? <> false </> : <> true </>} */}
                                        </>

                                    ))}
                                    {/* {value.rocket.first_stage.cores[0].land_success === (null || false) ? <> false </> :  <> true </>} */}

                                </span></h6>
                            </Paper>
                        </Grid>

                    ))}

</>}

                </Grid>
            </>
        )
    }
}
DataComponent.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(ContentStyle)(DataComponent))