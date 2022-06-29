import React from 'react';
import { useState } from 'react';

const MemoCard = (props) => {
    
    const deleteMemo = () => {
        props.setMemo(props.memo.splice(props.key, 1));
    }

    return (
        <>
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">{props.a}</h5>
                        {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                수정
                </button>
                <button type="button" class="btn btn-primary" onClick={()=>deleteMemo()}>삭제</button>
                </div>
            </div>
        </>
    )
}

export default MemoCard;