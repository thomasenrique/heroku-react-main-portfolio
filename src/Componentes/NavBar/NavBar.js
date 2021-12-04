import { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Thomás Enrique</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tecnologias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Trabajos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Experiencia</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar