import "../styles/not-found-page.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-title">Uh oh, this page was not found</h1>
      <p className="not-found-text">
        Would you like to go <a href="/" className="not-found-link">home</a>?
      </p>
    </div>
  );
};

export default NotFoundPage;
