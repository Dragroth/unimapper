import {Component} from "react";


import 'virtual-select-plugin/dist/virtual-select.min.css';
import 'virtual-select-plugin/dist/virtual-select.min.js';

export default class IntrestSelect extends Component {
  componentDidMount() {
    window.VirtualSelect.init({
        ele: '#subject',
        options: [
          { label: '', value: '1', description: 'Cipa' },
          { label: 'Historia', value: '2' },
          { label: 'Informatyka', value: '3' },
          { label: 'Biologia', value: '4' },
          { label: 'Pszyrka', value: '5' },
          { label: '', value: '6', description: 'Chuj' },
          { label: 'Jebanie', value: '7' },
        ],
        disabledOptions: [1, 6],
        // labelRenderer: sampleLabelRenderer,
        multiple: false,
        search: true,
        maxWidth: '275px',
        searchPlaceholderText: 'Szukaj',
        allOptionsSelectedText: 'Wszystko',
        optionsSelectedText: 'Wybrano',
        hasOptionDescription: true,
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