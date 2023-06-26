import React from 'react'
import Header from '../components/Header';

export default function Minimalism() {
  return (
    <>
      <div className="background" />
      <Header />
      <div className="whitespace" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-sm-2" />
          <div className="col-10 col-sm-8">
            <h1 className="title">Juan José Farina</h1>
            <h2 className="subtitle">Full-Stack Developer</h2>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className="subtitle">Contact Information</h2>
            <ul>
              <li>Email: </li>
              <li>Phone: </li>
              <li>Linkedin: </li>
              <li>Gitub: </li>
            </ul>
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
            <ul>
              <li>Arte Numerológico</li>
              <li>Academia Rosario Ballet</li>
              <li>FCC Back-End Projects</li>
              <li>Meta Capstone Project</li>
              <li>FCC Front-End Projects</li>
              <li>Legacy Projects</li>
            </ul>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className="subtitle">Contact</h2>
            <form>

            </form>
            <div className="whitespace" />
            <div className="whitespace" />
          </div>
          <div className="col-1 col-sm-2" />
        </div>
      </div>
    </>
  )
}