import {Component} from "react";


import 'virtual-select-plugin/dist/virtual-select.min.css';
import 'virtual-select-plugin/dist/virtual-select.min.js';

export default class UniSelect extends Component {
  componentDidMount() {
    window.VirtualSelect.init({
        ele: '#university',
        options: [
          { label: 'Politechnika Krakowska', value: '1' },
          { label: 'Politechnika Warszawska', value: '2' },
          { label: 'Politechnika Poznańska', value: '3' },
          { label: 'Politechnika Wrocławska', value: '4' },
        ],
        multiple: true,
        search: true,
        maxWidth: '275px',
        searchPlaceholderText: 'Szukaj',
        allOptionsSelectedText: 'Wszystko',
        optionsSelectedText: 'Wybrano'
    });

    if (typeof this.props.onChange === 'function') {
      this.ele.addEventListener('change', this.props.onChange);
    }
  }

  componentWillUnmount() {
    this.ele.destroy();
  }

  render() {
    return <div ref={(ele) => (this.ele = ele)} />;
  }
}