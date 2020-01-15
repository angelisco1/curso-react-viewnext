import React, { Component } from 'react'

export class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: null,
            intervalId: null
        }
    }

    componentDidMount() {
        const id = setInterval(() => {
            console.log('Timer...')
        }, 1000)
        this.setState({
            intervalId: id
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            color: props.cuenta > -1 ? 'greenyellow' : 'darkred'
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.color !== nextState.color;
    }

    render() {
        console.log('Se pinta...')
        const styles = {
            width: '200px',
            height: '200px',
            backgroundColor: this.state.color
        }
        return (
            <div style={styles}></div>
        )
    }
}

export default Color
