import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
    <img className="h-10 w-10"
    src="https://tse4.mm.bing.net/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&pid=Api&P=0&h=180"
    alt="USER_ICON"/>
    <span className='m-2 font-bold'>{name} : </span>
    <span className='m-2'>{message}</span>
</div>
  )
}

export default ChatMessage