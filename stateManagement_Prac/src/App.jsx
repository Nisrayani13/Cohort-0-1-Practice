import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil'
import RenderBlog from './RenderBlog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Blog'

function App() {
  const id=""
  return (
    <RecoilRoot>
      <BrowserRouter>
       <Routes>
        <Route path="/hhh" element={<Blog></Blog>}></Route>
        <Route path='/' element={<RenderBlog></RenderBlog>}></Route>
       </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
