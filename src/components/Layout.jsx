import React, { Component } from 'react';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return(
            <>
                { children }
            </>
        );
    }
}

export default Layout;