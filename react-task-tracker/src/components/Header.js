import PropTypes from 'prop-types'


const Header = ({title}) => {

    return(
        <header className="container">
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}


export default Header