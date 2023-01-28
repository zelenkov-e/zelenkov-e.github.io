import Link from 'next/link'


function MainHeader() {
    return <header>
        <div>
            <Link href='/'>Home</Link>
        </div>
        <nav>
            <ul>
                <li><Link href='/works'>all works</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainHeader