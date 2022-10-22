import { connect } from "react-redux";
import PostList from "./PostList";


const mapStateToProps = state => ({
    posts: state.profile.posts
})

export default connect(mapStateToProps)(PostList);