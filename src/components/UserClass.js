import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "name",
        company: "company",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/HosneMubarak");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, company } = this.state.userInfo;
    return (
      <div className="bg-gray-100">
        <h3 className="text-gray-700">Name : {name}</h3>
        <h3 className="text-gray-700">Company: {company}</h3>
      </div>
    );
  }
}
export default UserClass;
