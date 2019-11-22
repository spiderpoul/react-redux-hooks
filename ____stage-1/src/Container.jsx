import React, { Component } from 'react';
import News from "./News";

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render () {
      return (<div className = "container">
        <header>
            <ul className="menu">
                <li><a href="#">Все новости</a></li>
                <li><a href="#">Создать</a></li>
            </ul>
        </header>
        <div className="top-container">
            <h1>Мы начинаем наш Воркшоп</h1>
            <div className="description">Для кого? Для чего?</div>
            <div className = "green-line" />     
        </div>
        <News />
        <footer>
          <div>Парапарам</div>
          <img src ="https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg" />
      </footer>

  </div>);
    }
};

export default Container;
