import React from 'react'
import './landing.css';
import { Navbar, CTA } from './../../components';

const Landing = () => {
  return (
    <div className="landing">
      <Navbar/>
      <section className="first">

        <div className="title-tagline">
          <h1 className='gradient-text'>
            Upload. Scan. Analyze.
          </h1>
          <h2 className="tagline">
            A static code analysis toolkit to scan vulnerabilities blazing fast.
          </h2>
        </div>

        <div className="title-input">
          <span className="instruct">
            Just paste your GitHub/Gitlab repository link.
          </span>

          <div className="input-repo">
            <label htmlFor="name"></label>
            <input placeholder='https://github.com/<username>/<repo-name>' type="text" id="repo-link" name="repo-link" required />
          </div>
        </div>

        <CTA text="Start Ananlyzing" />

      </section>
    </div> 
  )
}

export default Landing
