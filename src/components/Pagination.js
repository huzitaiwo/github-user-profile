import './Pagination.css'

import React from 'react'

export default function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1)
  }

  function goToPreviousPage() {
     // not yet implemented
  }

  function changePage(event) {
     // not yet implemented
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