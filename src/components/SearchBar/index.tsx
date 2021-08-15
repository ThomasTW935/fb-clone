import React, { useState } from 'react'
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Con from './SearchBar,style'

export default function SearchBar() {
  const [onFocus, setOnFocus] = useState(false)
  return (
    <Con isFocus={onFocus}>
      {onFocus && (
        <FontAwesomeIcon
          size='lg'
          className='search__back'
          icon={faArrowLeft}
        />
      )}
      <Con.Bar>
        <Con.Icon onClick={() => setOnFocus(true)}>
          <FontAwesomeIcon icon={faSearch} />
        </Con.Icon>
        <Con.Input
          type='search'
          placeholder='Search Facebook...'
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
        />
      </Con.Bar>
    </Con>
  )
}
