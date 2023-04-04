import React from 'react'
import { rgbToHex, Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/constant'
import "./style.css"
import SearchBar from "../Search/SearchBar"
const Navbar = () => {
  return (
    <div className='navbarContainer'>

    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} 
    p={2}
    position={'sticky'}
    bgcolor={'#323232'}
    color={'white'}
    >
      <Link to={'/'} > <img src={logo}  height={'30px'} />  </Link>
      <SearchBar/>

    </Stack>
      </div>
  )
}

export default Navbar