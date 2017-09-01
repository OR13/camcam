import * as React from 'react';
import { connect } from 'react-redux';

import Snackbar from 'material-ui/Snackbar';

class CustomSnackbar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            open: false,
            message: 'hello',
        };
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.scan.last) {
            this.setState({
                open: true,
                message: 'New image captured.'
            });
            
        }
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
    render() {
        return (
            <div>
                <Snackbar
                    open={this.state.open}
                    message={`${this.state.message}`}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

export default connect((state: any) => ({
  scan: state.scan,
}))(CustomSnackbar);
