import React, {Component} from 'react';

class BasicItem extends Component {
  render() {
    let url = null;
    if (this.props.url) {
      url = <a href={this.props.url} target="_blank">[URI]</a>
    }

    return (
      <div className="item item-simple">
        <span className="title">{this.props.title}:</span>
        <span className="organization">{this.props.organization}</span>
        {url}
      </div>
    );
  }
}

export default BasicItem;
