import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import RegisterPage from './pages/RegisterPages'
import LoginPage from './pages/LoginPage'

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/recipies' element={<h1>recipies</h1>}></Route>
        <Route path='/createRecipe' element={<h1>new recipe</h1>}></Route>
        <Route path='/recepie/:id' element={<h1>update recipe</h1>}></Route>
        <Route path='/profile' element={<h1>Profile</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )  
}

export default App


