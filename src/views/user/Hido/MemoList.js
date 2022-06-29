import MemoItem from './MemoItem.js';

const MemoList = ({ onModify, onDelete, memos }) => {
  return (
    <div className="MemoList">
      <b>{memos.length}</b>개의 메모
      <div>
        {memos.map((memo) => (
          <MemoItem key={memo.id} {...memo} onModify={onModify} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default MemoList;