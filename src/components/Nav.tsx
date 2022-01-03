import styled from "styled-components";
import {Link} from "react-router-dom";
import * as React from "react";
import Icon from "./Icon";

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags"><Icon name="tags"/>Tags</Link>
                </li>
                <li>
                    <Link to="/money"><Icon name="money"/>Money</Link>
                </li>
                <li>
                    <Link to="/data"><Icon name="data"/>Data</Link>
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
    }
  }
`
export default Nav