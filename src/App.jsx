import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorPage from './components/error.page';
import HomePage from './home.page';
import HomePageLayout from './home.page.layout';
import LoginPage from './components/login.page';
import RegisterPage from './components/regis.page';
import { ToastContainer } from 'react-bootstrap';

const App =() => {
  return (
    <>
     <ToastContainer/>
    <BrowserRouter>
<Routes>

  <Route path='/' element={<HomePageLayout/>}>

        <Route index element={<HomePage />} />
        
        <Route path='/register' element= {<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
       
        <Route path='*' element={<ErrorPage/>}/>
       
      </Route>
      </Routes>
      </BrowserRouter>


    </>
  )
}


export default App;

