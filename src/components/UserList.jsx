import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.name} {props.lastname}
        </NavLink>
      </td>
      <td>{props.email}</td>
      <td>{props.id}</td>
    </tr>
  );
};

// это наследование
export class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userRow: [] };
  }
  componentDidMount() {
    this.props.function().then((users) => {
      //console.log(users);
      let usersCount = users.length;
      let userRow = [];
      for (let i = 0; i < usersCount; i++) {
        userRow.push(
          <TableRow
            name={users[i].name}
            surname={users[i].surname}
            index={i}
            key={i}
            email={users[i].email}
            id={users[i].id}
          />
        );
      }
      this.setState({userRow:userRow});
    });
  }
  render() {
    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя и фамилия</th>
              <th scope="col">Email</th>
              <th scope="col">Id</th>
            </tr>
          </thead>
          <tbody>{this.state.userRow}</tbody>
        </table>
      </div>
    );
  }
}
