import React, {Component} from 'react';
import Section from './section';

export default class SectionList extends Component {
  render() {
    const sections = Array.isArray(this.props.sections) ? this.props.sections : [];

    return (
      <div className="sections">
        {sections.map((section, index) =>
          <Section
            key={index}
            title={section.title}
            description={section.description}
            type={section.type}
            items={section.items}/>
        )}
      </div>
    );
  }
}
