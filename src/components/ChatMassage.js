import React from 'react'
import Avatar from 'react-avatar'

const ChatMassage = () => {
  return (
    <div className='flex items-center'>
        <div>
            <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
        </div>
        <div className='flex items-center'>
            <h1 className='ml-2 font-bold text-sm'>Hello</h1>
            <p className='ml-2 py-2 text-sm'>namaste sir...</p>
        </div>
    </div>
  )
}

export default ChatMassage