import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import CreateCapTitle from '../shared/create-cap-title';
import SubText from '../shared/SubText';
import List from '../shared/List';
import backPath from '../assets/back_path.png';
import ellipse from '../assets/ellipse.png';
import './style.css';

interface CapCreate {
  
}

const ListTitle = styled.h4`
`

const config = [{
  title : `Add Founder Shares`,
  desc : `Details on what founder shares are`
}, {
  title : `Add Investments`,
  desc : `What are Investments, when you would have/add them`
}, {
  title : `Add Equity Plans`,
  desc : `Equity plan description`
}, {
  title : `Add Employee Grants`,
  desc : `Employee grant description`
}, {
  title : `Review Cap Table`,
  desc : `All done? Invite your lawyer to review your cap table`
}]

const Floater = styled.div`
float :left;
`

function CapCreate({}:CapCreate) {
  
  return (
    <>
      <CreateCapTitle />
      <SubText text="Stuck on what to do? You can always come back here to check on what else you’ll need to add to complete your cap table."/>
      <p><img src={backPath} /> <Link className = "back-link" to="/select">Upload Investment Documents</Link></p>
      
      <List>
        {config.map(({title, desc}) => <li>
          <Floater>
            <img src= {ellipse} />
          </Floater>
          <Floater>
            <ListTitle>{title}</ListTitle>
            <SubText text={desc} />
          </Floater>
        </li>)}
      </List>
    </>
  )  
}


export default CapCreate;