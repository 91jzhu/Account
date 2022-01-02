import styled from "styled-components";
import {Link} from "react-router-dom";
import * as React from "react";
require('Icons/money.svg')
require('Icons/tags.svg')
require('Icons/data.svg')

const Nav=()=>{
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon"><use xlinkHref="#tags"/></svg>
                    <Link to="tags">Tags</Link>
                </li>
                <li>
                    <svg className="icon"><use xlinkHref="#money"/></svg>
                    <Link to="money">Money</Link>
                </li>
                <li>
                    <svg className="icon"><use xlinkHref="#data"/></svg>
                    <Link to="data">Data</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 33.33333%;
      text-align: center;
      padding: 4px 0;
      > .icon{
        width:24px;
        height:24px;
      }
    }
  }
`
export default Nav