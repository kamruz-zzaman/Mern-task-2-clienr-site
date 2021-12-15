import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './Component/CreatePost/CreatePost';
import Home from './Component/Home/Home';
import SignIn from './Component/SignInForm/SignIn';
import SignUp from './Component/SignUpForm/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route path="createPost" element={<CreatePost />}></Route>
        </Routes>
        <Routes>
          <Route path="signin" element={<SignIn />}></Route>
        </Routes>
        <Routes>
          <Route path="signUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
