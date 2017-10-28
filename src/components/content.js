import React, {Component} from 'react';
import SectionList from './section-list';


class Content extends Component {
  render() {
    let skills = [
      {
        type: "language",
        title: "Languages",
        items: [
          {
            "text": "French",
            "level": 4
          },
          {
            "text": "English",
            "level": 4
          },
          {
            "text": "Russian",
            "level": 3
          },
          {
            "text": "Armenian",
            "level": 3
          }
        ]
      },
      {
        type: "pro-language",
        title: "Programing",
        items: [
          {
            "text": "Java",
            "level": 3
          },
          {
            "text": "Javascript",
            "level": 2
          },
          {
            "text": "Python",
            "level": 1
          },
          {
            "text": "SQL",
            "level": 3
          },
          {
            "text": "HTML",
            "level": 2
          },
          {
            "text": "CSS",
            "level": 2
          },
          {
            "text": "Perl",
            "level": 2
          },
          {
            "text": "C#",
            "level": 1
          },
          {
            "text": "C",
            "level": 1
          },
        ]
      }, {
        type: "framework",
        title: "Frameworks",
        items: [
          {
            "text": "Spring",
            "level": 3
          },
          {
            "text": "Hibernate",
            "level": 3
          },
          {
            "text": "Jersey",
            "level": 2
          },
          {
            "text": "JUnit",
            "level": 3
          },
          {
            "text": "QueryDSL",
            "level": 1
          },
          {
            "text": "ReactJS",
            "level": 2
          },
          {
            "text": ".NET",
            "level": 1
          }
        ]
      },
      {
        type: "build",
        title: "Build Ecosystem",
        items: [
          {
            "text": "WebPack",
            "level": 2
          },
          {
            "text": "Jenkins",
            "level": 3
          },
          {
            "text": "npm",
            "level": 3
          },
          {
            "text": "Maven",
            "level": 4
          }
        ]
      },
      {
        type: "misc",
        title: "Ecosystems",
        items: [
          {
            "text": "Docker",
            "level": 3
          },
          {
            "text": "Kubernetes",
            "level": 1
          },
          {
            "text": "GNU/Linux",
            "level": 3
          },
          {
            "text": "Windows",
            "level": 3
          },
          {
            "text": "Mac OSX",
            "level": 3
          },
          {
            "text": "Intellij",
            "level": 4
          },
          {
            "text": "Jira",
            "level": 3
          },
          {
            "text": "Confluence",
            "level": 3
          },
          {
            "text": "REST",
            "level": 3
          },
          {
            "text": "Mercurial",
            "level": 4
          },
          {
            "text": "Git",
            "level": 3
          }
        ]
      }
    ];

    return (
      <div className="content">
        <SectionList sections={this.props.data}/>
      </div>
    );
  }
}

export default Content;
