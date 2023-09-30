import {Component} from "react";


import 'virtual-select-plugin/dist/virtual-select.min.css';
import 'virtual-select-plugin/dist/virtual-select.min.js';

export default class IntrestSelect extends Component {
  componentDidMount() {
    window.VirtualSelect.init({
        ele: '#intrest',
        options: [
          { label: 'Programowanie', value: '1' },
          { label: 'Czytanie', value: '2' },
          { label: 'Astronomia', value: '3' },
          { label: 'Jedzenie', value: '4' },
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