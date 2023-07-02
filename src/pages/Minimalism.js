import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Minimalism() {
  return (
    <>
      <div className="background" />
      <div className="whitespace" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-sm-2" />
          <div className="col-10 col-sm-8">
            <h1 className="title">Juan José Farina</h1>
            <h2 className="subtitle">Full-Stack Developer</h2>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className="subtitle">About Me</h2>
            <p>I'm a highly collaborative and efficient developer with vast trajectory in development and vast experience in business work environments and leading groups.</p>
            <p>I'm Founder and CEO of a big ballet school leading more than 10 employees under a Scrum framework and I have been conducting classes, seminars and certifications nationally and internationally for more than 10 years, with participantes from Argentina, Chile, Uruguay, Venezuela, Dominican Republic, Spain and more.</p>
            <p>I've studied Computer Science since 2010, taken numerous courses and certifications, made numerous projects and volunteer works and I'm also a member of Mensa with over 132 CI.</p>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className="subtitle">Skills</h2>
            <ul>
              <li>Front-End Development: HTML, CSS and JS, with React, Bootstrap, jQuery, MaterialUI, etc.</li>
              <li>Back-End Development: PHP, JAVA, Node, Express, Mongoose, etc.</li>
              <li>Databases: MySQL and MongoDB</li>
              <li>Tools/Techs: Jest, Git/Github, Docker, Cloud, etc.</li>
              <li>Knowledge: OOP, TDD, BDD, CI/CD, Scrum, Gherkin, etc.</li>
            </ul>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className="subtitle">Projects</h2>
            <details>
              <summary>Arte Numerológico</summary>
                <div className="projectDetails">
                  <div>Proyecto personal realizado en colaboración con la diseñadora UX/UI Luisina Banega</div>
                  <img alt="Inicio de Arte Numerológico" />
                </div>
            </details>
            <details>
              <summary>Academia Rosario Ballet</summary>
                <div className="projectDetails">
                  <div>Sitio institucional para Academia Rosario Ballet</div>
                  <img alt="Inicio de Academia Rosario Ballet" />
                </div>
            </details>
            <details>
              <summary>FCC Back-End Projects</summary>
                <div className="projectDetails">
                  <div>Proyectos finales de la certificación en Back-End de freeCodeCamp</div>
                  <img alt="Página de Replit" />
                </div>
            </details>
            <details>
              <summary>Meta Capstone Project</summary>
                <div className="projectDetails">
                  <div>Proyecto final de la Certificación Profesional en Desarrollador de Front-End de Meta</div>
                  <img alt="Inicio de Little Lemon" />
                </div>
            </details>
            <details>
              <summary>FCC Front-End Projects</summary>
                <div className="projectDetails">
                  <div>Proyectos finales de la certificación en Front-End de freeCodeCamp</div>
                  <img alt="Página de CodePen" />
                </div>
            </details>
            <details>
              <summary>Legacy Projects</summary>
                <div className="projectDetails">
                  <div>Proyectos personales realizados durante 2010-2022</div>
                  <img alt="Inicio de mi antiguo portfolio" />
                </div>
            </details>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className="subtitle">Contact Information</h2>
            <ul className="contactList">
              <li>
                <a href="https://linkedin.com/in/juanjosefarina" target="_blank" rel="noopener noreferrer" title="https://linkedin.com/in/juanjosefarina">
                  <FontAwesomeIcon icon={faLinkedin} className="fab" />
                </a>
              </li>
              <li>
                <a href="https://github.com/juanjfarina" target="_blank" rel="noopener noreferrer" title="https://github.com/juanjfarina">
                  <FontAwesomeIcon icon={faGithubSquare} className="fab" />
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juanjosefarina.jjf@gmail.com" target="_blank" rel="noopener noreferrer" title="juanjosefarina.jjf@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="fab" />
                </a>
              </li>
            </ul>
            <div className="whitespace" />
            <div className="whitespace" />
          </div>
          <div className="col-1 col-sm-2" />
        </div>
      </div>
    </>
  )
}