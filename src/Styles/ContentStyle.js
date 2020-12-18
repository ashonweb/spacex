export default theme =>({
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
        color:"black",
        margin:"2px",
        background:"#bede3e",
        '&:hover':{
            background:"#82b433"
        },
        '&:focus':{
            background:"#82b433"
        }
    }
})