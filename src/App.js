import React from "react";
import styled from "styled-components";
import menu from "./img/BURGUER.png";
import sacola from "./img/Sacola.png";
import produto from "./img/cosiness.png";

export const Container = styled.section`
  border: solid black;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #ffb84d;
  border-radius: 2em;
  padding: 1em;
  h2 {
    font-size: 3.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const Navegation = styled.div`
  max-width: 90%;
  display: flex;
  margin: 1em auto;
  justify-content: space-between;
  border-radius: 2em;
  background-color: wheat;

  figure img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const Product = styled.figure`
  display: flex;
  justify-content: center;
  img {
    width: 400px;
  }
`;

export const NameProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Counter = styled.div`
  border: solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 2em;
  margin-top: 2em;
  button {
    font-size: 2rem;
    border: none;
    background-color: #ffb84d;
    cursor: pointer;
  }
`;

export const AddCart = styled.div`
  display: flex;
  justify-content: center;
  button {
    font-size: 1.5rem;
    width: 100%;
    padding: 0.5em;
    border: solid black;
    color: white;
    background-color: black;
    border-radius: 2em;
    margin-top: 1em;
    cursor: pointer;
  }
`;

export default class App extends React.Component {
  state = {
    count: 0,
    storage: 9
  };

  addNum = () => {
    if (this.state.count < this.state.storage) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  removeNum = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <Container>
        <Navegation>
          <figure>
            <img src={menu} alt="menu hambúerguer" />
          </figure>
          <h1>Flavo</h1>
          <figure>
            <img src={sacola} alt="sacola de compras" />
          </figure>
        </Navegation>

        <Product>
          <img src={produto} />
        </Product>
        <section>
          <NameProduct>
            <h2>Cosiness</h2>
            <p>$15</p>
          </NameProduct>
          <div>
            <h3>WHAT'S INSIDE</h3>
            <p>Chili,Oregano, safran, paprika</p>
          </div>
          <div>
            <h3>WHY WE LOVE IT</h3>
            <p>
              This one ill add a little savoury flavour to any food and turn any
              meal to a culinary masterpiece
            </p>
          </div>
          <div>
            <input type="radio" id="bag" name="g"></input>
            <label for="bag">BAG(75g)</label>
            <input type="radio" id="jar" name="g"></input>
            <label for="jar">JAR(150g)</label>
          </div>
          <Counter>
            <button onClick={this.removeNum}>-</button>
            <p>{this.state.count}</p>
            <button onClick={this.addNum}>+</button>
          </Counter>
          <AddCart>
            <button>ADD TO CART</button>
          </AddCart>
        </section>
      </Container>
    );
  }
}
