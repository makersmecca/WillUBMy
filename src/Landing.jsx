import "./App.css";
const Landing = ({ setCurrentPage, maximize }) => {
  return (
    <div className={`${maximize ? "max-content" : "content"}`}>
      <button className="pixel-btn" onClick={() => setCurrentPage("message")}>
        <img src="/images/envelope.png" height={40} width={80} />
        <span>You have a new Message!!</span>
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
