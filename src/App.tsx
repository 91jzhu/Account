import * as React from "react";
import {Routes, Route, Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main=styled.div`
  flex-grow: 1;
  overflow: auto;
`
const Nav=styled.div`
    > ul{
      display: flex;
      > li{
        width:33.33333%;
        text-align: center;
        padding:16px;
      }
    }
`

function App() {
    return (
        <Wrapper>
            <Main>
                <Routes>
                    <Route path="/" element={<Money/>}/>
                    <Route path="money" element={<Money/>}/>
                    <Route path="tags" element={<Tags/>}/>
                    <Route path="data" element={<Data/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Main>

            <Nav>
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
            </Nav>
        </Wrapper>
    );
}

function Money() {
    return (
        <>
            <main>
                <h2>Money</h2>
            </main>
        </>
    );
}

function Tags() {
    return (
        <>
            <main>
                <h2>Tags</h2>
            </main>
        </>
    );
}

function Data() {
    return (
        <>
            <main>
                <h2>Data</h2>
            </main>
        </>
    );
}

function NotFound() {
    return (
        <div>Not Found</div>
    )
}

export default App;