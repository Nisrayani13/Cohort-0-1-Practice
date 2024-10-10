import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil'
import RenderBlog_Atom from './render/RenderBlog_Atom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import RenderBlog_AtomFamily from './render/RenderBlog_AtomFamily'

function App() {
  const id=""
  return (
    <RecoilRoot>
      <BrowserRouter>
       <Routes>
        <Route path="/hhh" element={<Blog></Blog>}></Route>
        <Route path='/' element={<RenderBlog_Atom></RenderBlog_Atom>}></Route>
        <Route path='/family' element={<RenderBlog_AtomFamily></RenderBlog_AtomFamily>}></Route>
       </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
