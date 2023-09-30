import React from "react";
class UserClass extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        userInfo : {
            name : "user",
            login : "dummy",
        }
    }
   }
   render() {
    const {name, login,avatar_url} = this.state.userInfo;
    return (<div className="user-card">
    <img src={avatar_url} alt="nitin"/>
    <h2>Name : {name}</h2>
    <h2>Id : {login}</h2>
    </div>
    );
   }
   async componentDidMount(){
     const data = await fetch('https://api.github.com/users/ChavaNitinsaichowdary');
     const json = await data.json();
     console.log(json);
     this.setState({
        userInfo : json,
     });
   }

}
export default UserClass;