import React, { useState } from "react"
import DynamicHeader from "../../components/DynamicHeader"
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
    alt: 'cherryTree logo',
    href: 'https://cherryTree.cc',
    tagline: "Be more cherry'tible",
    description: [
      'Got a celebration and want to do some good? Or maybe you just don’t need anything else right now. If so, ask people to donate in name of your celebration instead!',
      'MERN app deployed via Azure (and Mongo Cosmos DB). Emails sent via mailgun. Payments processed with Stripe. Images hosted on AWS s3.'
    ],
    blobName: 'blob2',

  },
  {
    src: cleannupp,
    name: 'Cleann Upp',
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
    tagline: 'Ask Alexa for stuff to do in Austin',
    description: ['Ask Alexa for stuff to do and have the event info that you’re interested in texted to you via Twilio.'],
    blobName: 'blob4',

  },
  {
    name: 'Portfolio',
    tagline: 'Whoa! This site!',
    description: ['Created with Gatsby and styled with pure CSS.'],
    blobName: 'blob5',
  },
]
const CodePage = () => {
  const [selectedProject, setSelectedProject] = useState('wsidt')
  console.log('selectedProject :>> ', selectedProject);
  return (
    <main className="code-container">
      <DynamicHeader header="Code" headerArrowRight />
      <section className="project-section-container">
        {/* <ul className="projects">
          <li className="list-item-wsidt">What Should I Do Tonight</li>
          <li className="list-item-cherryTree">cherryTree</li>
          <li className="list-item-cleannUpp">Cleann Upp</li>
          <li className="list-item-doAustin">Do Austin</li>
          <li className="list-item-portfolio">Portfolio</li>
        </ul> */}
        <div className="projects">
          <div onClick={() => setSelectedProject('wsidt')} className={selectedProject === 'wsidt' ? 'selected' : 'list-item-wsidt'}>What Should I Do Tonight</div>
          <div onClick={() => setSelectedProject('cherryTree')}   className={selectedProject === 'cherryTree' ? 'selected' : 'list-item-cherryTree'}>cherryTree</div>
          <div onClick={() => setSelectedProject('cleannUpp')} className={selectedProject === 'cleannUpp' ? 'selected' : 'list-item-cleannUpp'}>Cleann Upp</div>
          <div onClick={() => setSelectedProject('doAustin')} className={selectedProject === 'doAustin' ? 'selected' : 'list-item-doAustin'}>Do Austin</div>
          <div onClick={() => setSelectedProject('portfolio')} className={selectedProject === 'portfolio' ? 'selected' : 'list-item-portfolio'}>Portfolio</div>
        </div>
        <section className="project-container">
          <div className={selectedProject === 'wsidt' ? 'project-container-wsidt' : 'hidden'}>wsidt</div>
          <div className={selectedProject === 'cherryTree' ? 'project-container-cherryTree' : 'hidden'}>cherrytree</div>
          <div className={selectedProject === 'cleannUpp' ? 'project-container-cleannUpp' : 'hidden'}>cleannupp</div>
          <div className={selectedProject === 'doAustin' ? 'project-container-doAustin' : 'hidden'}>do austin</div>
          <div className={selectedProject === 'portfolio' ? 'project-container-portfolio' : 'hidden'}>portfolio</div>
        </section>
      </section>
    </main>
  )
}

export default CodePage
