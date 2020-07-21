import React from 'react'


const Response = (props)=>{

    console.log(props);

   

    const sucessRender = ()=>{
        if(props.data && !props.err.includes('Error')){
            return(
            <div className="ui green message">CORS IS DISABLED</div>
            )
        }else{
            return (
                <div className="ui red message">CORS IS ENABLED</div>
            )
        }
    
    }

    return (
        <div className="ui segment">
        
            {props.data || props.err ? sucessRender() : null}
        </div>
    )
}


export default Response