import * as React from "react";
import styled from "styled-components";
require('Icons/money.svg')
require('Icons/tags.svg')
require('Icons/data.svg')

type Props={
    name:String
}

const Icon = (props: Props) => {
    return (
        <Div>
            <svg className="icon">
                <use xlinkHref={'#' + props.name}/>
            </svg>
        </Div>
    )
}

const Div=styled.div`
  > .icon{
    width:24px;
    height:24px;
  }
`

export default Icon