import ReactPaginate from 'react-paginate'
import './Pagination.css'

function PaginatedItems ({ setPageNumber, totalPages, currentPage, name }) {
  const handlePageClick = event => {
    name
      ? setPageNumber({ page: event.selected + 1, name })
      : setPageNumber({ page: event.selected + 1 })
  }

  return (
    <>
      <ReactPaginate
        pageCount={totalPages}
        forcePage={currentPage}
        onPageChange={handlePageClick}
        breakLabel='...'
        nextLabel='next >'
        previousLabel='< previous'
        renderOnZeroPageCount={null}
        pageRangeDisplayed={2}
        marginPagesDisplayed={4}
        containerClassName='pagination'
        activeClassName='active'
        breakClassName='item'
        breakLinkClassName='link'
        pageClassName='item'
        pageLinkClassName='link'
        previousClassName='item'
        previousLinkClassName='link'
        nextClassName='item'
        nextLinkClassName='link'
      />
    </>
  )
}
export default PaginatedItems
