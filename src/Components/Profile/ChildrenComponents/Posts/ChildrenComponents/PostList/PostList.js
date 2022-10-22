import PostListItem from "./PostListItem";

const PostList = (props) => {
    return (
        <ul>
            {props.posts.map( item => <PostListItem text={item.text}/>)}
        </ul>
    )
}

export default PostList;