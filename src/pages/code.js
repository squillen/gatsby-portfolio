import React, { useState } from "react"
import DynamicHeader from "../../components/DynamicHeader"
import ReactMarkdown from "react-markdown"
import '../../styles/main.scss'
import WSIDT from '../images/code/what_should_i_do_tonight.png'
import cherryTree from '../images/code/cherryTree_logo.png'
import cleannupp from '../images/code/cleannupp_logo.png'
import blob1 from '../images/svgs/blobs/blob1.svg'
import blob2 from '../images/svgs/blobs/blob2.svg'
import blob3 from '../images/svgs/blobs/blob3.svg'
import blob4 from '../images/svgs/blobs/blob4.svg'
import blob5 from '../images/svgs/blobs/blob5.svg'

const blobs = {
  blob1,
  blob2,
  blob3,
  blob4,
  blob5,
}

const projects = [
  {
    src: WSIDT,
    codeRef: 'wsidt',
    name: 'What Should I Do Tonight',
    alt: 'What Should I Do Tonight logo',
    href: 'https://whatshouldidotonight.com',
    tagline: 'Stop searching. Start doing.',
    description: [
      "A site designed for nights. Get genuinely good ideas for things you can do right now. Find hidden gem shows, the best sites to learn how to code and cook, and novel ideas about how to make the most of your night.",
      "Next.js app deployed via Vercel. State managed with Redux. Mongo Atlas database. Contact emails sent via Nodemailer. Images hosted on AWS s3."
    ],
    blobName: 'blob1',
  },
  {
    src: cherryTree,
    name: 'cherryTree',
    codeRef: 'cherryTree',
    alt: 'cherryTree logo',
    href: 'https://cherryTree.cc',
    tagline: "Be more cherry'tible",
    description: [
      "When I was in my teens I started sending family members emails with the charities I'd like them to donate to instead of giving me gifts. (I'm not a saint, I didn't do it every year, OK?)",
      "I wanted them to donate for a couple of reasons:",
      "-  I was fortunate enough to really just not need anything else. \n-  Clutter is annoying. \n  -  I lived off of the smug sense of magnanimity I got from it. Kidding.",
      "When I got older and saw into the world of wedding registries, I again thought that I just wouldn't need all of that stuff! That's when I put two and two together and thought of making this site.",
      "cherryTree allows people who are celebrating special occasions to ask others to donate in lieu of giving gifts.",
      "It's a MERN app deployed via Azure (and Mongo Cosmos DB). Emails sent via mailgun. Payments processed with Stripe. Images hosted on AWS s3."
    ],
    blobName: 'blob2',

  },
  {
    src: cleannupp,
    name: 'Cleann Upp',
    codeRef: 'cleannUpp',
    alt: 'Cleann Upp logo',
    href: 'https://cleannupp.com',
    tagline: 'Get outside. Meet new people. Cleann Upp.',
    description: [
      'Do the activities you’d normally do (or maybe some you wouldn’t normally do!) but bring/meet a couple of friends and trash bags and get some karma out of it!',
      'MERN app deployed via Azure (and Mongo Cosmos DB). Images hosted on AWS s3 and AWS Cloudfront.'
    ],
    blobName: 'blob3',
  },
  {
    name: 'Do Austin',
    codeRef: 'doAustin',
    tagline: 'Ask Alexa for stuff to do in Austin',
    description: ['Ask Alexa for stuff to do and have the event info that you’re interested in texted to you via Twilio.'],
    blobName: 'blob2',

  },
  {
    name: 'Portfolio',
    codeRef: 'portfolio',
    tagline: "Hey! It's me, this site!",
    description: ['Created with Gatsby and styled with pure CSS.'],
    blobName: 'blob1',
  },
]
const CodePage = () => {
  const [selectedProject, setSelectedProject] = useState('wsidt')
  function handleProjectList({ codeRef, name }) {
    return (
      <li onClick={() => setSelectedProject(codeRef)} className={selectedProject === codeRef ? `selected-${codeRef}` : `list-item-${codeRef}`}>{name}</li>
    )
  }

  function handleProjectDisplay({ href, src, alt, blobName, tagline, codeRef, description }) {
    return (
    <div className={selectedProject === codeRef ? `project-container-${codeRef}` : 'hidden'}>
      <div className="tagline-container">
        <h2 className="tagline-container-header">{tagline}</h2>
        {blobName && <img src={blobs[blobName]} alt="blob" className='blob' />}
      </div>
      <div className="description-container">
      <div className="description">
          {description.map(d => <ReactMarkdown>{d}</ReactMarkdown>)}
        </div>
        {href && (
          <div className="media">
            <a href={href} rel="noreferrer" target="_blank">
              <img className="project-logo" src={src} alt={alt}/>
            </a>
          </div>
        )}  
      </div>
    </div>
    )
  }

  return (
    <main className="code-container">
      <DynamicHeader header="Code" headerArrowRight />
      <section className="project-section-container">
        <ul className="projects">
          {projects.map(handleProjectList)}
        </ul>
        <section className="project-container">
          {projects.map(handleProjectDisplay)}
        </section>
      </section>
    </main>
  )
}



export default CodePage
