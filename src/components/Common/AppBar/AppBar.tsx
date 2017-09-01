import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import { connect } from 'react-redux';
import CustomSnackbar from '../Snackbar/Snackbar';
import WebcamCapture from '../WebcamCapture/WebcamCapture';

class CustomAppBar extends React.Component<any, any> {
  state = {
    open: false,
    settingsOpen: false,
    isQRCodeDisplayed: false,
    isSelectEventStoreDialogOpen: false
  };
  handleToggle = () => this.setState({ open: !this.state.open });

  handleTitleTouch = () => {
    // do nothing
  }
  render() {
    return (
      <div>
        <AppBar
          title="CamCam"
          onTitleTouchTap={this.handleTitleTouch}
          iconElementLeft={<IconButton onTouchTap={this.handleToggle}><Menu /></IconButton>}
          iconElementRight={<WebcamCapture  />}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>

          <Divider />
          <Subheader>Credits</Subheader>

          <MenuItem
            primaryText="WebcamJS"
            onTouchTap={() => {
              window.open('https://github.com/jhuckaby/webcamjs/blob/master/DOCS.md', '_blank').focus();
            }}
          />
      
        </Drawer>
        <CustomSnackbar />
      </div>
    );
  }
}

export default connect((state: any) => ({
  scan: state.scan
}))(CustomAppBar);
