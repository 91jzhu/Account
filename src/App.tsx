import * as React from "react";
import {Routes, Route} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main=styled.div`
  flex-grow: 1;
  overflow: auto;
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
        <Nav/>
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