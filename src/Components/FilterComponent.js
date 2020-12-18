import React, { Component } from 'react';
import PropTypes from "prop-types";
import ContentStyle from '../Styles/ContentStyle'
import { Typography, withStyles, Button,Divider } from '@material-ui/core'
import { withRouter } from 'react-router-dom';


class FilterComponent extends Component {
   constructor(props){
       super(props);
       this.state={
           filtervalue:'',
           s_launching:'',
           s_landing:''
       }
   }
   filterByYear = (buttonyear) =>{
       if(this.state.filtervalue === ''){
           this.setState({
               filtervalue:buttonyear
           },()=>{
               this.props.history.push(`/year/${this.state.filtervalue}`)
           })
       }
       else
       {
           if(this.state.filtervalue === buttonyear){
               this.setState({
                   filtervalue:''
               },()=>{
               this.props.history.push(`/${this.state.filtervalue}`)
           })
           }
           else{
            this.setState({
                filtervalue:buttonyear
            },()=>{
                this.props.history.push(`/year/${this.state.filtervalue}`)
            })
           }
       }
   }

    s_launch = (value) => {
        if (this.state.s_launching === '') {
            this.setState({
                s_launching: value
            }, () => {
                this.props.history.push(`/launch/${this.state.s_launching}`)
            })
        }
        else {
            if (this.state.s_launching === value) {
                this.setState({
                    s_launching: ''
                }, () => {
                    this.props.history.push(`/${this.state.s_launching}`)
                })
            }
            else {
                this.setState({
                    s_launching: value
                }, () => {
                    this.props.history.push(`/launch/${this.state.s_launching}`)
                })
            }
        }
    }
    s_landing = (value) => {
        if (this.state.s_landing === '') {
            this.setState({
                s_landing: value
            }, () => {
                this.props.history.push(`/landing/${this.state.s_landing}`)
            })
        }
        else {
            if (this.state.s_landing === value) {
                this.setState({
                    s_landing: ''
                }, () => {
                    this.props.history.push(`/${this.state.s_landing}`)
                })
            }
            else {
                this.setState({
                    s_landing: value
                }, () => {
                    this.props.history.push(`/landing/${this.state.s_landing}`)
                })
            }
        }
    }
   
    render() {
        const { classes } = this.props;
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
                        <Divider  className={classes.divider}/>

                        <div className={classes.buttons}>
                            {this.props.buttons.map((button, i) => (
                                <Button classes={
                                    {
                                        containedSecondary: classes.bitems
                                    }
                                } onClick={()=>{this.filterByYear(button)}} variant="contained" color="secondary" key={i}>
                                    {button}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" className={classes.typo}>
                            Successfull Launch
                        </Typography>
                        <Divider className={classes.divider}/>

                        <div className={classes.buttons}>
                            {this.props.s_lauch.map((button, i) => (
                                <Button classes={
                                    {
                                        containedSecondary: classes.bitems
                                    }
                                } onClick={()=>{this.s_launch(button)}}variant="contained" color="secondary" key={i}>
                                    {button}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" className={classes.typo}>
                            Successfull Landing
                        </Typography>
                        <Divider className={classes.divider}/>

                        <div className={classes.buttons}>
                            {this.props.s_land.map((button, i) => (
                                <Button classes={
                                    {
                                        containedSecondary: classes.bitems
                                    }
                                } onClick={()=>{this.s_landing(button)}} variant="contained" color="secondary" key={i}>
                                    {button}
                                </Button>
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
export default withRouter( withStyles(ContentStyle)(FilterComponent))