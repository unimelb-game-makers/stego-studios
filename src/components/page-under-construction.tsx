import "../styles/page-under-construction.css";

const PageUnderConstruction = () => {
  return (
    <div className="construction-page">
      <h1 className="construction-title">
        This page is currently under construction
      </h1>
      <p className="construction-text">
        Would you like to go{" "}
        <a href="/" className="not-found-link">
          home
        </a>
        ?
      </p>
    </div>
  );
};

export { PageUnderConstruction };
