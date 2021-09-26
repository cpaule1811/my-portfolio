import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import me from "../img/charlie.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBriefcase,
  faIdCard,
  faStar,
  faFileDownload,
  faMinusSquare,
  faCaretSquareLeft,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [minimized, toggleMinimized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth <= 900) {
      const handleRouteChange = (url, { shallow }) => {
        toggleMinimized(true);
      };

      router.events.on("routeChangeStart", handleRouteChange);

      return () => {
        router.events.off("routeChangeStart", handleRouteChange);
      };
    }
  }, [toggleMinimized, router]);

  return (
    <div className={`sidebar ${minimized && "sidebar-mini"}`}>
      {!minimized ? (
        <>
          <div className="topbar">
            <div
              className="minimise"
              onClick={() => toggleMinimized(!minimized)}
            >
              <FontAwesomeIcon
                className="icon-toggle"
                size="2x"
                icon={faMinusSquare}
                color="var(--dark-red)"
              />
            </div>
          </div>
          <div className="round-img">
            <Image src={me} alt="me" />
          </div>
        </>
      ) : (
        <div className="minimise" onClick={() => toggleMinimized(false)}>
          <FontAwesomeIcon
            icon={faCaretSquareLeft}
            size="2x"
            color="var(--dark-red)"
          />
        </div>
      )}
      <div className={`nav ${minimized && "nav-mini"}`}>
        <Link href="/" passHref>
          <div className="tab">
            <FontAwesomeIcon icon={faHome} size="lg" color="var(--dark-red)" />
            {!minimized && <span>HOME</span>}
          </div>
        </Link>
        <Link href="/projects" passHref>
          <div className="tab">
            <FontAwesomeIcon
              size="lg"
              icon={faBriefcase}
              color="var(--dark-red)"
            />
            {!minimized && <span>PROJECTS</span>}
          </div>
        </Link>
        <Link href="/skills" passHref>
          <div className="tab">
            <FontAwesomeIcon size="lg" icon={faStar} color="var(--dark-red)" />
            {!minimized && <span>SKILLS</span>}
          </div>
        </Link>
        <Link href="/contact" passHref>
          <div className="tab">
            <FontAwesomeIcon
              size="lg"
              icon={faIdCard}
              color="var(--dark-red)"
            />
            {!minimized && <span>CONTACT</span>}
          </div>
        </Link>
      </div>
      {!minimized && (
        <div className="social-wrapper">
          <Link href="https://www.linkedin.com/in/charlie-edwards-52025b188/">
            <a rel="noreferrer" target="_blank">
              <FontAwesomeIcon
                className="icon-social"
                size="2x"
                icon={faLinkedin}
                color="var(--dark-red)"
              />
            </a>
          </Link>
          <Link href="https://github.com/cpaule1811">
            <a rel="noreferrer" target="_blank">
              <FontAwesomeIcon
                className="icon-social"
                size="2x"
                icon={faGithub}
                color="var(--dark-red)"
              />
            </a>
          </Link>
          <a
            href="Charlie_Edwards_Resume.pdf"
            rel="noreferrer"
            title="Download Resume"
            download
          >
            <FontAwesomeIcon
              className="icon-social"
              size="2x"
              icon={faFileDownload}
              color="var(--dark-red)"
            />
          </a>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
