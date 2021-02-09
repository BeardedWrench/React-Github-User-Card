import axios from 'axios';
import React from 'react';

import './App.css';

class App extends React.Component{
  state = {
    user:[],
    followers: [],
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/beardedwrench')
      .then(res => {
        this.setState({
          user: res.data,
        })
      })
      .catch( err => console.log( err ) )

    axios.get('https://api.github.com/users/beardedwrench/followers')
      .then( res => {
        console.log(res.data)
        this.setState({
          followers: res.data,
        })
      })
      .catch( err => console.log( err ) )
  }

  render(){
    return(
      <div className="container">
        <div className="card">
          <div className="avatar"><img src={ this.state.user.avatar_url } alt={ this.state.user.login } /></div>
          <div className="info">
            <h2><a href={ this.state.user.html_url } target="_blank">{ this.state.user.login }</a></h2>
            <h3>Followers: { this.state.user.followers }</h3>
          </div>
        </div>

        <div className="card">
          <div className="followers">
            <h4>Followers</h4>

            <ul>
              {
                this.state.followers.map( item => {
                    return <li><img src={item.avatar_url}/><a href={item.html_url} target="_blank">{item.login}</a></li>
                })
              }
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
