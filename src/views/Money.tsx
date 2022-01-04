import Layout from "components/Layout";
import * as React from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {TypeSection} from "./Money/TypeSection";
import {BoardSection} from "./Money/BoardSection";
import {useState} from "react";

function Money() {
    const [selected,setSelected]=useState({
        tags:[] as string[],
        note:"",
        type:'-' as ('-'|'+'),
        amount:'0'
    })
    return (
        <MyLayout>
            {selected.amount}
            <TagsSection value={selected.tags} onChange={(tags)=>setSelected({...selected,tags})}/>
            <NoteSection value={selected.note} onChange={(note)=>setSelected({...selected,note})}/>
            <TypeSection value={selected.type} onChange={(type)=>setSelected({...selected,type})}/>
            <BoardSection onChange={(amount)=>setSelected({...selected,amount})}/>
        </MyLayout>
    );
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
export default Money
