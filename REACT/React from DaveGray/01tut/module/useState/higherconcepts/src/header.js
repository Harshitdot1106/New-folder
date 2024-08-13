 //we can use props instead of {title} but the curly braces help in destructing the prop
   
const Header = ({ title }) => {

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;