import React from 'react';
import styled from 'styled-components';

interface SubText {
  text : string
}

const StyledText =  styled.p `
font-family: Inter, arial;
font-style: Regular;
font-size: 12px;
letter-spacing: -2%;
line-height:1;
color : #303030;
margin-bottom : 30px;
`

function SubText({text}:SubText) {
  
  return (
    <StyledText>
      {text}
    </StyledText>
  )  
}


export default SubText;