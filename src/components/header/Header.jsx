import "./Header.css";
import PageContainer from "../container/PageContainer";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
function Header() {
  return (
    <div className="header">
      <PageContainer>
        <div className="header-container">
          <div>
            <hr className="hr" />
            <p className="first-text">sense code ai</p>
          </div>
          <h1>
            the beginning <br /> of dreams{" "}
            <AllInclusiveIcon className="infinite" />
          </h1>
          <p className="last-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus <br /> hic quae necessitatibus reiciendis reprehenderit
            eligendi.
          </p>
          {/* <div className="btn">Wiew product</div> */}
        </div>
      </PageContainer>
    </div>
  );
}

export default Header;
