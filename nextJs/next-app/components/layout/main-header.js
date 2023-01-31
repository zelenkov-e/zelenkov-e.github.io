import Link from 'next/link'
import classes from './main-header.module.css'
import HomeIcon from '../../icons/home-icon'

function MainHeader() {
    return <header className={classes.header}>
        <Link href='/'>
            <a className={classes.icon}>
                <HomeIcon />
            </a>
        </Link>
        <nav className={classes.navigation}>
            <ul>
                <li><Link href='/events'>events</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainHeader