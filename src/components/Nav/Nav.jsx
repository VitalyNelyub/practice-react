const { Link } = require('react-router-dom');

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link>Home</Link>
        <Link>Add</Link>
      </ul>
    </nav>
  );
};

export default Nav;
