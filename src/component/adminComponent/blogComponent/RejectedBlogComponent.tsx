import React from "react";

export interface Props {}

export interface State {}

class RejectedBlogComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return null;
  }
}

export default RejectedBlogComponent;
