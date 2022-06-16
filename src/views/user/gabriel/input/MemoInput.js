import { memo, useState } from "react";

const MemoInput = (props) => {

    const [data, setData] = useState(null);
    const [text, setText] = useState('');

    const handleData = (state) => {

        setText(state.target.value);
        setData({
            date: new Date(),
            text: state.target.value,
        });
    };

    const handleButton = () => {
        if(text!=''){
            props.setMemo(props.memo.concat(data));
            setData(null);
            setText('');    
        }
    }

    return (
        <>
            <textarea className="mb-2" onChange={handleData} value={text} ></textarea>
            <button className="btn btn-success" onClick={() => handleButton()}>추가하기</button>
        </>
    )
}

export default MemoInput;