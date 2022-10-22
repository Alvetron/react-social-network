import NavListItem from "./NavListItem/NavListItem";
import navArr from '../../assets/links.json';

const NavList = () => {
    return (
        <ul>
            {
                navArr.map( (item, index) => <NavListItem key={index} text={item.text} link={item.link} />)
            }
        </ul>
    )
}

export default NavList;