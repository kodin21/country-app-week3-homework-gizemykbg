import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

const Toggle = ({theme, onClick}) => { 
  return (
    <button
      className={`change-mode font-weight-bold btn
      ${theme === 'light' ? 'lightTheme' : 'darkTheme component'}`}
      onClick={onClick}
    >
      {theme === 'light' ? (
        <>
          <FontAwesomeIcon className="mr-3" icon={faMoon}/>
          Dark 
        </>
        ) : (
          <>
            <FontAwesomeIcon className="mr-3" icon={faSun}/>
            Light 
          </>
        )
      }
    </button>
  )
}

export default Toggle