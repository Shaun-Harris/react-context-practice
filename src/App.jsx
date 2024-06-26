import { useState } from 'react'
import './App.css'
import CreatePostForm from './components/CreatePostForm'
import PostList from './components/PostList'
import {PostsContext} from './components/PostsContext'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Hello, world :)' },
    { id: 2, title: 'Goodbye, world :('}
  ])

  return (
    <PostsContext.Provider value={ { posts, setPosts } }>
      <header>
       <CreatePostForm /> 
      </header>

      <main>
       <PostList />
      </main>
      
      </PostsContext.Provider>
     
  )
}

export default App
