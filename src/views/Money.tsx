import Layout from "components/Layout";
import * as React from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {TypeSection} from "./Money/TypeSection";
import {BoardSection} from "./Money/BoardSection";
import {useState} from "react";
import {useRecords} from "../hooks/useRecords";

function Money() {
    const [selected,setSelected]=useState({
        tags: [] as number[],
        note:"",
        type:'-' as ('-'|'+'),
        amount:'0',
        createdAt:""
    })
    const {records,addRecord}=useRecords()
    const onChange=(obj:Partial<typeof selected>)=>{
        setSelected({...selected,...obj})
    }
    const submit=()=>{
        if(selected.tags===[]||selected.amount==='0'){
            window.alert('必须选择标签或者输入金额')
            return
        }
        addRecord(selected)
        alert('记账成功')
        window.location.reload();
    }
    return (
        <MyLayout>
            <TagsSection value={selected.tags} onChange={(tags)=>onChange({tags})}/>
            <NoteSection value={selected.note} onChange={(note)=>onChange({note})}/>
            <TypeSectionWrapper>
                <TypeSection value={selected.type} onChange={(type)=>onChange({type})}/>
            </TypeSectionWrapper>
            <BoardSection value={selected.amount} onChange={(amount,createdAt)=>onChange({amount,createdAt})} onOk={submit}/>
        </MyLayout>
    );
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const TypeSectionWrapper=styled.div`
  background: #c4c4c4;
`
export default Money
