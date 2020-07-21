import React from 'react'




class SearchBar extends React.Component {

    state = {
        url:""
    }

    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.sendUrl(this.state.url)
    }

    renderBar(){
        return (
            <div className="ui placeholder segment">
                <div className="ui icon header">
                    <i className="exclamation triangle icon"></i>
                   <h3 className="ui header">CHECK CORS FOR API</h3>
                </div>
                <div className="inline">
                <form onSubmit={this.onFormSubmit}>
                <div className="ui action input">
                    
                        <input type="text" value={this.state.url} placeholder="https://api.chucknorris.io/jokes/random" onChange={e=>{
                            this.setState({url:e.target.value})
                        }} />
                        <button type="submit" className="ui primary icon button">
                        GET
                        </button>
                    </div>
                </form>
                    
                </div>
            </div>
        )
    }



render(){

    return(
        <div style={{margin:"5%"}}>
            {this.renderBar()}

        </div>
    )

}

}

export default SearchBar