import * as React from "react";
import { connect } from "react-redux";
const Webcam = require("react-webcam");
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import "./WebcamCapture.css";
import { scan } from "../../../store/scan/actions";

export class WebcamCapture extends React.Component<any, any> {
  webcam: any;
  state: any = {
    isDialogOpen: false
  };
  setRef = (webcam: any) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.onScanClick({
      base64Image: imageSrc
    });
  };

  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    return (
      <div className="WebcamCapture">
        <RaisedButton
          label="Scan"
          secondary={true}
          onTouchTap={() => {
            this.setState({
              isDialogOpen: true
            });
          }}
        />
        <Dialog
          title={"Scan"}
          actions={[
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <RaisedButton
              label="Capture"
              primary={true}
              onTouchTap={() => {
                this.capture();
              }}
            />
          ]}
          modal={false}
          open={this.state.isDialogOpen}
          onRequestClose={() => {
            this.setState({ isDialogOpen: false });
          }}
        >
          <Webcam
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/png"
          />
        </Dialog>
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    scan: state.scan
  }),
  {
    onScanClick: (options: any) => (dispatch: any) => {
      dispatch(scan(options));
    }
  }
)(WebcamCapture);
