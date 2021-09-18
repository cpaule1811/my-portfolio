import SkillItem from "../components/skillItem";
import Next from "../img/next-js.svg";
import Redux from "../img/redux.svg";
import JSlogo from "../img/logo-javascript.svg";
import DG from "../img/digitalocean.svg";
import reactIco from "../img/react-2.svg";
import nodeIco from "../img/nodejs-icon.svg";
import redisIco from "../img/redis.svg";
import npmIco from "../img/npm.svg";
import AWSIco from "../img/aws-2.svg";
import vsCodeIco from "../img/visual-studio-code-1.svg";
import cssIco from "../img/css-3.svg";
import htmlIco from "../img/html-1.svg";
import githubIco from "../img/github.svg";
import postgresIco from "../img/postgresql-blue.svg";

export default function Skills() {
  return (
    <>
      <div className="skills-title">I like to use tools like...</div>
      <div className="skill-wrapper">
        {skillList.map((skill) => {
          return (
            <SkillItem key={skill.name} icon={skill.icon} name={skill.name} />
          );
        })}
      </div>
    </>
  );
}

const skillList = [
  {
    icon: reactIco,
    name: "React",
  },
  {
    icon: Next,
    name: "Next JS",
  },
  {
    icon: Redux,
    name: "Redux",
  },
  {
    icon: JSlogo,
    name: "JavaScript",
  },
  {
    icon: nodeIco,
    name: "Node JS",
  },
  {
    icon: redisIco,
    name: "Redis",
  },

  {
    icon: AWSIco,
    name: "AWS",
  },
  {
    icon: cssIco,
    name: "CSS3",
  },
  {
    icon: htmlIco,
    name: "HTML5",
  },
  {
    icon: npmIco,
    name: "NPM",
  },
  {
    icon: postgresIco,
    name: "Postgres",
  },
  {
    icon: githubIco,
    name: "Github",
  },
  {
    icon: vsCodeIco,
    name: "VS Code",
  },
  {
    icon: DG,
    name: "Digital Ocean",
  },
];
