import React from "react";
import {NavLink, useParams} from "react-router-dom";
import Icon from "components/Icon";
import {useTags} from "useTags";
import Layout from "components/Layout";
import {Button} from "components/Button";
import {Input} from "components/Input";
import styled from "styled-components";
import {Center} from "../components/Center";

const Tag: React.FC = () => {
    const {findTag,updateTag} = useTags();
    let {id} = useParams();
    const tag = findTag(parseInt(id!));
    return (
        <Layout>
            <Topbar>
                <NavLink to="/tags"><Icon name="left"/></NavLink>
                <span>编辑标签</span>
                <Icon name="fuck"/>
            </Topbar>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="标签名"
                       value={tag.name} onChange={(e)=>{
                           updateTag(tag.id,{name:e.target.value})
                }}/>
            </InputWrapper>
            <Center>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    );
};
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

export {Tag}