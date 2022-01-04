import Layout from "../components/Layout";
import * as React from "react";
import {useState} from "react";
import Icon from "../components/Icon";
import styled from "styled-components";

function Tags() {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag}>
                        <span className="oneLine">{tag}</span>
                        <Icon name="right"/>
                    </li>)}
            </TagList>
            {/*<Space/>*/}
            {/*<Space/>*/}
            <Center>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

const TagList = styled.ol`
  font-size: 16px;
  background: whitesmoke;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Button=styled.button`
  font-size: 20px;
  border:none;
  padding:16px 24px;
  border-radius: 4px;
  background: lightgrey;
`
const Center=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  bottom:120px;
`
// const Space=styled.div`
//   height:128px;
// `

export default Tags