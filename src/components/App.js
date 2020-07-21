import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import Response from './Response'


class App extends React.Component{

    state = {
        url:"",
        data:"",
        error:""
    }

    getStateFromSearch =async (url)=>{
        try{

            await this.setState({data:"", error:""})

           await this.setState({url:url})
            
            const response = await axios.get(this.state.url)
            
            await this.setState({data:response.data})
        }catch(err){

            await this.setState({error:`${err}`})

        }
    }
    


    render(){
    
        return(
            <div className="ui container">

                <SearchBar  sendUrl={this.getStateFromSearch}/>
                <Response data={this.state.data} err={this.state.error}/>
                <div className="ui visible message">
                    <p>Check console for response data</p>
                </div>
            </div>
        )
    }
}


export default App