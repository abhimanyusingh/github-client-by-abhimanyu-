
import React from 'react';
import PropTypes from 'prop-types'
import * as Github from '../../../github-client'
import isEqual from 'lodash/isEqual';

class Query extends React.Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        variables: PropTypes.object,
        children: PropTypes.func.isRequired,
        normalize: PropTypes.func
    }

    static defaultProps = {
        normalize: data => data
    }

    static contextType = Github.Context
    
    state = {loaded: false, fetching: false, data: null, error: null}

    componentDidMount() {
        this._isMounted = true
        this.query()
    }

    componentDidUpdate(prevProps) {
        if(
            !isEqual(this.props.query, prevProps.query) ||
            !isEqual(this.props.variables, prevProps.variables)
        ) {
            this.query()
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    safeSetState(...args) {
        this._isMounted && this.setState(...args)
    }

    query() {
        this.setState({fetching: true})
        const client = this.context
        client
            .request(this.props.query, this.props.variables)
            .then(res => {
                console.log(res);
            })
    }


    render() {
        return this.props.children(this.state)
    }
}

export default Query;