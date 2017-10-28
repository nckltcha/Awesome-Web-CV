import React, {Component} from 'react';
import SimpleItem from './simple-item';
import DetailItem from './detail-item';
import BasicItem from './BasicItem';
import Card from './Card';

export default class ItemList extends Component {
  constructor(...args) {
    super(...args);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item, index) {

    let result = null;

    switch (this.props.type) {
      case 'simple':
        result = <SimpleItem
          title={item.title}
          organization={item.organization}
          location={item.location}
          date={item.date}/>;
        break;
      case 'detail':
        result = <DetailItem
          title={item.title}
          organization={item.organization}
          location={item.location}
          date={item.date}
          descriptions={item.descriptions}/>;
        break;
      case 'score':
        result = <Card title={item.title} items={item.items} type={item.type}/>;
        break;
      case 'basic':
        result = <BasicItem
          title={item.title}
          organization={item.organization}
          url={item.url}
        />;
    }

    return (
      <div key={index}>
        {result}
      </div>
    );

  }

  render() {
    const items = this.props.items || [];

    return (
      <div className="items">
        {items.map(this.renderItem)}
      </div>
    );
  }
}
