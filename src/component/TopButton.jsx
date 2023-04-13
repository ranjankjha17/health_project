import { FaCaretUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const TopButton = () => {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    function checkScroll() {
      if (window.scrollY >= 500) {
        setVisible(true);
      } else setVisible(false);
    }
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <a
      onClick={() => window.scrollTo(0, 0)}
      className={isVisible ? "d-none d-md-flex" : "d-none"}
      style={{
        backgroundColor: "var(--bs-primary-color)",
        position: "fixed",
        bottom: "25px",
        right: "25px",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        zIndex: "2",
        // display: isVisible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "Center",
        cursor: "pointer",
      }}
     
    >
      {" "}
      <FaCaretUp fontSize={"1.5rem"} />
    </a>
  );
};

export default TopButton;