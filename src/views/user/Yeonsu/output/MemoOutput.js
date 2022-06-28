import React from 'react';
import { useState } from 'react';
import MemoCard from "../../../../components/user/Yeonsu/MemoCard";

const MemoOutput = (props) => {
    return (
        <>
        <div>메모 리스트</div>
        {props.memo.length == 0 ? <div></div> : <MemoCard memo={props.content}/>}
        </>
    )
}

export default MemoOutput;