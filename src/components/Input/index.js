import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TxtInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {/* se a prop icon existir ... */}
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <TxtInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  /* style vai ser um objeto OU um array com varios objetos */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

/* como elas não são obrigatórias, colocamos os valores padrões: */
Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);

/* usamos a propriedade ref (reactnative ou reactjs), ela serve
para termos a referencia DIRETA ao elemento do componente (nesse caso,
  o Input). para podermos manipulá-lo de uma forma mais direta!
por exemplo, se em algum momento da aplicação quisermos setar o focus do input
de forma manual (pela programacao), como mudar o focus para outro input
Atenção! mas o ref não é uma propriedade comum, ele nao vai ser repassado
automaticamente para o ...rest por exemplo, entao precisamos fazer algo.
usaremos a fç forwardRef() */
