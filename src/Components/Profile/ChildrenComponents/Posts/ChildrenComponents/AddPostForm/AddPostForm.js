import { useState } from "react";

let AddPostForm = (props) => {
    const [textareaBody, setTextareaBody] = useState('jnkjb');

    const handleChange = (e) => {
        setTextareaBody(e.target.value);
    };

    const addNewPost = () => {
        props.addNewPost(textareaBody);
        setTextareaBody('')
    };

    return (
        <div className='flex items-stretch'>
            <textarea className='w-10/12 p-2 border-2 border-black-100 outline-none resize-none ' name='postBody' placeholder='write your post' value={textareaBody} onChange={handleChange}/>
            <button className='w-2/12 border-2 border-black-100' type='button' onClick={addNewPost}>Add post</button>
        </div>
    )
}

export default AddPostForm;