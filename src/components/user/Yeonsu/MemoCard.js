import React from 'react';
import { useState } from 'react';

const MemoCard = (props) => {
    return (
        <>
            <div class="card">
                <div class="card-body">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <h5 class="card-title">{props.content}</h5>
                <button type="button" class="btn btn-primary">삭제</button>
                </div>
            </div>
        </>
    )
}

export default MemoCard;