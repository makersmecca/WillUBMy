import { useState } from "react";
const NoBtnContent = () => {
  const [button, setButton] = useState("");
  const handleSureYes = () => {
    setButton("no");
  };
  const handleSureNo = () => {
    setButton("yes");
  };
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
            height={150}
            width={150}
          />
        </div>
      ) : (
        <div className="no-message">
          You are a lying
          <img
            className="no-gif"
            src="/images/crying.gif"
            height={150}
            width={150}
          />
        </div>
      )}
    </>
  );
};
export default NoBtnContent;
