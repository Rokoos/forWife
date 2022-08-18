import React from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <div style={style} >
      <Link to="/" >Aplications</Link>
      <Link to="/aplications/new">Create Aplication</Link>
      <Link to="/aplications/edit">Edit Aplication</Link>
    </div>
  )
}

export default Header
const style={
  display: 'flex',
  justifyContent: 'space-evenly',
}