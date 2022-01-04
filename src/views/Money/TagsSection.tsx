import styled from "styled-components";
import React, {useState} from "react";


type Props={
    value:number[];
    onChange:(selected:number[])=>void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(
        [
            {id: 1, name: '衣'},
            {id: 2, name: '食'},
            {id: 3, name: '住'},
            {id: 4, name: '行'}
        ])
    const chosen=props.value
    const onAddTag = () => {
        let tagName = window.prompt('请输入标签名');
        tagName && setTags([...tags, {id:Math.random(),name:tagName}])
    }
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
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

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