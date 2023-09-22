import React from 'react'

const Pagination = ({page, setPage , info }) => {
  return (
    <div style={{ padding: "20px" }}>
    <h1>Pagination</h1>
    <button
      className="pagination-btn"    
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
    >
      PREV
    </button>
    <button
      className="pagination-btn"
      disabled
      onClick={() => setPage(page + 1)}
    >
      Page no : {page}
    </button>
    <button
      className="pagination-btn"
      disabled={page === info.pages}
      onClick={() => setPage(page + 1)}
    >
      NEXT
    </button>
  </div>
  )
}

export default Pagination