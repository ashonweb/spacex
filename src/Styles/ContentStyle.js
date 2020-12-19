export default  theme =>({
    gridcontainer:{
        width:"100% !important",
        margin:"0 !important"
    },
    paper:{
        padding:"5px"
    },
    typo:{
        textAlign:"center",
        fontSize:"medium"
    },
    divider:{
        margin:"1px 15px"
    },
    buttons:{
        display:"flex",
        justifyContent:"space-between",
        flexWrap:"wrap",  
        margin:"10px 0" 
    },
    bitems:{
        flexBasis:"45%",
        color:"black",
        margin:"2px",
        background:"#bede3e",
        '&:hover':{
            background:"#82b433"
        },
        // '&:focus':{
        //     background:"#82b433"
        // },
        // '&:active':{
        //     background:"red"
        // },
        // '&:focus-within':{
        //     background:"black"
        // },
        // '&:focus-visible':{
        //     background:"yellow"

        // },
        // '&:visites':{
        //     background:"pink"

        // },
        [theme.breakpoints.down('sm')]:{
            flexBasis:"45%"
        }
    },

   
    details:{
        margin:0,
    },
    details_item:{
        color: '#22a1d6',
    fontWeight: "500",
    padding: '0 4px'
    },
})