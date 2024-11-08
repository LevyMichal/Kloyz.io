import InfiniteScroll from "react-infinite-scroll-component";

export default function Table({ columns, data, onRowClick, loadMoreData, hasMore }) {

    return (
        <div
            id="scrollableDiv"
            style={{ height: '750px', overflowY: 'auto', scrollbarWidth: 'none' }}
            className="relative"
        >
            <InfiniteScroll
                dataLength={data ? data.length : 0}
                next={loadMoreData}
                hasMore={hasMore}
                // loader={<p>Loading...</p>} //???
                scrollableTarget="scrollableDiv"
            >

                <div className="table w-full border-collapse absolute">
                    {/* Table Header */}
                    <div className="table-header-group">
                        <div className="table-row sticky top-0 z-10 bg-slate-50 border-b-2 border-slate-200">
                            <div className="left-0 top-0 bottom-0 w-2">
                            </div>
                            {columns.map((column) => (
                                <div
                                    className="table-cell p-4 text-left font-bold"
                                    key={column.accessor}>
                                    {column.Header}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="table-row-group">
                        {data ?
                            (
                                data.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => onRowClick(item)}
                                        className="relative table-row hover:shadow-lg transition-all duration-300 cursor-pointer border-b-2 border-slate-100 group"
                                    >
                                        {/* Table row */}
                                        <div className="absolute left-0 top-0 bottom-0 w-2 group-hover:bg-amber-400 group-hover:rounded-l-lg transition-all duration-300">
                                        </div>
                                        {columns.map((column, index) => (
                                            //Table cell 
                                            <div
                                                key={column.accessor}
                                                className={`table-cell p-6 ${index === 0 ? 'font-bold' : ''}`}
                                            >
                                                {item[column.accessor]}
                                            </div>
                                        ))}
                                        <div className="absolute right-0 top-0 bottom-0 w-2 group-hover:bg-amber-400 group-hover:rounded-r-lg transition-all duration-300">
                                        </div>

                                    </div>
                                ))
                            ) : (
                                <div className='relative table-row' >
                                    <div className="absolute left-0 top-0 bottom-0 w-2"></div>
                                    <div className="table-cell pt-6 text-center text-base font-medium" colSpan={columns.length}>
                                        No Result found
                                    </div>
                                    <div className="absolute right-0 top-0 bottom-0 w-2"></div>
                                </div>
                            )}
                    </div>
                </div>

            </InfiniteScroll>

        </div>
    );
}


