const Header = (props) => {
  return (
    <header>
        <h2>
          {props.title} List
        </h2>
    </header>
  )
}

// just in case the props were not provided were can have the deafult prop sets for a component so that those can be used just in case
Header.defaultProps = {
  title: "Default Title"
}

export default Header