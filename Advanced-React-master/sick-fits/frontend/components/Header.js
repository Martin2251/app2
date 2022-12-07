import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="bar">
        <Link href="/">sick fits</Link>
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
      <Nav />
    </header>
  );
};
export default Header;
