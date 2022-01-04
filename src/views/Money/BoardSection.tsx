import styled from "styled-components";
import * as React from "react";
import {useState} from "react";

const BoardSection:React.FunctionComponent=()=>{
    const [output,setOutput]=useState("0")
    const numChange=(e:React.MouseEvent)=>{
        // setOutput(output=>output!=='0'?output+num:num)
        const content=(e.target as HTMLButtonElement).textContent;
        if(!content)return
        switch (content){
            case '0':setOutput(output=>output!=='0'?output+'0':'0');break;
            case '1':setOutput(output=>output!=='0'?output+1:'1');break;
            case '2':setOutput(output=>output!=='0'?output+2:'2');break;
            case '3':setOutput(output=>output!=='0'?output+3:'3');break;
            case '4':setOutput(output=>output!=='0'?output+4:'4');break;
            case '5':setOutput(output=>output!=='0'?output+5:'5');break;
            case '6':setOutput(output=>output!=='0'?output+6:'6');break;
            case '7':setOutput(output=>output!=='0'?output+7:'7');break;
            case '8':setOutput(output=>output!=='0'?output+8:'8');break;
            case '9':setOutput(output=>output!=='0'?output+9:'9');break;
            case '删除':setOutput(output=>output.length>1? output.slice(0,output.length-1):'0');break;
            case '清空':setOutput('0');break;
            case 'OK':
            case '.':setOutput(output=>!output.includes('.')?output+'.':output);break;
        }
    }
    // @ts-ignore
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={numChange}>
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
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #E0E0E0;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #D3D3D3;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #C1C1C1;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #B8B8B8;
      }

      &:nth-child(12) {
        background: #9A9A9A;
      }

      &:nth-child(14) {
        background: #A9A9A9;
      }
    }
  }
`
export {BoardSection}