import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/userActions'

//  To enable @connect, install 'babel-plugin-transform-decorators-legacy'.
//  It will inject props (i.e. the return values) into in the 'layout' component when it is loaded.
@connect((store) => {    
  return {               
    user: store.userA.user,
    initialUser: store.userA.users,   // 'test' => can be called anything, e.g. 'userList'
    tweet: store.tweetsZ.tweets
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }
  render() {
    console.log(this.props);
  	return ( 
  	  <div>
        <h1>Redux-React: Pyramids and Turtles!!</h1>
        <h3>{this.props.user.name}, Age: {this.props.user.age}</h3>
        <h3>Ninja turtle {this.props.initialUser[0]} sent a tweet: {this.props.tweet[2]}</h3>
        <h4>Chto Eto?</h4>
      </div>
  	);
  }
}