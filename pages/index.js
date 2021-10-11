import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
        <div className="main sidebar-margin">
          <div className="heading">
            Charlie Edwards
            <div className="blurb">
              Hi there, I am a <span>Web Developer </span>
              based in Sydney. I love making Web applciations using{" "}
              <span className="red">React</span> and{" "}
              <span className="red">Next.js</span>. Check out some of my
              projects:
            </div>
            <Link href="/projects" passHref>
              <a>
                <button className="contact-send-button button-pos">
                  View <br /> Projects
                </button>
              </a>
            </Link>
          </div>
        </div>
    </div>
  );
}
