function Pagination({ paginate, postsPerPage, totalPosts, currentPage }) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="text-center">
      <button
        className="p-2 bg-success fw-bolder text-white m-2 rounded-2"
        onClick={handlePrevious}
        // disabled={currentPage === 1}
      >
        Previous
      </button>
      <button className="p-2 bg-success fw-bolder text-white m-2 rounded-2">
        {currentPage}
      </button>
      <button
        className="p-2 bg-success fw-bolder text-white m-2 rounded-2"
        onClick={handleNext}
        // disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
