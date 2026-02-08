import { useEffect, useState, useRef } from "react";
const NoBtnContent = () => {
  const [button, setButton] = useState("");

  const happyAudioRef = useRef(null);
  const meowSadAudioRef = useRef(null);

  const handleSureYes = () => {
    if (!meowSadAudioRef.current) {
      meowSadAudioRef.current = new Audio("/meowSad.mp3");
    }
    meowSadAudioRef.current.currentTime = 0;
    meowSadAudioRef.current.play();
    setButton("no");
  };
  const handleSureNo = () => {
    setButton("yes");
    if (!happyAudioRef.current) {
      happyAudioRef.current = new Audio("/happyhappy.mp3");
    }
    happyAudioRef.current.currentTime = 0;
    happyAudioRef.current.play();
  };

  useEffect(() => {
    return () => {
      if (happyAudioRef.current) {
        happyAudioRef.current.pause();
        happyAudioRef.current.currentTime = 0;
      }
      if (meowSadAudioRef.current) {
        meowSadAudioRef.current.pause();
        meowSadAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (button === "") {
      const susAudio = new Audio("/SusSound.mp3");
      susAudio.play();
    }
  }, [button]);

  return (
    <>
      {button === "" ? (
        <div className="susDog">
          <img
            className="sus-dog"
            src="/images/sus-dog.gif"
            height={200}
            width={300}
          />
          <>
            <div className="sure-message">Are you sure ?</div>
            <div className="sure-option-btns">
              <img
                className="yes-btn"
                onClick={handleSureYes}
                src="/images/YesBtn.png"
                height={80}
                width={80}
              />
              <img
                className="no-btn"
                onClick={handleSureNo}
                src="/images/NoBtn.png"
                height={80}
                width={80}
              />
            </div>
          </>
        </div>
      ) : button === "yes" ? (
        <div className="yes-message">
          I knew it!
          <img
            className="yes-gif"
            src="/images/idc.gif"
            height={250}
            width={250}
          />
        </div>
      ) : (
        <div className="no-message">
          You are a lying
          <img
            className="no-gif"
            src="/images/crying.gif"
            height={250}
            width={250}
          />
        </div>
      )}
    </>
  );
};
export default NoBtnContent;
