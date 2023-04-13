import React, { useState } from 'react'
import './Header.scss'
import { Menu } from 'semantic-ui-react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {


  const currentPath = useLocation()

  const finalCurrentPath = currentPath.pathname.replace("/", "")

  const [activeItem, setActiveItem] = useState(finalCurrentPath)

  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
    navigate(name)
  }

  const navigate = useNavigate()


  return (
    <div className='header-menu'>
      <Menu secondary>
      <Menu.Item name='inicio' active={activeItem === "inicio"} onClick={(handleItemClick)} />
      <Menu.Item name='series' active={activeItem === "series"} onClick={(handleItemClick)} />
      <Menu.Item name='comics' active={activeItem === "comics"} onClick={(handleItemClick)} />
      </Menu>
      <p>Desde header</p>
    </div>
  )
}

export default Header