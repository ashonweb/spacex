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
           s_landing:'',
       }
   }
   filterByYear = (buttonyear) =>{
       if(this.state.filtervalue === ''){
           this.setState({
               filtervalue:buttonyear
           },()=>{

            if(this.state.s_launching === '' && this.state.s_landing === '' )
            {
            this.props.history.push(`/f/year/${this.state.filtervalue}`)

            }
            else if (this.state.s_launching !== '' && this.state.s_landing === '' ) {
                this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}`)
            }
            else if (this.state.s_launching === '' && this.state.s_landing !== '' ) {
                this.props.history.push(`/f/year/${this.state.filtervalue}/landing/${this.state.s_landing}`)
            }
            else {
                this.props.history.push(`/f/year/${this.state.filtervalue}/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

            }

           })
       }
       else
       {
           if(this.state.filtervalue === buttonyear){
               this.setState({
                   filtervalue:''
               },()=>{
                if(this.state.s_launching !== '' && this.state.s_landing !== '' )
                {
                    console.log("am here")
                    this.props.history.push(`/f/launch/${this.state.s_launching}/landing/${this.state.s_landing}`)

    
                }
               else if (this.state.s_launching !== '' && this.state.s_landing === '' ) {
                    this.props.history.push(`/f/launch/${this.state.s_launching}`)
                }
                else if (this.state.s_launching === '' && this.state.s_landing !== '' ) {
                    this.props.history.push(`/f/landing/${this.state.s_landing}`)
                }
                else {
                    this.props.history.push(`/`)

                }
           })
           }
           else{
            this.setState({
                filtervalue:buttonyear
            },()=>{
                if(this.state.s_launching === '' && this.state.s_landing === '' )
                {
                // this.props.history.push(`/f/launch/${this.state.s_launching}`)
                this.props.history.push(`/f/year/${this.state.filtervalue}`)
    
                }
                else if (this.state.s_launching !== '' && this.state.s_landing === '' ) {
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
    if(this.state.s_launching === ''){
        this.setState({
            s_launching:value
        },
        ()=>{
            console.log(this.state.s_launching)
            if(this.state.filtervalue === '' && this.state.s_landing === '' )
            {
            this.props.history.push(`/f/launch/${this.state.s_launching}`)
            }
            else if (this.state.filtervalue !== '' && this.state.s_landing === '' ) {
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
            s_launching:!this.state.s_launching
        },()=>{
            console.log(this.state.s_launching)
            if(this.state.filtervalue === '' && this.state.s_landing === '' )
            {
            this.props.history.push(`/f/launch/${this.state.s_launching}`)
            }
            else if (this.state.filtervalue !== '' && this.state.s_landing === '' ) {
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
    if(this.state.s_landing === ''){
        this.setState({
            s_landing:value
        },
        ()=>{
            console.log(this.state.s_landing)
            if(this.state.filtervalue === '' && this.state.s_launching === '' )
            {
            this.props.history.push(`/f/landing/${this.state.s_landing}`)
            }
            else if (this.state.filtervalue !== '' && this.state.s_launching === '' ) {
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
            s_landing:!this.state.s_landing
        },()=>{
            console.log(this.state.s_launching)
            if(this.state.filtervalue === '' && this.state.s_launching === '' )
            {
            this.props.history.push(`/f/landing/${this.state.s_landing}`)
            }
            else if (this.state.filtervalue !== '' && this.state.s_launching === '' ) {
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