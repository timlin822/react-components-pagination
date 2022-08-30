import './Pagination.css';

const Pagination=({currentImagePage,totalPages,pageNumbersArray,clickHandler})=>{
    return (
		<div className="pagination">
			{currentImagePage>1 && <div className="pagination-btn" onClick={()=>clickHandler(currentImagePage-1)}>上一頁</div>}
			{pageNumbersArray.map(number=>(
				<div key={number} className={number===currentImagePage?"pagination-btn pagination-btn-active":"pagination-btn"} onClick={()=>clickHandler(number)}>{number}</div>
			))}
			{currentImagePage<totalPages && <div className="pagination-btn" onClick={()=>clickHandler(currentImagePage+1)}>下一頁</div>}
		</div>
    );
}

export default Pagination;