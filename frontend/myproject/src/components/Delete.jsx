import React from 'react'
import axios from 'axios'
function Delete(){
  const handleDelete = async (e) => {
    e.preventDefault()
    const id = e.target.id.value;
    await axios.delete(`http://localhost:3000/users/${id}`)
    alert('Product deleted successfully')
  }
  return (
    <div style={{ border: "2px solid green",padding:'20px' }}>
      <h1 style={{ color: "red" }}>Delete Product</h1>
      <form onSubmit={handleDelete}>
        <input type="text" placeholder="Enter Product ID" name="id" />
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default Delete