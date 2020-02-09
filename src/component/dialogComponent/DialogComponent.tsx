import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export interface Props {
  view: string;
  show?: boolean;
  size: string;
  data: any;
  title: string;
  hederbg?: string;
  centered?: boolean;
  btnClass: string;
  btnText: string;
  showFooter?: boolean;
}

export interface State {
  show?: boolean;
  setShow(): void;
  size: "sm" | "lg" | "xl" | undefined;
  data: any;
  title: string;
  hederbg: string;
}

class ModalWithComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      show: this.props.show,
      setShow: () => {
        this.setState({ show: false });
      },
      size: getModalSize(this.props.size),
      data: this.props.data,
      title: this.props.title,
      hederbg: this.props.hederbg === undefined ? "" : this.props.hederbg,
    };
  }

  render() {
    return (
      <>
        <Modal
          {...this.state}
          size={this.state.size}
          aria-labelledby="contained-modal-title-vcenter"
          centered={this.props.centered}
          onHide={this.state.setShow}
        >
          <Modal.Header closeButton className={this.state.hederbg}>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.state.title}
            </Modal.Title>
            {this.props.view === 'UserView' ?
              <>
                <Button variant="warning">Update</Button>
                <Button variant="success">Resolve</Button>
              </>
              : ''
            }
          </Modal.Header>
          <Modal.Body>{this.state.data}</Modal.Body>
          {this.props.showFooter ? getFooter(this.state) : ""}
        </Modal>
        <a
          style={{ textDecoration: 'none' }}
          href="JavaScript:Void(0);"
          className={this.props.btnClass}
          onClick={() => {
            this.setState({ show: true });
          }}
        >
          {this.props.btnText}
        </a>
      </>
    );
  }
}

export interface DialogProps {
  headerbg?: string;
  msg: string;
  title?: string;
  headerColor?: string;
}
export interface DialogState {
  show: boolean;
}

export class AlertDialogComponent extends Component<DialogProps, DialogState> {
  constructor(props: DialogProps) {
    super(props);
    this.state = { show: true };
  }
  render() {
    return (
      <Modal
        {...this.state}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        show={this.state.show}
        onHide={() => this.setState({ show: false })}
      >
        <Modal.Header
          closeButton
          className={
            this.props.headerColor + " " + getModalHeader(this.props.headerbg)
          }
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.title === undefined ? "Alert" : this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.msg}</Modal.Body>
      </Modal>
    );
  }
}

const getFooter = (state: State) => {
  return (
    <Modal.Footer>
      <Button onClick={state.setShow}>Close</Button>
    </Modal.Footer>
  );
};

const getModalHeader = (className: string | undefined) => {
  if (className === undefined || className === "") {
    return "bg-info";
  } else {
    return className;
  }
};

const getModalSize = (size: string) => {
  if (size === "sm" || size === "small") {
    return "sm";
  } else if (size === "lg" || size === "large") {
    return "lg";
  } else if (size === "xl" || size === "extralarge") {
    return "xl";
  } else {
    return undefined;
  }
};

export default ModalWithComponent;