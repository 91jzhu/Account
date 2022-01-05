import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Money from "./views/Money";
import Tags from "./views/Tags";
import Data from "./views/Data";
import NotFound from "./views/NotFound";
import styled from "styled-components";
import {Tag} from './views/Tag';

function App() {
    return (
        <AppWrapper>
            <Routes>
                <Route path="/" element={<Money/>}/>
                <Route path="money" element={<Money/>}/>
                <Route path="tags" element={<Tags/>}/>
                <Route path="tags/:id" element={<Tag/>}/>
                <Route path="data" element={<Data/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
  color: #333;
`

export default App;