import {Component} from 'react'

import ProjectTab from '../ProjectTab'
import ProjectItem from '../ProjectItem'

import './index.css'

const tabsList = [
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
  {tabId: 'STATIC', displayText: 'Static'},
]

const ProjectsList = [
  {
    ProjectId: 0,
    category: 'RESPONSIVE',
    Projectname: 'Food Munch',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659881587/InShot_20220807_193959982_1_wipxgw.jpg',
    content:
      'Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers. Technologies used: HTML, CSS, Bootstrap',
    linkOfProject: 'https://lavanfoodmunch1.ccbp.tech',
  },
  {
    ProjectId: 1,
    category: 'RESPONSIVE',
    Projectname: 'Todo App',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659881627/InShot_20220807_194036608_1_tk0iml.jpg',
    content:
      'Developed persistent todo application with CRUD operations to track list of tasks, Persisted todo list state on page reloads using local storage methods.',
    linkOfProject: 'https://lavantodosapp.ccbp.tech',
  },
  {
    ProjectId: 2,
    category: 'DYNAMIC',
    Projectname: 'IPL Dashboard',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659881614/InShot_20220807_193940262_1_owrbgu.jpg',
    content:
      'Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info.Technologies used: React JS, Routing, REST API Calls, CSS, Bootstrap',
    linkOfProject: 'https://lavanipl.ccbp.tech',
  },
  {
    ProjectId: 3,
    category: 'RESPONSIVE',
    Projectname: 'Color Picker',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0037_iyqmeq.jpg',
    content:
      'Developed a website where users can change background-colors based on hex codes. Used Technologies: HTML CSS ',
    linkOfProject: 'https://colorpicklavan.ccbp.tech',
  },
  {
    ProjectId: 4,
    category: 'DYNAMIC',
    Projectname: 'Match Game',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0040_uiizn8.jpg',
    content:
      'Developed responsive image memory game where users can win it by clicking unique image each time. All images positions are different tabs based on category',
    linkOfProject: 'https://matchgamelav.ccbp.tech',
  },
  {
    ProjectId: 5,
    category: 'DYNAMIC',
    Projectname: 'NXT Watch',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005639/IMG-20220820-WA0028_c9gusc.jpg',
    content:
      'Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).',
    linkOfProject: 'https://nxtwatch111.ccbp.tech',
  },
  {
    ProjectId: 6,
    category: 'DYNAMIC',
    Projectname: 'COVID19-Dashboard',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005639/IMG-20220820-WA0035_v7vkl5.jpg',
    content:
      'Implemented a responsive Covid Dashboard where users can see confirmed, active, recovered and deceased cases in India state wise. Users also can search by state and see state specific cases info with different types of graphs.',
    linkOfProject: 'https://lavancovid19.ccbp.tech',
  },
  {
    ProjectId: 7,
    category: 'DYNAMIC',
    Projectname: 'Jobby App',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005639/IMG-20220820-WA0032_-_Copy_-_Copy_bzsxjh.jpg',
    content:
      'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc',
    linkOfProject: 'https://lavanjobby.ccbp.tech',
  },
  {
    ProjectId: 8,
    category: 'DYNAMIC',
    Projectname: 'NXT trends',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0031_kvbbcq.jpg',
    content:
      'Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..',
    linkOfProject: 'https://nxttrendzlav.ccbp.tech',
  },
  {
    ProjectId: 9,
    category: 'DYNAMIC',
    Projectname: 'Rock-paper-scissor',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0027_-_Copy_sm9vfr.jpg',
    content:
      'Developed responsive Game using React components, props , lists, conditional rendering, styled using CSS. Used Technologies: React JS, CSS, Bootstrap',
    linkOfProject: 'https://rps111.ccbp.tech',
  },
  {
    ProjectId: 10,
    category: 'STATIC',
    Projectname: 'Tourism Website',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005641/IMG-20220820-WA0041_cjk858.jpg',
    content:
      'Developed tourism website where users can browse through the content, videos and images of popular destinations.',
    linkOfProject: 'https://lavantourismweb.ccbp.tech',
  },
  {
    ProjectId: 11,
    category: 'STATIC',
    Projectname: 'Popular Books',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0036_nok9b7.jpg',
    content:
      'Developed a website Popular books users can see types of books and implemented a buy now option it is simple static website Used Technologies:HTML CSS',
    linkOfProject: 'https://lavanbooks.ccbp.tech',
  },
  {
    ProjectId: 12,
    category: 'STATIC',
    Projectname: 'Yoga',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0039_uvgzof.jpg',
    content: 'Simple Static website Used Technologies:HTML, CSS',
    linkOfProject: 'https://yoga111.ccbp.tech',
  },
  {
    ProjectId: 13,
    category: 'STATIC',
    Projectname: 'Counter',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0043_clygzq.jpg',
    content:
      'Developed a website counter users can decrease number count as well as increase by using buttons Used Technologies: HTML CSS',
    linkOfProject: 'https://thecounterlavan.ccbp.tech',
  },
  {
    ProjectId: 14,
    category: 'STATIC',
    Projectname: 'Article',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0034_-_Copy_mzjt3n.jpg',
    content:
      'Simple Article page where users can see four types of articles. Used Technologies: HTML, CSS',
    linkOfProject: 'https://articalpage111.ccbp.tech',
  },
  {
    ProjectId: 15,
    category: 'RESPONSIVE',
    Projectname: 'Speed-Typing',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005641/IMG-20220820-WA0044_o7ulkm.jpg',
    content:
      'Developed an application which measuring time he took to complete given paragraph. Technologies used: HTML, CSS, JS, REST API Calls, Bootstrap',
    linkOfProject: 'https://lavantypetest.ccbp.tech',
  },
  {
    ProjectId: 16,
    category: 'DYNAMIC',
    Projectname: 'Password-manager',
    ProjectimageUrl:
      'https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005640/IMG-20220820-WA0038_y3dl3e.jpg',
    content:
      'Developed a website called Password-manager users can store different passwords in this website. Used Technologies: React js, HTML, CSS',
    linkOfProject: 'https://pmlavan.ccbp.tech',
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
    const filteredApps = ProjectsList.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  render() {
    const {activeTabId} = this.state
    const filteredApps = this.getActiveTabApps()

    return (
      <div className="project-container" id="projects">
        <h1 className="project-heading">Projects</h1>
        <div className="button-list">
          <ul className="project-tab-list">
            {tabsList.map(eachTab => (
              <ProjectTab
                key={eachTab.ProjectId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
        </div>
        <div className="project-list">
          <ul className="projects-list">
            {filteredApps.map(eachSkill => (
              <ProjectItem
                key={eachSkill.ProjectId}
                ProjectDetails={eachSkill}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Skills
