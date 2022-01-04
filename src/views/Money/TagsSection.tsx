import styled from "styled-components";
import React, {useState} from "react";


type Props={
    value:string[];
    onChange:(selected:string[])=>void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    const chosen=props.value
    const onAddTag = () => {
        let tagName = window.prompt('请输入标签名');
        tagName && setTags([...tags, tagName])
    }
    const toggle = (tag: string) => {
        chosen.includes(tag)?props.onChange(chosen.filter(t=>t!==tag)):props.onChange([...chosen,tag])
    }
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag}
                        onClick={() => toggle(tag)}
                        className={chosen.includes(tag)?"selected":""}>{tag}</li>
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