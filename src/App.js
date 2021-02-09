import axios from 'axios';
import React from 'react';

import './App.css';

class App extends React.Component{
  state = {
    user:[],
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/beardedwrench')
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data,
        })
      })
  }

  render(){
    return(
      <div className="container">
        <div className="card">
          <div className="avatar"><img src={ this.state.user.avatar_url } alt={ this.state.user.login } /></div>
          <div className="info">
            <h2><a href={ this.state.user.html_url } target="_blank" ref="norefferer">{ this.state.user.login }</a></h2>
            <h3>Followers: { this.state.user.followers }</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
