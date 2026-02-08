import { useEffect, useState, useRef } from "react";
import NoBtnContent from "./NoBtnContent";
const Message = () => {
  const [loader, setLoader] = useState(true);
  const [button, setButton] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const prettyAudioRef = useRef(null);
  const happyAudioRef = useRef(null);

  useEffect(() => {
    if (!prettyAudioRef.current) {
      prettyAudioRef.current = new Audio("/prettylil.mp3");
    }

    if (button === "") {
      prettyAudioRef.current.play();
    } else {
      prettyAudioRef.current.pause();
      prettyAudioRef.current.currentTime = 0;
    }
    return () => {
      prettyAudioRef.current.pause();
    };
  }, [button]);

  const handleYes = () => {
    setButton("yes");
    if (!happyAudioRef.current) {
      happyAudioRef.current = new Audio("/happyhappy.mp3");
    }
    happyAudioRef.current.currentTime = 0;
    happyAudioRef.current.play();
    // const happyAudio = new Audio("/happyhappy.mp3");
    // happyAudio.play();
  };

  useEffect(() => {
    return () => {
      if (happyAudioRef.current) {
        happyAudioRef.current.pause();
        happyAudioRef.current.currentTime = 0;
      }
    };
  }, []);

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
              <div className="confetti-container">
                <img className="confetti-gif1" src="/images/confetti.gif" />
                <img className="confetti-gif2" src="/images/confetti.gif" />
              </div>
              <div className="yes-gifs">
                <img src="/images/cat_heart.gif" height={180} width={180} />
                <img src="/images/idc.gif" height={180} width={180} />
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
