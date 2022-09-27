import "./Header.css"

const Header = (pops) => {
    return(
        <header className="header">
            Todo List ( {pops.result} / {pops.length} )
        </header>
    )
}

export default Header;