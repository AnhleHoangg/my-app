import Header from "../components/Header";

function HeaderOnly({ children }) {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div className="Container" style={{ height: "100%" }}>
        <div className="content" style={{ height: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeaderOnly;
