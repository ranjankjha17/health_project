import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./styles/navbar.scss";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       window.scrollY > 100
//         ? setScrolled(true)
//         : scrolled
//         ? setScrolled(false)
//         : "";
//     });
//   });
  return (
    <div className={styles.wrapper}>
      <navbar
        className={
          "d-flex justify-content-between align-items flex-column flex-lg-row " +
          styles.main
        }
        style={scrolled ? { background: "", zIndex: 3 } : {}}
      >
        <div className="d-block d-lg-inline-block position-relative">
          <Link href="/">
            {/* <h3> */}
              {/* <img src="/assets/logo.svg" style={{ maxWidth: "15rem" }} /> */}
              <h3>logo</h3>
            {/* </h3> */}
          </Link>
          <div
            className={"d-flex flex-column d-lg-none " + styles.bars}
            onClick={() => setHamburgerActive(!hamburgerActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="d-lg-flex align-items-center d-none ">
          <Link href="/interview">
            <h3 className=" mx-4" style={{ fontSize: "20px" }}>
              Interview
            </h3>
          </Link>

          {/* <h3
            className=" mx-4"
            style={{ fontSize: "20px" }}
            href="https://docs.bulian.ai/bulianai-overview/"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </h3> */}
          <Link href="/blog">
            <h3 className=" mx-4" style={{ fontSize: "20px" }}>
              Blog
            </h3>
          </Link>
         
          <Link href="/about">
            <h3 className=" mx-4" style={{ fontSize: "20px" }}>
              About
            </h3>
          </Link>
          <Link href="/">
            <h3 className="  mx-4" style={{ fontSize: "20px" }}>
             Login
            </h3>
          </Link>
        </div>
        <div
          className={
            "d-flex flex-column d-lg-none " +
            styles.mobileMenu +
            " " +
            (hamburgerActive ? styles.mobileMenuExpand : "")
          }
        >
          <Link href="/interview">
            <h3 className="  mt-3 my-3" style={{ fontSize: "20px" }} onClick={() => setHamburgerActive(false)}>
              Interview
            </h3>
          </Link>
          {/* <h3
            className="  my-3"
            style={{ fontSize: "20px" }}
            href="https://docs.bulian.ai/bulianai-overview/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setHamburgerActive(false)}
          >
            Documentation
          </h3> */}
          <Link href="/blog">
            <h3 className="  my-3" style={{ fontSize: "20px" }} onClick={() => setHamburgerActive(false)}>
              Blog
            </h3>
          </Link>
          
          <Link href="/about">
            <h3 className=" my-3" style={{ fontSize: "20px" }}  onClick={() => setHamburgerActive(false)}>
              About
            </h3>
          </Link>
          <Link href="/">
            <h3 className="  my-3" style={{ fontSize: "20px" }} onClick={() => setHamburgerActive(false)}>
              Login
            </h3>
          </Link>
          <Link href="/">
            <h3 className="my-3" style={{ fontSize: "20px" }}  onClick={() => setHamburgerActive(false)}>
              Join Us
            </h3>
          </Link>
        </div>
        <Link href="/">
          <h3 className="inline-block text-decoration-none text-black">
            <Button
              className="d-none d-lg-inline-block"
              style={{ fontSize: "20px" }}
              onClick={() => setHamburgerActive(false)}
            >
              Join Us
            </Button>
          </h3>
        </Link>
      </navbar>
    </div>
  );
};

export default Navbar;