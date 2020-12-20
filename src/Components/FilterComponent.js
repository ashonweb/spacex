import React, { Component } from 'react';
import PropTypes from "prop-types";
import ContentStyle from '../Styles/ContentStyle'
import { Typography, withStyles, Button, Divider } from '@material-ui/core'
import { withRouter } from 'react-router-dom';


class FilterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtervalue: '',
            s_launching: '',
            s_landing: '',
            buttonid: null,
            launchid: null,
            landid: null,
            s_l_toggle: this.props.s_lauch,
            s_land_toggle: this.props.s_land
        }
    }
    filterByYear = (buttonyear, i) => {
        if (this.state.filtervalue === '') {
            this.setState({
                buttonid: i,
                filtervalue: buttonyear
            }, () => {

                // if (this.state.s_launching === false && this.state.s_landing === false) {
                //     this.props.history.push(`/f/year/${this.state.filtervalue}`)

                // }
                // else if (this.state.s_launching !== false && this.state.s_landing === false) {
                //     this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}`)
                // }
                // else if (this.state.s_launching === false && this.state.s_landing !== false) {
                //     this.props.history.push(`/f/year/${this.state.filtervalue}/landing/${this.state.s_landing}`)
                // }
                // else {
                //     this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

                // }
                if (this.state.s_launching === '' && this.state.s_landing === '') {
                    this.props.history.push(`/f/year/${this.state.filtervalue}`)

                }
                else if (this.state.s_launching !== '' && this.state.s_landing === '') {
                    this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}`)
                }
                else if (this.state.s_launching === '' && this.state.s_landing !== '') {
                    this.props.history.push(`/f/year/${this.state.filtervalue}/landing/${this.state.s_landing}`)
                }
                else {
                    this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

                }
                this.props.filterdata()
            })
        }
        else {
            if (this.state.filtervalue === buttonyear) {
                this.setState({
                    buttonid: null,
                    filtervalue: ''
                }, () => {
                    if (this.state.s_launching !== '' && this.state.s_landing !== '') {
                        this.props.history.push(`/f/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)


                    }
                    else if (this.state.s_launching !== '' && this.state.s_landing === '') {
                        this.props.history.push(`/f/launch/${this.state.s_launching}`)
                    }
                    else if (this.state.s_launching === '' && this.state.s_landing !== '') {
                        this.props.history.push(`/f/landing/${this.state.s_landing}`)
                    }
                    else {
                        this.props.history.push(`/`)

                    }
                    this.props.filterdata()
                })
            }
            else {
                this.setState({
                    buttonid: i,
                    filtervalue: buttonyear
                }, () => {
                    if (this.state.s_launching === '' && this.state.s_landing === '') {
                        // this.props.history.push(`/f/launch/${this.state.s_launching}`)
                        this.props.history.push(`/f/year/${this.state.filtervalue}`)

                    }
                    else if (this.state.s_launching !== '' && this.state.s_landing === '') {
                        this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}`)
                    }
                    else if (this.state.s_launching === '' && this.state.s_landing !== '') {
                        this.props.history.push(`/f/year/${this.state.filtervalue}/landing/${this.state.s_landing}`)
                    }
                    else {
                        this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

                    }
                    this.props.filterdata()

                    // this.props.history.push(`/f/year/${this.state.filtervalue}`)
                })
            }
        }
    }

    s_launch = (value, i) => {
        if (this.state.s_launching === '') {
            this.setState({
                launchid: 1,
                s_launching: value,
                s_l_toggle: this.state.s_l_toggle.reverse(),
            },
                () => {
                    if (this.state.filtervalue === '' && this.state.s_landing === '') {
                        this.props.history.push(`/f/launch/${this.state.s_launching}`)
                    }
                    else if (this.state.filtervalue !== '' && this.state.s_landing === '') {
                        this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}`)
                    }
                    else if (this.state.filtervalue === '' && this.state.s_landing !== '') {
                        this.props.history.push(`/f/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)
                    }

                    else {
                        this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

                    }
                    this.props.filterdata()

                })
        }

        else {

            this.setState({
                launchid: i + 1,
                s_launching: value,
                s_l_toggle: this.state.s_l_toggle.reverse(),

            }, () => {
                if (this.state.filtervalue === '' && this.state.s_landing === '') {
                    this.props.history.push(`/f/launch/${this.state.s_launching}`)
                }
                else if (this.state.filtervalue !== '' && this.state.s_landing === '') {
                    this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}`)
                }
                else if (this.state.filtervalue === '' && this.state.s_landing !== '') {
                    this.props.history.push(`/f/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)
                }

                else {
                    this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

                }
                this.props.filterdata()


            })
        }


    }
    s_landing = (value, i) => {
        if (this.state.s_landing === '') {
            this.setState({
                landid: 1,
                s_landing: value,
                s_land_toggle: this.state.s_land_toggle.reverse(),
            },
                () => {
                    if (this.state.filtervalue === '' && this.state.s_launching === '') {
                        this.props.history.push(`/f/landing/${this.state.s_landing}`)
                    }
                    else if (this.state.filtervalue !== '' && this.state.s_launching === '') {
                        this.props.history.push(`/f/year/${this.state.filtervalue}/landing/${this.state.s_landing}`)
                    }
                    else if (this.state.filtervalue === '' && this.state.s_launching !== '') {
                        this.props.history.push(`/f/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)
                    }

                    else {
                        this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

                    }
                    this.props.filterdata()

                })
        }
        else {
            this.setState({
                landid: i + 1,
                s_landing: value,
                s_land_toggle: this.state.s_land_toggle.reverse(),

            }, () => {
                if (this.state.filtervalue === '' && this.state.s_launching === '') {
                    this.props.history.push(`/f/landing/${this.state.s_landing}`)
                }
                else if (this.state.filtervalue !== '' && this.state.s_launching === '') {
                    this.props.history.push(`/f/year/${this.state.filtervalue}/landing/${this.state.s_landing}`)
                }
                else if (this.state.filtervalue === '' && this.state.s_launching !== '') {
                    this.props.history.push(`/f/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)
                }

                else {
                    this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

                }
                this.props.filterdata()

            })
        }


    }
    render() {
        const { classes } = this.props;
        // const matchParams = window.location.pathname;
        // let firstpath = (matchParams.split('/')[1]);
        // let btn_class = this.state.yearclass ? "blackButton" : "whiteButton";
        return (
            <>

                <Typography variant="h6">
                    Filters
                </Typography>
                <div>
                    <div>
                        <Typography variant="h6" className={classes.typo}>
                            Launch Year
                        </Typography>
                        <Divider className={classes.divider} />

                        <div className={classes.buttons}>
                            {this.props.buttons.map((button, i) => (
                                <Button key={i} className={this.state.buttonid === i && 'is-active'}
                                    classes={
                                        {
                                            containedSecondary: classes.bitems
                                        }
                                    } onClick={() => { this.filterByYear(button, i) }} variant="contained" color="secondary" >
                                    {button}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" className={classes.typo}>
                            Successfull Launch
                        </Typography>
                        <Divider className={classes.divider} />

                        <div className={classes.buttons}>

                            {this.state.s_l_toggle.map((button, i) => (
                                <>
                                    <Button key={i} className={this.state.launchid === i && 'is-active'} classes={
                                        {
                                            containedSecondary: classes.bitems
                                        }
                                    } onClick={() => { this.s_launch(button, i) }} variant="contained" color="secondary" >
                                        {button === true ? <>True</> : <>False</>}
                                    </Button>                                       
                                </>

                            ))}

                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" className={classes.typo}>
                            Successfull Landing
                        </Typography>
                        <Divider className={classes.divider} />

                        <div className={classes.buttons}>

                            {this.state.s_land_toggle.map((button, i) => (
                                <>
                                    <Button key={i} className={this.state.landid === i && 'is-active'} classes={
                                        {
                                            containedSecondary: classes.bitems
                                        }
                                    } onClick={() => { this.s_landing(button, i) }} variant="contained" color="secondary" >
                                        {button === true ? <>True</> : <>False</>}
                                    </Button>                             
                                </>

                            ))}

                        </div>
                    </div>
                </div>


            </>
        )
    }
}
FilterComponent.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(ContentStyle)(FilterComponent))