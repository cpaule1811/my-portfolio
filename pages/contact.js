import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [mobile, setMobile] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const [status, setStatus] = useState({ success: false, statusMessage: "" })

  const submitEmail = async(e) => {
    e.preventDefault()
    const resp = fetch("/api/mail", { 
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        subject,
        mobile,
        message
      }),
      headers: {
        'Content-Type': 'applciation/json'
      }
    })
    const status = await resp.json()
    setStatus(status)
  }

  return (
    <div className="form-container">
      <div className="form-heading">Get In Touch</div>
      <form onSubmit={(e) => submitEmail(e)} className="form n-center">
        <div className="form-first-row">
          <div className="form-outline">
            <span id="name-required" className="required" hidden>
              Invalid name*
            </span>
            <input onChange={(e) => setName(e.target.value)} type="text" id="name" className="form-control" required />
            <label className="form-label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-outline">
            <span id="mobile-required" className="required" hidden>
              Invalid mobile*
            </span>
            <input onChange={(e) => setMobile(e.target.value)} type="text" id="number" className="form-control" required />
            <label className="form-label" htmlFor="number">
              Mobile
            </label>
          </div>
        </div>

        <div className="form-outline">
          <span id="email-required" className="required" hidden>
            Invalid email*
          </span>
          <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="form-control" required />
          <label className="form-label" htmlFor="email">
            Email address
          </label>
        </div>
        <div className="form-outline">
          <span id="subject-required" className="required" hidden>
            Invalid subject*
          </span>
          <input onChange={(e) => setSubject(e.target.value)} type="text" id="email" className="form-control" required />
          <label className="form-label" htmlFor="subjectl">
            Subject
          </label>
        </div>

        <div className="form-outline">
          <textarea onChagne={(e) => setMessage(e.target.value)} id="message" className="form-control" required></textarea>
          <label htmlFor="message" className="form-label-textarea">
            Message
          </label>
        </div>

        <input
          type="submit"
          id="send"
          className="contact-send-button button-style"
          value="Send"
        />
      </form>

      <div>
        <p>or reach out on:</p>
        <Link href="https://www.linkedin.com/in/charlie-edwards-52025b188/">
          <a rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              className="contact-icon"
              size="2x"
              icon={faLinkedin}
              color="light-gray)"
            />
          </a>
        </Link>
        <Link href="https://github.com/cpaule1811">
          <a rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              className="contact-icon"
              size="2x"
              icon={faGithub}
              color="light-gray"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
