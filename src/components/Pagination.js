import './Pagination.css'

import React from 'react'

export default function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage(page => page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage(page => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
     // not yet implemented
  }

  const getPaginationGroup = () => {
     // not yet implemented
  }

  return (
    <div>
      
    </div>
  )
}
