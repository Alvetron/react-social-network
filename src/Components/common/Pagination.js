const Pagination = (props) => {
    const pageCount = Math.ceil(props.totalUsers / props.pageSize) + props.currentPage - 1;
    const elements = [];

    console.log(pageCount);

    for (let i = 0; i < pageCount; i++) {
        const currentPage = i + 1;

        elements.push(
            <div className={`mx-2 cursor-pointer ${props.currentPage === currentPage ? 'font-bold' : ''}`}
                 onClick={() => props.choosePage(currentPage)} >{currentPage}</div>
        );
    };

    const prevPages = () => {
        props.choosePage(props.currentPage - 1);
    }

    const nextPages = () => {
        props.choosePage(props.currentPage + 1);
    }

    return (
        <>
            <button type="button" onClick={prevPages}>prev</button>
            {elements.filter((item, index) => index >= props.currentPage - 1)}
            <button type="button" onClick={nextPages}>next</button>

        </>
    );
    
}

export default Pagination;