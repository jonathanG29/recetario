import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>}></Route>
        <Route path='/register' element={<h1>Register</h1>}></Route>
        <Route path='/login' element={<h1>Login</h1>}></Route>
        <Route path='/createRecipe' element={<h1>new recipe</h1>}></Route>
        <Route path='/recepie/:id' element={<h1>update recipe</h1>}></Route>
        <Route path='/profile' element={<h1>Progile</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )  
}

export default App


