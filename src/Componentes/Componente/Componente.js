import { Component } from "react";

class Componente extends Component {
  state = {
    mensaje: 'Este es un mensaje desde el state de este componente'
  }
  render() {
    const { propiedad, visible } = this.props
    return (
      <div>
        {visible ? <>
          <div>
            <h1>Componente de ejemplo</h1>
            <h3>Nos sirve para poder conservar la sintaxis basica de la creacion de un componente</h3>
            <p>{this.state.mensaje}</p>
            <p>{propiedad}</p>
          </div>
        </> : <> </>}
      </div>
    )

  }
}

export default Componente