import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const buttonlist = ["All", "Music", "Dramedy", "Watched, Live", "Recently Uploaded", "Vocal Cinema", "Hindu Music"]
  return (
    <div className='flex'>
      {
        buttonlist.map((text) => <Button key={text} text={text} />)
      }
    </div>
  )
}

export default ButtonList