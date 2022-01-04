import Layout from "components/Layout";
import * as React from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {TypeSection} from "./Money/TypeSection";
import {BoardSection} from "./Money/BoardSection";

function Money() {
    return (
        <MyLayout>
            <TagsSection/>
            <NoteSection/>
            <TypeSection/>
            <BoardSection/>
        </MyLayout>
    );
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
export default Money
