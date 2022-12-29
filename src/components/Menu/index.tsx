import { SignOut, House } from 'phosphor-react';
import { Container } from './styles';
import logoPNG from '../../assets/logo.png';

export function Menu() {
  return (
    <Container>
      <div className="topnav" id="myTopnav">
        <div className="part1">
          <img src={logoPNG} alt="" />
        </div>
        <div className="part2">
          <a href="/" className="active home">
            <House size={24} />
            Home
          </a>
          <a href="/">Produtos</a>

          <div className="dropdown">
            <button className="dropbtn">
              Categorias
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
          <a href="#" className="logOut">
            <SignOut size={24} />
          </a>
        </div>
      </div>
    </Container>
  );
}
