import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import DefaultHelmet from "../../components/DefaultHelmet"
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
    codeRef: 'wsidt',
    name: 'What Should I Do Tonight',
    alt: 'What Should I Do Tonight logo',
    href: 'https://whatshouldidotonight.com',
    tagline: 'A good night in a site.',
    description: [
      "The site designed for nights. I got the idea after doing a web search for things to do that night before going to my girlfriend's house. There were a couple of scattered results and none of them good, so I thought I'd make one of my own!",
      "It originally started as a random idea generator but, to appease the Google Gods, I decided to make it into more of a mainstream site with articles, reviews, and ideas, all centered around making peoples' nights better.",
      "It's a Next.js app deployed via Vercel. State managed with Redux. Mongo Atlas database. Contact emails sent via Nodemailer. Images hosted on AWS s3."
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
      "cherryTree is a site that allows people who are celebrating special occasions to ask others to donate to charities in lieu of giving them gifts.",
      "When I was in my teens I started sending family members emails with the charities I'd like them to donate to instead of giving me gifts for Christmas. But before I sound too self-congratulatory, let me say that I didn't do it every Christmas, just a couple. 😅",
      "I wanted them to donate for a couple of reasons:",
      "-  I was fortunate enough to really just not need anything else. \n-  Clutter is annoying. \n  -  I lived for the smug sense of magnanimity I got from it. Kidding.",
      "When I got older and saw into the world of wedding registries, I again thought that I just wouldn't need all of that stuff! That's when I put two and two together and thought of making this site.",
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
      "Like a lot of people, I like to get out in nature and hike. You might understand, then, the frustration and sadness that comes from seeing trash in an otherwise gorgeous setting. It instantly takes you out of them moment and reminds you of our negative impact on the world.",
      "So, to help, I started bringing trash bags with me and filling them up. People would comment about how it was a good, noble idea, so I then thought that others might enjoy doing the same thing. And, voila, Clean Up was born! Then, when I realized Clean Up was taken, voila! Cleann Upp was born! 😉",
      'The idea is simple: do the activities you’d normally do (or maybe some you wouldn’t normally do!) but bring some trash bags and some friends (or meet some there) and get some karma out of it!',
      "It's MERN app deployed via Azure (and Mongo Cosmos DB). Images hosted on AWS s3 and AWS Cloudfront.",
    ],
    blobName: 'blob3',
  },
  {
    name: 'Do Austin',
    codeRef: 'doAustin',
    tagline: "Alexa, what's going on in Austin tonight?",
    description: [
      "If you haven't heard, Austin is a pretty cool city. It's got so much going on, though, that a person could easily miss most of it! To help keep on top of it, I use the site [do512](https://do512.com/), which I thought I could also use as a fun way to learn how to create Alexa apps.",
      "You can ask her things like: \"Hey Alexa, ask Do Austin for some free things going on tomorrow night.\" She'll then reply with a list of things to do. If you're interested in a particular event, she can text you more details via Twilio.",
    ],
    blobName: 'blob4',
  },
  {
    name: 'Portfolio',
    codeRef: 'portfolio',
    tagline: "Hey! It's me, this site!",
    description: [
      "This site was created with Gatsby and pure css.",
      "I feel like I need to say more. It was also made with ❤️"
    ],
    blobName: 'blob5',
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
      {href && (
        <div className="media-mobile">
          <a href={href} rel="noreferrer" target="_blank">
            <img className="project-logo" src={src} alt={alt}/>
          </a>
        </div>
      )}  
      <div className="tagline-container">
        <h2 className="tagline-container-header">{tagline}</h2>
        {blobName && <img src={blobs[blobName]} alt="blob" className='blob' />}
      </div>
      <div className="description-container">
      <div className="description">
          {description.map(d => <ReactMarkdown>{d}</ReactMarkdown>)}
        </div>
        {href && (
          <div className="media-desktop">
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
      <DefaultHelmet
        title="Code - Sean Quillen"
        description="Sean Quillen shares a couple of sites he created, including What Should I Do Tonight (whatshouldidotonight.com), a site to find things to do tonight, a charity-based gift site, cherryTree (cherrytree.cc), and a friend-finding, good-doing site called Cleann Upp (cleannupp.com)."
      />
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
