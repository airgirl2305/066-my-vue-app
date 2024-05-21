import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile.jsx";
import { Settings } from "./components/Settings.jsx";
import { Messages } from "./components/Messages.jsx";

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
              <NavLink to="messages" className="nav-link">
                Сообщения
              </NavLink>
              <NavLink to="settings" className="nav-link">
                Настройки
              </NavLink>
            </div>
          </div>
          <div className="col-md-9">
            <Routes>
              {/*обязательно прописывать path="/" для главной страницы;*/}
              <Route path="/" element={<h2>Вы в личном кабинете, меню выбора - слева</h2>} />
              {/* /* - любая страница после (в ней id пользователя) */}
              <Route path="/profile/*" element={<Profile function={props.users.key_getUser} />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings function={props.users.key_getUsers} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
