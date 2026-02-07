import "./App.css";
const Landing = ({ setCurrentPage, maximize }) => {
  return (
    <div className={`${maximize ? "max-content" : "content"}`}>
      <button className="pixel-btn" onClick={() => setCurrentPage("message")}>
        You have a new Message!!
      </button>
      <div className={`${maximize ? "max-cat-gif" : "cat-gif"}`}>
        <img
          className="landing-cat"
          src="/images/cat-heart2.gif"
          height={100}
          width={120}
          onClick={() => setCurrentPage("message")}
        />
      </div>
    </div>
  );
};

export default Landing;
