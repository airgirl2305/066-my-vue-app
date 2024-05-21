import styles from "./Profile.module.css";
export const Profile = (props) => {
  const familyStyle = {
    color: "blue",
    fontSize: "1.2rem",
  };

  let userId = window.location.pathname.split("/")[3];
  //console.log(userId);
  let user = props.function(userId);

  // писать на строке return либо ()
  return (
    <div className="row">
      <div className="col-md-4">
        {/* img всегда закрыт в React */}
        <img src={user.avatar} width="100%" />
      </div>
      <div className="col-md-8">
        <p className={styles.id}>
          <span>ID: </span>
          <span>{user.id}</span>
        </p>
        <p className={styles.email}>
          <span>Email: </span>
          <span>{user.email}</span>
        </p>
        <p>
          <span style={familyStyle}>Фамилия Имя: </span>
          <span>
            {user.surname}&nbsp;
            {user.name}
          </span>
        </p>
        <p style={{ color: "red", fontSize: "1.5rem" }}>Рассказ о себе: {user.about}</p>
      </div>
    </div>
  );
};
