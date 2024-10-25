
import './App.css'
import Blogs from './assets/component/blogs/blogs'
import Bookmark from './assets/component/blogs/Bookmark'
import Header from './assets/component/header/Header'

function App() {
 

  return (
    <>
      <Header></Header>
      <div className='md:flex '>
        <div className='w-2/3 border'>
        <Blogs></Blogs>
        </div>
        <div className='border w-1/3'>
        <Bookmark></Bookmark>
        </div>
      </div>
      
      
    </>
  )
}

export default App
