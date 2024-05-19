import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import RegisterPage from './pages/RegisterPages'
import LoginPage from './pages/LoginPage'
import RecipiesFormPage from './pages/RecipiesFormPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

import ProctectedRoute from './ProtectedRoute'

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>        
        
        <Route element={<ProctectedRoute/>}>
          <Route path='/homepage' element={<HomePage></HomePage>}></Route>
          <Route path='/createRecipe' element={<RecipiesFormPage></RecipiesFormPage>}></Route>
          <Route path='/recepie/:id' element={<RecipiesFormPage></RecipiesFormPage>}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )  
}

export default App


