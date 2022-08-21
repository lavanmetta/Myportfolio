import {Component} from 'react'

import TabItem from '../TabItem'
import SkillItem from '../SkillItem'

import './index.css'

const tabsList = [
  {tabId: 'FRONTEND', displayText: 'Front-end'},
  {tabId: 'BACKEND', displayText: 'Back-end'},
  {tabId: 'OTHERS', displayText: 'Others'},
]

const skillsList = [
  {
    skillId: 0,
    Skillname: 'React JS',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864441/1174949_js_react_js_logo_react_react_native_icon_pbowsu.png',

    content:
      'good knowledge on JSX elements, React Virtual DOM, Props in JSX, ReactJS Components,React Hooks,The Component Lifecycle,ReactJS Lists,ReactJS Keys,ReactJS forms',

    category: 'FRONTEND',
  },
  {
    skillId: 1,
    Skillname: 'Javascript',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864923/js_l6l63q.png',

    content:
      'Good Knowledge on DOM, Operators, Conditional Statements, DOM Properties, Arrays, Objects, Storage-Mechanisms, JSON, CallBack-Schedulers, Event-Listeners, Factory & Constructor Functions, HTTP , etc... ',
    category: 'FRONTEND',
  },
  {
    skillId: 2,
    Skillname: 'HTML',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864856/html-5_vng8kb.png',

    content:
      'Good Knowledge on HTML Tags, inline elements, HTML Forms, Responsive images, URLs and paths, HTML Comments, Anatomy of an HTML document, HTML text fundamentals, Creating hyperlinks, Attributes, etc....',
    category: 'FRONTEND',
  },
  {
    skillId: 3,
    Skillname: 'CSS',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864441/w3_css-official_ecqotw.svg',

    content:
      'Good Knowledge On CSS selectors and rules, comments, and shorthand, Class selectors, ID selectors, CSS values and units, Box properties, Types of boxes, Fundamental text and Font styling, Flexbox, CSS transitions, Positioning, etc....  ',
    category: 'FRONTEND',
  },
  {
    skillId: 4,
    Skillname: 'BootStrap',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864441/VectorWiki-uU5cT__bootstrap-5_jowxzt.svg',

    content:
      'Good Knowledge On Modal Box, Carousel, Responsive Navbar , Margin and Padding Classes,  Buttons and Alerts , Components, Forms, Icons, Bootstrap Utilities,  etc....',
    category: 'FRONTEND',
  },
  {
    skillId: 5,
    Skillname: 'SQLite',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864526/SQLite-Logo.wine_lzf5kv.png',

    content:
      'Good Knowledge On Commands, Syntax, Data-Types, Operators, Expressions, CRUD Operation, Clauses/Conditions, SQLite Joins, SQLite Date & Time, Aggregate Functions, SQLite Keys, etc... ',
    category: 'BACKEND',
  },
  {
    skillId: 6,
    Skillname: 'Node js',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864477/VectorWiki-xdr9O__nodejs_dvurvx.svg',

    content:
      'Good Knowledge On Node REPL, Modules, NPM CLI, Usage of NPM Packages, Node.js can be used on the frontend as well as the backend ',
    category: 'BACKEND',
  },
  {
    skillId: 7,
    Skillname: 'Express',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864442/pngwing.com_htzioi.png',
    content:
      'Good Knowledge On HTTP Server, Handling HTTP Request, Preparing HTTP Response, Integration with Database, Error Handling, Json Web Token(JWT), Authentication vs Authorization, Node inspect, etc.. ',
    category: 'BACKEND',
  },
  {
    skillId: 8,
    Skillname: 'Python',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864415/Python-logo-notext_gzncze.svg',
    content:
      'Good Knowledge On Fundamentals of Programming, Functions & Data Structures, Object-Oriented Programming, Working with Python Standard Library...',
    category: 'BACKEND',
  },
  {
    skillId: 9,
    Skillname: 'Excel',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1660987435/37EzETO6gZyKmCg2kBIFX1e9gkubxZrVa5fHJ6yOaa7VvEShHjKv2RdtwnZt9Sk258s_w5bsog.png',
    content:
      'Good Knowledge On Formula Basics, Conditional Formatting, Basic Operations, Basic Functions, Charts, Data Sorting, etc.... ',
    category: 'OTHERS',
  },
  {
    skillId: 10,
    Skillname: 'Powerpoint',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659864477/powerpoint-2_zsrosh.svg',
    content: 'Familiar with Powerpoint, designing, animations, fonts etc.....',
    category: 'OTHERS',
  },
  {
    skillId: 11,
    Skillname: 'Word',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1660987607/9kABykeGovHPy-dN19lRxxnCp8IZK3Pkl8qLFNxrEe-hhKVZeiyhTBEIRUt6t-vhxQ_jhpwy3.png',
    content:
      'Good Knowledge On Editing a Document, Formatting Text and Paragraphs, Adding Tables, etc....',
    category: 'OTHERS',
  },
  {
    skillId: 12,
    Skillname: 'GitHub',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1660987971/GitHub-logo_hcpj1e.jpg',
    content:
      'Good Knowledge On VCS & Git Repositories, Working with Branches, Staging Area & Commits, Issues & Pull Requests',
    category: 'OTHERS',
  },
  {
    skillId: 13,
    Skillname: 'Responsive',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1660988833/responsive-design_brft7b.png',
    content: 'Good Knowledge On CSS Layouting, CSS Media Queries, CSS Flexbox',
    category: 'FRONTEND',
  },
  {
    skillId: 14,
    Skillname: 'Command Line',
    imageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1660988919/1_Fq0GuTM3LZ7S6I_mW1hD9A_e2sy6g.png',
    content:
      'Good Knowledge On Files & File System, Environment Variables, Managing System Packages, Network & SSH',
    category: 'OTHERS',
  },
]

class Skills extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getActiveTabApps = () => {
    const {activeTabId} = this.state
    const filteredApps = skillsList.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  render() {
    const {activeTabId} = this.state
    const filteredApps = this.getActiveTabApps()

    return (
      <div className="app-container" id="skills">
        <h1 className="skill-heading">Skills</h1>
        <div className="button-list">
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
        </div>
        <div className="skill-list">
          <ul className="apps-list">
            {filteredApps.map(eachSkill => (
              <SkillItem key={eachSkill.skillId} SkillDetails={eachSkill} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Skills
