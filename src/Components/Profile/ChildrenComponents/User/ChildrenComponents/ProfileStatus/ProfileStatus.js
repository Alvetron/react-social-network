import {Component} from "react";

class ProfileStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusText: this.props.status,
            isInputActive: false,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({statusText: this.props.status})
        }
    }

    toggleInput = () => {
        this.setState({
            isInputActive: !this.state.isInputActive,
        })
        if(this.state.isInputActive) {
            this.props.updateStatus(this.state.statusText)
        }
    }

    inputChangeHandler = (e) => {
        this.setState({
            statusText: e.target.value,
        })
    }

    render() {
        return(
            <>
                <div>
                    {
                        this.state.isInputActive ?
                            <input className='border-2 border-black' onChange={this.inputChangeHandler} onBlur={this.toggleInput} type='text' value={this.state.statusText} autoFocus/> :
                            <p  onDoubleClick={this.toggleInput} >{this.props.status ||  'No status'}</p>
                    }
                </div>
            </>
        )
    }

}

export default ProfileStatus;