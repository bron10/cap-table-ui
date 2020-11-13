import React, {useState} from 'react';
import {Redirect } from 'react-router-dom';
import styled from 'styled-components';
import CreateCapTitle from '../shared/create-cap-title';
import SubText from '../shared/SubText';
import excelIcon from '../assets/excel.png';
import paperIcon from '../assets/papers.png';
import List from '../shared/List';
import './style.css';
interface CapSelect {
  
}

const SelectOption = styled.li`
padding : 10px 0 19px 0;
border : solid 1px #fff;
background-color : #f4fdf4
&:hover {
 border : solid 1px #53B58D;
}
`
const ImgIcon = styled.img`
width : 67px;
float :left;
`
const OptionTitle = styled.h4`
line-height : 1;
padding : 7px 0 0 0;
margin : 0;

`

function CapSelect({}:CapSelect) {
  const [createPage, goCreate] = useState(false);
  if(createPage){
    return <Redirect to="/create" />
  }

  return (
    <>
      <CreateCapTitle />
      <SubText text="Select how you would like to create your cap table."></SubText>
      <List>
        <SelectOption onClick = {goCreate} >
          <ImgIcon src={excelIcon} />
          <OptionTitle>Upload Spreadsheet</OptionTitle>
          <SubText text="Download a cap table spreadsheet template, fill it out, upload the completed template."></SubText>
        </SelectOption>
        <li className="partition">
          <p className="partition-text">Or</p>
        </li>
        <SelectOption>
          <ImgIcon src={paperIcon} />
          <OptionTitle>Upload Investment Documents</OptionTitle>
          <SubText text="Download a cap table spreadsheet template, fill it out, upload the completed template."></SubText>
        </SelectOption>
      </List>
    </>
  )  
}


export default CapSelect;