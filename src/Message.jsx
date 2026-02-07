import { useEffect, useState } from "react";
const Message = () => {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 3500);

  return (
    <>
      {loader ? (
        <div className="loader">
          <div className="loader-text">Loading</div>
          <div className="loader-icon">
            <img src="/images/cat_dance.gif" height={150} width={100} />
          </div>
        </div>
      ) : (
        <div className="message">Will you be my Valentine?</div>
      )}
    </>
  );
};
export default Message;
