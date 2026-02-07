import { useEffect, useState } from "react";
import NoBtnContent from "./NoBtnContent";
const Message = () => {
  const [loader, setLoader] = useState(true);
  const [button, setButton] = useState("");

  setTimeout(() => {
    setLoader(false);
  }, 2500);

  const handleYes = () => {
    setButton("yes");
  };
  const handleNo = () => {
    setButton("no");
  };

  return (
    <div
      className={`${button === "" ? "msg-comp" : button === "yes" ? "msg-comp-yes" : "msg-comp-no"}`}
    >
      {loader ? (
        <div className="loader">
          <div className="loader-text">Loading</div>
          <div className="loader-icon">
            <img src="/images/cat_dance.gif" height={150} width={100} />
          </div>
        </div>
      ) : (
        <>
          {button === "" ? (
            <>
              <div className="message">Will you be my Valentine?</div>
              <div className="option-btns">
                <img
                  className="yes-btn"
                  onClick={handleYes}
                  src="/images/YesBtn.png"
                  height={80}
                  width={80}
                />
                <img
                  className="no-btn"
                  onClick={handleNo}
                  src="/images/NoBtn.png"
                  height={80}
                  width={80}
                />
              </div>
            </>
          ) : button === "yes" ? (
            <div className="yesMessage">
              <span className="yes-text">Yaaayyy!!!!</span>
              <div>
                <img className="confetti-gif" src="/images/confetti.gif" />
              </div>
              <div className="yes-gifs">
                <img src="/images/cat_heart.gif" height={150} width={150} />
                <img src="/images/idc.gif" height={150} width={150} />
              </div>
            </div>
          ) : (
            <NoBtnContent />
          )}
        </>
      )}
    </div>
  );
};
export default Message;
