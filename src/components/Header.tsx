import './Header.css';

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <a href="#">Logo</a>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Contacts</li>
                        <li>About</li>
                        <li className='sign-up'>Sign Up</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}