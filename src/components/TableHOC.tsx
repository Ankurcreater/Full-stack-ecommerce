
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { useTable, Column, TableOptions,useSortBy,usePagination } from "react-table";

//Jaha T stand for type thats why T just to know not originally

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize:6,//Now error ? copy from definetly typed
      }
    };
    // const table = useTable(options); or this also choice is yours
    const { getTableProps, getTableBodyProps, headerGroups, page,pageCount,state:{pageIndex}, prepareRow,nextPage,previousPage,canNextPage,gotoPage,canPreviousPage } =
      useTable(
        options,
        useSortBy,
        usePagination  
        // {
        //   columns,
        //   data,
        // }
      );
    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {
                      column.isSorted && <span>{column.isSortedDesc ? "⬇️":"⬆️"}</span>
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {
          showPagination &&  (
            <div className="table-pagination">
              <button  disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
              <span>{`${pageIndex+1} of ${pageCount}`}</span>
              <button  disabled={!canNextPage} onClick={nextPage}>  Next</button> 
              <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={pageIndex >= pageCount - 1}
            >
              Last
            </button>
            </div>
          )
        }
      </div>
    );
  };
}
export default TableHOC;




