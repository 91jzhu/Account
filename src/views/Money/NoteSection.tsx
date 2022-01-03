import styled from "styled-components";
import * as React from "react";
import {useState} from "react";

const NoteSection: React.FunctionComponent = () => {
    const [note,setNote]=useState("")
    console.log(note);
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text"
                       value={note}
                       onChange={(e)=>setNote(e.target.value)}
                       placeholder="在这里添加备注"/>
            </label>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
export {NoteSection}