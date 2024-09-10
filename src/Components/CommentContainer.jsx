import React from 'react'
import Comment from './Comment'
import CommentList from './CommentList'

const CommentContainer = () => {

    const commentData = [
        {
            user: "Yash Thakkar",
            comment: "This is a comment from Yash Thakkar",
            replies : [
                {
                    user: "Yash Thakkar",
                    comment: "This is a reply from Yash Thakkar",
                }
            ]
        },
        {
            user: "Yash Thakkar",
            comment: "This is a comment from Yash Thakkar",
            replies : [
                {
                    user: "Yash Thakkar",
                    comment: "This is a reply from Yash Thakkar",
                    replies : [
                        {
                            user: "Yash Thakkar",
                            comment: "This is a reply from Yash Thakkar",
                            replies : [
                                {
                                    user: "Yash Thakkar",
                                    comment: "This is a reply from Yash Thakkar",
                                    
                                },
                                {
                                    user: "Yash Thakkar",
                                    comment: "This is a reply from Yash Thakkar",
                                    
                                }
                            ]
                        },
                        {
                            user: "Yash Thakkar",
                            comment: "This is a reply from Yash Thakkar",
                        
                        },
                        {
                            user: "Yash Thakkar",
                            comment: "This is a reply from Yash Thakkar",
                            replies : [
                                {
                                    user: "Yash Thakkar",
                                    comment: "This is a reply from Yash Thakkar",
                                    
                                },
                                {
                                    user: "Yash Thakkar",
                                    comment: "This is a reply from Yash Thakkar",
                                    
                                },
                                {
                                    user: "Yash Thakkar",
                                    comment: "This is a reply from Yash Thakkar",
                                    
                                }

                            ]
                        }
                    ]
                }
            ]
        },
        {
            user: "Yash Thakkar",
            comment: "This is a comment from Yash Thakkar",
            replies : [
                {
                    user: "Yash Thakkar",
                    comment: "This is a reply from Yash Thakkar",
                }
            ]
        }
    ]
  return (
    <div className='m-5'>
        <CommentList comments = {commentData}/>
    </div>
  )
}

export default CommentContainer