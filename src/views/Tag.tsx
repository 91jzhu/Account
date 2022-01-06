import React, {useRef} from "react";
import {NavLink, useParams} from "react-router-dom";
import Icon from "components/Icon";
import {useTags} from "hooks/useTags";
import Layout from "components/Layout";
import {Button} from "components/Button";
import {Input} from "components/Input";
import styled from "styled-components";
import {Center} from "../components/Center";

const Tag: React.FC = () => {
        const {findTag, updateTag, deleteTag} = useTags();
        const refInput=useRef(null)
        let {id} = useParams();
        const tag = findTag(parseInt(id!));
        const checkValue=()=>{
            const inputValue=refInput.current?(refInput.current as HTMLInputElement).value:''
            inputValue? window.history.back():window.alert('标签名不能为空')
        }
        const deleteAndBack = () => {
            deleteTag(tag.id)
            checkValue()
        }
        return (
            <Layout>
                <Topbar>
                    <div onClick={checkValue}><Icon name="left"/></div>
                    <span>编辑标签</span>
                    <Icon name="fuck"/>
                </Topbar>

                {tag ? <div>
                        <InputWrapper>
                            <input type="text" placeholder="标签名" ref={refInput}
                                   value={tag.name} onChange={(e) => {
                                updateTag(tag.id, {name: e.target.value})
                            }}/>
                        </InputWrapper>
                        <Center>
                            <Button onClick={deleteAndBack}>删除标签</Button>
                        </Center>
                    </div> :
                    <div>tag dont exist </div>
                }

            </Layout>
        );
    }
;
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

export
{
    Tag
}