import React from 'react';
import PropTypes from 'prop-types';

class CmpSaludo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log(this.props);
        return (
            <h1>Hola {this.props.nombre}</h1>
        )
    }
}

CmpSaludo.defaultProps = {
    nombre: 'mundo'
}

CmpSaludo.propTypes = {
    nombre: PropTypes.string.isRequired,
    credenciales: PropTypes.shape({
        email: PropTypes.string,
        pass: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
}

export default CmpSaludo;