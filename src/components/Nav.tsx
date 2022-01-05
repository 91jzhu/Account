import styled from "styled-components";
import {NavLink,Link} from "react-router-dom";
import * as React from "react";
import Icon from "./Icon";

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink end to="/tags"><Icon name="tags"/>Tags</NavLink>
                </li>
                <li>
                    <NavLink to="/money"><Icon name="money"/>Money</NavLink>
                </li>
                <li>
                    <NavLink to="/data"><Icon name="data"/>Data</NavLink>
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
      > .active {
        color:blueviolet;
        .icon{
          fill:blueviolet;
        }
      }
    }
  }
`
export default Nav