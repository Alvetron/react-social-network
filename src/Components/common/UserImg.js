import pict from '../../images/userImg.png';

const UserImg = ({photo}) => {
    return  <img src={photo != null ? photo : pict} width='200'/>;
}
 
export default UserImg;