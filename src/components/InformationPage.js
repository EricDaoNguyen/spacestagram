import React from 'react';
import NavBar from './NavBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FolderIcon from '@mui/icons-material/Folder';
import Link from '@material-ui/core/Link';

export default function InformationPage() {
  return (
    <>
      <NavBar />
      <div className="information-page-icons">
        <Link href="https://github.com/EricDaoNguyen/spacestagram" target="_blank"><FolderIcon /></Link>
        <Link href="https://www.linkedin.com/in/ericdaonguyen/" target="_blank"><LinkedInIcon /></Link>
        <Link href="https://github.com/EricDaoNguyen" target="_blank"><GitHubIcon /></Link>
      </div>
      <div className="information-page-text">
        <p>
          After serving the Marine Corps from 2013 to 2017 and training my clients for a couple of years as a personal trainer afterwards, I decided to make a career change and follow my passion for computers and start creating projects with code. Jumping into software development and attending at Fullstack Academy was the best decision I've ever made as I love creating new applications while being in the process of learning something new each day! As of now, I'm a recent graduate and also a teaching fellow of Fullstack Academy.
        </p>
        <p>
          Proficient: JavaScript, HTML, CSS, Git, Github, Node/Express, React, React Native, Redux, PostgreSQL, Sequelize, Firebase, and Cloud Firestore.
        </p>
        <p>
          Some Familiarity: Java, Python.
        </p>
      </div>
    </>
  )
}
