import React, { Component } from 'react';
import PropTypes from "prop-types";
import ContentStyle from '../Styles/ContentStyle'
import { Grid, Paper, withStyles, } from '@material-ui/core'
import FilterComponent from './FilterComponent';
import DataComponent from './DataComponent';
import { withRouter } from 'react-router-dom';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
            s_lauch: [true, false],
            s_land: [true, false],
            filtervalue: '',
            s_launching: '',
            s_landing: '',
            wholeresponse: undefined,

        }

    }


    async componentDidMount() {
        const matchParams = window.location.href;
        console.log(window.location,matchParams)
        let url = (matchParams.split('/'));
        let firstpath = (matchParams.split('/')[4]);
        // let secondpath = (matchParams.split('/')[2]);
        // let thirdpath = (matchParams.split('/')[3]);
        // let fourpath = (matchParams.split('/')[4]);
        // let fivepath = (matchParams.split('/')[5]);
        // let sixpath = (matchParams.split('/')[6]);
        // let sevenpath = (matchParams.split('/')[7]);
        console.log(url, firstpath)
        if (firstpath === 'f') {
            this.filterdata()
        }
        else {
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
                        })
                })
        }
    }

    filterByYear = (buttonyear) => {
        if (this.state.filtervalue === '') {
            this.setState({
                filtervalue: buttonyear
            }, () => {

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

            })
        }
        else {
            if (this.state.filtervalue === buttonyear) {
                this.setState({
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
                        this.props.history.push(`/`);


                    }
                })
            }
            else {
                this.setState({
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

                    // this.props.history.push(`/f/year/${this.state.filtervalue}`)
                })
            }
        }
    }

    s_launch = (value) => {
        if (this.state.s_launching === '') {
            this.setState({
                s_launching: value
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
                })
        }
        else {
            this.setState({
                s_launching: !this.state.s_launching
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

            })
        }


    }

    s_landing = (value) => {
        if (this.state.s_landing === '') {
            this.setState({
                s_landing: value
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
                })
        }
        else {
            this.setState({
                s_landing: !this.state.s_landing
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
            })
        }
    }


    filterdata = async () => {
        const matchParams = window.location.href;
        let url = (matchParams.split('/'));
        // let firstpath = (matchParams.split('/')[1]);
        let secondpath = (matchParams.split('/')[5]);
        let thirdpath = (matchParams.split('/')[6]);
        let fourpath = (matchParams.split('/')[7]);
        let fivepath = (matchParams.split('/')[8]);
        let sixpath = (matchParams.split('/')[9]);
        let sevenpath = (matchParams.split('/')[10]);
        console.log(window.location.href,url,"dad")
      
        //    if(this.state.filtervalue !== '' && this.state.s_launching !== '' && this.state.s_landing !== ''){
        //     await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${this.state.s_launching}&land_success=${this.state.s_landing}&launch_year=${this.state.filtervalue}`, {
        //         method: 'GET',
        //         headers: {
        //             'Accept': 'application/json'
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(res => {
        //             this.setState({
        //                 wholeresponse: res
        //             },
        //                 () => {
        //                     // console.log(res)
        //                     // console.log(this.state.wholeresponse.map((val, i) => {
        //                     //     return val.rocket.first_stage.cores
        //                     // }))
        //                 })
        //         })

        //     }


        if (url.length > 10 && url.length <= 12) {
            if (secondpath === 'year' && fourpath === 'launch' && sixpath === 'landing') {

                await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${fivepath}&land_success=${sevenpath}&launch_year=${thirdpath}`, {
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
                                // console.log(res)
                                // console.log(this.state.wholeresponse.map((val, i) => {
                                //     return val.rocket.first_stage.cores
                                // }))
                            })
                    })

            }
        }
        if (url.length > 8 && url.length <= 10) {
            if (secondpath === 'launch' && fourpath === 'landing') {

                await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${thirdpath}&land_success=${fivepath}`, {
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
                                // console.log(res)
                                // console.log(this.state.wholeresponse.map((val, i) => {
                                //     return val.rocket.first_stage.cores
                                // }))
                            })
                    })

            }
            if (secondpath === 'year' && fourpath === 'launch') {

                await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${fivepath}&launch_year=${thirdpath}`, {
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
                                // console.log(res)
                                // console.log(this.state.wholeresponse.map((val, i) => {
                                //     return val.rocket.first_stage.cores
                                // }))
                            })
                    })

            }
            if (secondpath === 'year' && fourpath === 'landing') {

                await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${typeof(fivepath)===null}&launch_year=${thirdpath}`, {
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
                                // console.log(this.state.wholeresponse.map((val, i) => {
                                //     return val.rocket.first_stage.cores
                                // }))
                            })
                    })

            }
        }

        if (url.length > 6 && url.length <= 8) {
            if (secondpath === 'year') {
                await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${thirdpath}`, {
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
                                // console.log(this.state.wholeresponse.map((val, i) => {
                                //     return val.rocket.first_stage.cores
                                // }))
                            })
                    })
            }

            if (secondpath === 'launch') {
                await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${thirdpath}`, {
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
                                // console.log(res)
                                // console.log(this.state.wholeresponse.map((val, i) => {
                                //     return val.rocket.first_stage.cores
                                // }))
                            })
                    })
            }
            if (secondpath === 'landing') {
                await fetch(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${thirdpath}`, {
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
                                // console.log(this.state.wholeresponse.map((val, i) => {
                                //     return val.rocket.first_stage.cores
                                // }))
                            })
                    })
            }

        }

        if (url.length <= 5) {
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
                            // console.log(res)
                            // console.log(this.state.wholeresponse.map((val, i) => {
                            //     return val.rocket.first_stage.cores[0].land_success
                            // }))
                        })
                })
        }

    }



    render() {
        const { classes } = this.props;
        const matchParams = window.location.pathname;
        let url = (matchParams.split('/'));
        console.log(url)
        return (
            <>
                <Grid className={classes.gridcontainer} container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <Paper className={classes.paper}>
                            <FilterComponent filterdata={this.filterdata} buttons={this.state.buttons} s_land={this.state.s_land} s_lauch={this.state.s_lauch} />

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        {Array.isArray(this.state.wholeresponse) ? <><DataComponent filterdata={this.filterdata} wholeresponse={this.state.wholeresponse} /> </> : <>Loading...</>}
                    </Grid>
                </Grid>
            </>
        )
    }
}
Content.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(ContentStyle)(Content))