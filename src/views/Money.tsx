import Layout from "components/Layout";
import * as React from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NotesSection} from "./Money/NotesSection";
import {TypeSection} from "./Money/TypeSection";
import {BoardSection} from "./Money/BoardSection";

function Money() {
    return (
        <MyLayout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注"/>
                </label>
            </NotesSection>
            <TypeSection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </TypeSection>
            <BoardSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button className="dot">.</button>
                </div>
            </BoardSection>
        </MyLayout>
    );
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
export default Money
