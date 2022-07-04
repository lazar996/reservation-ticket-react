import React from 'react'
import CenterNavigation from './CenterNavigation'
import RightNavigation from './RightNavigation'

function Header() {
  return (
    <div className='navigation'>
    <div className='logo'> 
      <img src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Yugoslavia_JAT_Logo.svg' width={"80px"} alt="/" className="d-inline-block align-top" />
     </div> 
      <CenterNavigation/>
      <RightNavigation/>
      </div>

  )
}

export default Header