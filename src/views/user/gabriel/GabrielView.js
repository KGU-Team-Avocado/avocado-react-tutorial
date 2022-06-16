import { useState } from "react";
import MemoInput from "./input/MemoInput";
import MemoOutput from "./output/MemoOutput";

const GabrielView = () => {
  const [memo, setMemo] = useState([]);
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-6">
          <div className="card py-2">
            <MemoInput memo={memo} setMemo={setMemo}/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card py-2">
            <MemoOutput memo={memo}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GabrielView;