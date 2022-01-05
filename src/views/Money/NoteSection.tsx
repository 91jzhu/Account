import styled from "styled-components";
import * as React from "react";
import {ChangeEventHandler, useRef} from "react";
import {Input} from "../../components/Input";

type Prop={
    value:string,
    onChange:(note:string)=>void
}
const NoteSection: React.FunctionComponent<Prop> = (props) => {
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <Wrapper>
            <Input label="备注" type="text" value={props.value} onChange={onChange}
                   placeholder="请填写备注"/>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
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