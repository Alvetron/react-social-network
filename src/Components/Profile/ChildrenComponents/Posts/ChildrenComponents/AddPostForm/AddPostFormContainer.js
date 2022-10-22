import AddPostForm from "./AddPostForm";
import {connect} from "react-redux";
import {addNewPost} from "../../../../../../redux/reducers/profileReducer";

const mapStateToProps = (state) => ({
        inputText: state.profile.addFormText
});

const mapDispatchToProps = {
    addNewPost,
}

const AddPostFormContainer = (props) => {

    const addNewPost = (postBody) => {
        props.addNewPost(postBody)
    }

    return (
        <AddPostForm addNewPost={addNewPost}/>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostFormContainer);