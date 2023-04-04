import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import "./style.css"

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const searchQuery = (e) =>{
      e.preventDefault()
    if(query){

      navigate(`/search/${query}`)
    }
  }

  return (
   <Paper component={'form'} onSubmit={searchQuery} sx={{ width:'60%', display:"flex", justifyContent:'space-between'}}  >
      <input type={'text'} placeholder={'Search...'} 
      value={query}
      
      onChange={((e)=> setQuery(e.target.value))}
      
        className='searchBarIndex'
      style={{outline:'none', border:'none',  paddingLeft:'5px', width:'90%'}}  ></input>
        <IconButton type='submit' sx={{color:'red'}}>
          <SearchIcon/>
        </IconButton>
   </Paper>

  )
}

export default SearchBar