// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile.jsx";
import { Settings } from "./components/Settings.jsx";
import { Messages } from "./components/Messages.jsx";

function App(props) {
  // const [count, setCount] = useState(0)
console.log(props);
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
              <Route path="/profile" element={<Profile function={props.users.key_getUser} />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings function={props.users.key_getUsers} />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
