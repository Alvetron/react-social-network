import { NavLink } from 'react-router-dom';

const activeLink = (link) => link.isActive ? 'block px-5 py-3 text-2xl bg-slate-100 text-neutral-800' : 'block px-5 py-3 text-2xl hover:text-neutral-800/30 text-neutral-800/70';

const NavListItem = (props) => {
    return (
        <li>
            <NavLink  className={link => activeLink(link)} to={props.link}>{props.text}</NavLink>
        </li>
    )
}

export default NavListItem;

