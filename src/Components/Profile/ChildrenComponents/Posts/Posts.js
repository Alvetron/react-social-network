import AddPostFormContainer from "./ChildrenComponents/AddPostForm/AddPostFormContainer";
import PostListContainer from "./ChildrenComponents/PostList/PostListContainer";


const Posts = (props) => {
    return (
        <div className='p-4'>
            <h2 className='text-4xl mt-4 mb-10'>My posts</h2>
            <AddPostFormContainer/>
            <PostListContainer/>
        </div>
    )
}

export default Posts;