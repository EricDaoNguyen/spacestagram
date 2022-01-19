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
      <div className="information-page">
        <Link href="https://github.com/EricDaoNguyen/spacestagram" target="_blank"><FolderIcon /></Link>
        <Link href="https://www.linkedin.com/in/ericdaonguyen/" target="_blank"><LinkedInIcon /></Link>
        <Link href="https://github.com/EricDaoNguyen" target="_blank"><GitHubIcon /></Link>
      </div>
    </>
  )
}
