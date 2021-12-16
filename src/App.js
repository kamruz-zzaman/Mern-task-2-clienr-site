import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './Component/CreatePost/CreatePost';
import ForGotPass from './Component/ForgotPass/ForGotPass';
import Home from './Component/Home/Home';
import SignIn from './Component/SignInForm/SignIn';
import SignUp from './Component/SignUpForm/SignUp';
import UserStatus from './Component/UserStatus/UserStatus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route index element={<UserStatus />}></Route>
        </Routes>
        <Routes>
          <Route path="posts" element={<UserStatus />}></Route>
        </Routes>
        <Routes>
          <Route path="createPost" element={<CreatePost />}></Route>
        </Routes>
        <Routes>
          <Route path="signin" element={<SignIn />}></Route>
        </Routes>
        <Routes>
          <Route path="signUp" element={<SignUp />}></Route>
        </Routes>
        <Routes>
          <Route path="forgotPass" element={<ForGotPass />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
