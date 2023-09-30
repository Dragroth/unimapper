import {Component} from "react";


import 'virtual-select-plugin/dist/virtual-select.min.css';
import 'virtual-select-plugin/dist/virtual-select.min.js';

export default class CitySelect extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      ele: "#city",
    };
  }

  componentDidMount() {
    window.VirtualSelect.init({
      ele: this.ele,
      options: this.props.options,
      multiple: true,
      search: true,
      maxWidth: '275px',
      searchPlaceholderText: 'Szukaj',
      allOptionsSelectedText: 'Wszystko',
      optionsSelectedText: ' Wybrano',
      placeholder: "Miasta",
      name: "cities",
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