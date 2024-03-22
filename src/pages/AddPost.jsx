import React from 'react'
import { PostForm,Container } from '../components/index'
// import PostForm from '../postform/PostForm'


function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}

export default AddPost