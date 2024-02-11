import "./Header.css";
import { Organization } from "../Organization/Organization";
import { Administration } from "../Administration/Administration";


export  const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">BitTest</div>
          <Organization />
          <Administration />
        </div>
      </div>
    </header>
  );
};
