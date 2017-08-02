import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as weixinActions from '../actions/weixin';

import {
    Button,
} from 'react-weui';

class Scan extends Component {
    componentDidMount() {
        this.props.actions.getsignature();
    }

    render() {
        const { actions } = this.props
        return (
            <div>
              <Button
                  size="small"
                  onClick={() => actions.scanQRCode()}
              >扫描</Button>
            </div>
        );
    }
};

const mapStateToProps = state => ({
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(weixinActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Scan);
