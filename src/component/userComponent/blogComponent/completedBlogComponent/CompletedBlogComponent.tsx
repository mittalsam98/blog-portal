import React, { Component } from "react";

export interface Props {}

export interface State {}

class CompletedBlogComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return null;
  }
}

export default CompletedBlogComponent;
