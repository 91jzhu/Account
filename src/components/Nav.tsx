import styled from "styled-components";
import {Link} from "react-router-dom";
import * as React from "react";

const Nav=()=>{
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="money">Money</Link>
                </li>
                <li>
                    <Link to="tags">Tags</Link>
                </li>
                <li>
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
      width: 33.33333%;
      text-align: center;
      padding: 16px;
    }
  }
`
export default Nav