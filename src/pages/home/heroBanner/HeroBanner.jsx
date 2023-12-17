import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const HeroBanner = () => {
  const [background, setBackground] = useState('')
  const [query, setuery] = useState('')

  const navigate = useNavigate()

  const searchueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span>Welcome.</span>
          <span>
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onKeyUp={searchueryHandler}
              onChange={(e) => setuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
