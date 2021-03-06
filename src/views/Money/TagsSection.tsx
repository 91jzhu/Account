import styled from "styled-components";
import React from "react";
import {useTags} from "../../hooks/useTags";

type Props={
    value:number[];
    onChange:(selected:number[])=>void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const {tags,addTag}=useTags()
    const chosen=props.value
    const toggle = (tagId: number) => {
        chosen.includes(tagId)?props.onChange(chosen.filter(t=>t!==tagId)):props.onChange([...chosen,tagId])
    }
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id}
                        onClick={() => toggle(tag.id)}
                        className={chosen.includes(tag.id)?"selected":""}>{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    height: 18vh;
    overflow-y: auto;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: deepskyblue;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
export {TagsSection}