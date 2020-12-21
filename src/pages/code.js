import * as React from "react"
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
    // blobName: 'blob2',

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
  return (
    <main className="code-container">
      <DynamicHeader header="Code" headerArrowRight />
      <section className="project-section-container">
        {
          projects.map(project => {
            const { blobName, src, alt, href, name, tagline, description } = project
            return (
              <section key={name} className="project-section">
                <div className="section-left">
                  {
                    href
                      ? (
                        <a href={href} rel="noreferrer" target="_blank">
                          <img className="project-logo" src={src} alt={alt}/>
                        </a>
                      )
                      : <h2 className="project-name">{name}</h2>
                  }
                </div>
                <div className="section-right">
                  <h3>{tagline}</h3>
                  <p>{description.map(d => <p key={d.slice(0, 5)}>{d}</p>)}</p>
                  {blobName && <img src={blobs[blobName]} alt="blob" className={`section-right-${blobName}`} />}
                </div>
              </section>
            )
          })
        }
      </section>
    </main>
  )
}

export default CodePage
