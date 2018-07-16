import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import * as pageActions from "../action/action";

const Container = styled.div`
  width: 200px;
  border: 1px solid;
`;

class ButtonElement extends React.Component {
  render() {
    return (
      <Container>
        <p>second container</p>
        <button onClick={() => this.props.pageActions.selectCount()}>
          click
        </button>
      </Container>
    );
  }
}

//ОБЯЗАТЕЛЬНО ДЛЯ КАЖДОГО КОМПОНЕНТА СОСТОЯНИЕ !!!
//  ЕСЛИ МЫ ПРОСТО ПЕРЕДАЕМ КНОПКУ -  И НЕ МЕНЯЕМ СОСТОЯНИЕ - У НЕЕ ВСЕ РАВНО ДОЛЖЕН БЫТЬ STATE
// - ИНАЧЕ МЫ НЕ СМОЖЕМ НАВЕСИТЬ ДЕЦ=ЙСТВИЕ НА ЭЬУ КНОПКУ>
let mapStateProps = state => {
  return {
    button: state.button
  };
};

let matchDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(
  mapStateProps,
  matchDispatchToProps
)(ButtonElement);
