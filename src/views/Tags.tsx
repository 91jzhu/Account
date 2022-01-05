import Layout from "components/Layout";
import * as React from "react";
import Icon from "components/Icon";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useTags} from "useTags";
import {Button} from "components/Button";
import {Center} from "components/Center";

function Tags() {
    const {tags}=useTags()
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

export default Tags