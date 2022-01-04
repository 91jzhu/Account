import Layout from "../components/Layout";
import * as React from "react";
import {useState} from "react";
import Icon from "../components/Icon";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Tags() {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(
        [
            {id: 1, name: '衣'},
            {id: 2, name: '食'},
            {id: 3, name: '住'},
            {id: 4, name: '行'}
        ])
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <NavLink to={'/tags/'+ tag.id}>
                            <span className="oneLine">{tag.name}</span>
                            <Icon name="right"/>
                        </NavLink>
                    </li>)}
            </TagList>
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

    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
    }
  }
`
const Button = styled.button`
  font-size: 20px;
  border: none;
  padding: 16px 24px;
  border-radius: 4px;
  background: lightgrey;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 120px;
`

export default Tags