import UserClass from "../components/UserClass";
import { Component } from "react";
import UserContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="p-4 m-4">
        <h2>About us</h2>

        <UserContext.Consumer>
          {({ LoggedInUser }) => <h1>{LoggedInUser}</h1>}
        </UserContext.Consumer>

        <UserClass />
      </div>
    );
  }
}
export default About;
