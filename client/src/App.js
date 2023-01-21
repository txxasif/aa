import { Route, Routes } from 'react-router-dom';
import './App.css';
import  SignUpSignIn from './pages/signUpSignIn';
import { Header } from './components/header/header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from './redux/slice/userSlice/userSliceSelector';
import { setCurrentUser } from './redux/slice/userSlice/userSlice';
function Home(){
  return(
    <div>
      HOME
    </div>
  )
}
function App() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(()=>{
    dispatch(setCurrentUser([{name: 'John', age:18}]));
  },[dispatch])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
              <Route index element={ <Home/> } />
              <Route path='/sign-in'element={<SignUpSignIn />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
