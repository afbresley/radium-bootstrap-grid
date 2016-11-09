import Radium from 'radium';
import React from 'react';
import { row, clearfix } from './grid';

@Radium
export default class Row extends React.Component {

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div style={[row, style]} {...props}>
        {children}
        <div style={clearfix} />
      </div>
    );
  }
}
