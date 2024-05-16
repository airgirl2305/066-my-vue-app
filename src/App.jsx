// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Profile = () => {
  // писать на строке return либо ()
  return <h1>Заголовок</h1>;
};
const Messages = () => {
  // писать на строке return либо ()
  return <h2>Сообщения</h2>;
};
const Settings = () => {
  // писать на строке return либо ()
  return <h3>Наcтройки</h3>;
};
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="nav flex-column nav-pills">
              <a href="profile" className="nav-link active">
                Профиль
              </a>
              <a href="messages" className="nav-link">
                Сообщения
              </a>
              <a href="settings" className="nav-link">
                Настройки
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
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
