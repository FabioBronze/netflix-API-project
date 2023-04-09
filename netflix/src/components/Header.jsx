// CSS
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "header-black" : ""}>
      <div className="header-logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix Logo"
          />
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User Logo"
          />
        </a>
      </div>
    </header>
  );
};
