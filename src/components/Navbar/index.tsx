import { useEffect, useState } from "react";
import NavbarStyles from "./Navbar.module.scss";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
// import { small_logo, logo_black } from "../../assets/images/index";

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navControls = useAnimation();
  const logoControls = useAnimation();
  const menuListControls = useAnimation();

  // Animate logo and ul list on first page render
  useEffect(() => {
    menuListControls.start({
      opacity: 1,
      transition: { delay: 0.5, ease: "easeIn" },
    });

    logoControls.start({
      opacity: 1,
      transition: {
        delay: 0.3,
        ease: "easeIn",
      },
    });
  }, []);

  const toggleNav = () => {
    setNavActive(!navActive);

    if (!navActive) {
      navControls.start({
        scaleY: 1,
        transition: { duration: 0.3, ease: [1, 2, 3, 4] },
      });
      menuListControls.start({
        opacity: 1,
        transition: { delay: 0.8, ease: "easeIn" },
      });
    } else {
      menuListControls.start({
        opacity: 0,
        transition: { ease: "easeIn" },
      });
      navControls.start({ scaleY: 0, transition: { delay: 0.5 } });
    }
  };

  return (
    <nav className={NavbarStyles.nav}>
      <div className={NavbarStyles.nav__container}>
        <Link to="/">
          <motion.div
            className={NavbarStyles.logo}
            initial={{ opacity: 0 }}
            animate={logoControls}
          >
            <img
              src={navActive ? "/webs_white.svg" : "webs_black.svg"}
              alt="Techelons"
              className="w-10 h-10"
            />
            <h1
              className={`hidden sm:flex items-center font-poppins text-xl font-bold ${
                navActive ? "text-black" : "text-white"
              }`}
            >
              &nbsp;WEBSTERS
            </h1>
          </motion.div>
        </Link>
        <div className={NavbarStyles.nav__menu}>
          <div
            className={`${NavbarStyles.nav_toggler} ${
              navActive ? NavbarStyles.active : ""
            }`}
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
          </div>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={navControls}
            className={`${NavbarStyles.nav__menu_bg} ${
              navActive ? NavbarStyles.active : ""
            }`}
          ></motion.div>
          <motion.ul
            className={`${NavbarStyles.nav__menu_list} ${
              navActive ? NavbarStyles.active : ""
            }`}
            initial={{ opacity: 0 }}
            animate={menuListControls}
          >
            <li>
              <Link to="/">
                <a className="flex items-center">&nbsp; Home</a>
              </Link>
            </li>
            <li>
              <Link to="/team">
                <a className="flex items-center">&nbsp; team</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a className="flex items-center">&nbsp; About Us</a>
              </Link>
            </li>
            <li>
              <Link to="/events">
                <a className="flex items-center">&nbsp; Events</a>
              </Link>
            </li>
            <li>
              <Link to="/Techelons">
                <a className="flex items-center">&nbsp; Techelons</a>
              </Link>
            </li>
            <li>
              <Link to="/contactUs">
                <a className="flex items-center">&nbsp; Contact Us</a>
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
