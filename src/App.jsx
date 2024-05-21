import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile.jsx";
import { UserList } from "./components/UserList.jsx";
import { HooksPage } from "./components/HooksPage.jsx";

function App(props) {
//console.log(props);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="nav flex-column nav-pills">
              <NavLink to="profile" className="nav-link">
                Профиль
              </NavLink>
              <NavLink to="hooks" className="nav-link">
                Хуки + API
              </NavLink>
              <NavLink to="userlist" className="nav-link">
                Список пользователей
              </NavLink>
            </div>
          </div>
          <div className="col-md-9">
            <Routes>
              {/*обязательно прописывать path="/" для главной страницы;*/}
              <Route path="/" element={<h2>Вы в личном кабинете, меню выбора - слева</h2>} />
              {/* /* - любая страница после (в ней id пользователя) */}
              <Route path="/profile/*" element={<Profile function={props.users.key_getUser} />} />
              <Route path="/hooks" element={<HooksPage />} />
              <Route path="/userlist" element={<UserList function={props.users.key_getUsers} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
