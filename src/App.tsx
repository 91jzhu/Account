import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Money from "./views/Money";
import Tags from "./views/Tags";
import Data from "./views/Data";
import NotFound from "./views/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Money/>}/>
            <Route path="money" element={<Money/>}/>
            <Route path="tags" element={<Tags/>}/>
            <Route path="data" element={<Data/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;