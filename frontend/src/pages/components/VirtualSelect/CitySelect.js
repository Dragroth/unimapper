import {Component} from "react";


import 'virtual-select-plugin/dist/virtual-select.min.css';
import 'virtual-select-plugin/dist/virtual-select.min.js';

export default class CitySelect extends Component {
  componentDidMount() {
    window.VirtualSelect.init({
      ele: '#city',
      options: [
        { label: 'Kraków', value: '1' },
        { label: 'Warszawa', value: '2' },
        { label: 'Gdańsk', value: '3' },
        { label: 'Ciechocinek', value: '4' },
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