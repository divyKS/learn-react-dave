const Footer = ({ length }) => {
  const date = new Date()
  return (
    <footer>
        You have {length} list items.
        <br/>
        Copyright &copy; {date.getFullYear()}
    </footer>
  )
}

export default Footer