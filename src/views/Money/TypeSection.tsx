import styled from "styled-components";
import React, {useState} from "react";

type Prop={
    value:string,
    onChange:(type:('-'|'+'))=>void
}
const TypeSection: React.FunctionComponent<Prop> = (props) => {
    const typeMap ={'-': '支出', '+': '收入'}
    type keys=keyof typeof typeMap
    const [typeList] = useState<keys[]>(['-', '+'])
    return (
        <Wrapper>
            <ul>
                {typeList.map(type =>
                    <li className={props.value === type ? "selected" : ''}
                        onClick={() => props.onChange(type)}
                        key={type}>{typeMap[type]}
                    </li>)
                }
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`
export {TypeSection}