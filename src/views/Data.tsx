import Layout from "../components/Layout";
import * as React from "react";
import {ReactNode, useState} from "react";
import {TypeSection} from "./Money/TypeSection";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from "dayjs";

function Data() {
    const [type, setType] = useState<('-' | '+')>("-")
    const {records} = useRecords()
    const {tags, getName} = useTags()
    const selectedRecords = records.filter(r => r.type === type)
    const hash: { [key: string]: RecordItem[] } = {}
    selectedRecords.map(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD')
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })
    const array = Object.entries(hash).sort((a, b) =>
        a[0] > b[0] ? -1 : 1
    )
    return (
        <Layout>
            <TypeSectionWrapper>
                <TypeSection value={type}
                             onChange={type => setType(type)}/>
            </TypeSectionWrapper>

            {array.map((item, index) => <div key={index}>
                <Header key={index}>{item[0]}</Header>
                <div>
                    {item[1].map((r,index) => {
                        return <Item key={index}>
                            <div className="tags">
                                {r.tags.map((tag, index) =><span key={index}>{getName(tag)}</span>)
                                    .reduce((result,span,index,array)=>
                                        result.concat(index<array.length-1?[span,'，']:[span]),[] as ReactNode[])
                                }
                            </div>
                            {r.note && <div className="note">
                                {r.note}
                            </div>}
                            <div className="amount">
                                ￥{r.amount}
                            </div>
                        </Item>;
                    })}
                </div>
            </div>)}
        </Layout>
    )
}

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const TypeSectionWrapper = styled.div`
  background: white;
`
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

export default Data