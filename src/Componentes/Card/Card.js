import { Component } from "react";

class Card extends Component {

  render() {
    const { visible } = this.props
    return (

      <div>
        {/* {visible ? <> */}
        <div className="card" style={{ width: "400px" }}>

          <img
            className="card-img-top"
            src="https://i.imgur.com/h9ja7lq.png"
            alt="Card image"
            style={{ width: "100%" }} />

          <div className="card-body">
            <h4 className="card-title">Thomás Enrique</h4>
            <p className="card-text">Perfil profesional enlace directo a mi perfil de Linkedin</p>
            <p className="card-text" >thomas.mino.97@gmail.com</p>
            <a href="https://www.linkedin.com/in/thomasmino/" target="_blank" className="btn btn-primary">Entrar al perfil</a>
          </div>
        </div>
        {/* </> : <> </>} */}

      </div>
    )
  }
}


export default Card;