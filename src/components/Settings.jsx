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

export const Settings = (props) => {
  let users = props.function();
  console.log(users);
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(
      <TableRow
        name={users[i].name}
        lastname={users[i].lastname}
        index={i}
        key={i}
        email={users[i].email}
        id={users[i].id}
      />
    );
  }
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
        <tbody>{userRow}</tbody>
      </table>
    </div>
  );
};
