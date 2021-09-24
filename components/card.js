import Image from "next/image";
import Link from "next/link";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({
  background,
  title,
  contribution,
  links,
  description,
  tools,
}) {
  return (
    <div className="outer-card-container">
      <div className="card-container">
        <div className="card-image-container">
          <Image
            className="card-image"
            src={background}
            width={300}
            height={180}
            alt=""
          />
        </div>
        <div className="card-info-wrapper">
          <div>
            <div className="card-title">{title}</div>
            <div className="card-contribution">{contribution}</div>
          </div>
          <div className="card-description">{description}</div>
          <div className="tools">
            {tools.map((item, i) => {
              return (
                <Image
                  key={item.name}
                  title={item.name}
                  src={item.ico}
                  width={30}
                  height={30}
                  alt=""
                />
              );
            })}
          </div>
          <div className="card-buttons">
            <Link href={links.github}>
              <a target="_blank" rel="noreferrer">
                <button>
                  <FontAwesomeIcon icon={faGithub} color="#BE2F29" /> Source
                </button>
              </a>
            </Link>
            {links.live && 
            <Link href={links.live}>
              <a target="_blank" rel="noreferrer">
                <button>
                  <FontAwesomeIcon icon={faPlay} color="#BE2F29" /> Demo
                </button>
              </a>
            </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
