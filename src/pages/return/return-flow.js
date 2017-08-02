import React from 'react';

import { Link } from 'react-router-dom'

import {
    Button,
} from 'react-weui';

export default class ReturnFlow extends React.Component {
    handleSearch(e){
    }

    render() {
        return (
            <div>
              请扫描绘本上的条形码
              <Link to="/scan">
                <Button size="small">扫描</Button>
              </Link>
              <Link to="/return">
                <Button size="small">归还</Button>
              </Link>
            </div>
        );
    }
};
