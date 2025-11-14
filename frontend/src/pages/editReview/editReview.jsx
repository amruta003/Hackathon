function editReview()
{
    return (
        <div>
            <div className="container d-flex justify-content-center">
            <div className="editReview-container ">
            <h2 className='page-header'>Edit Review For "<i className="movieName">Titanic</i>"</h2>
            <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Rating(1-10)</label>
            </div>
            <div className="col-md-12 mb-4">
            <input type="number" id="ratingInput" name="rating" min="1" max="10" step="1" defaultValue="5" />
            </div>

            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Review</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

          <div className='mb-3'>
          <button
            // onClick={onLogin}
            className='btn btn-primary me-2'
          >
            Update Review
          </button>

            <button
            // onClick={onLogin}
            className='btn btn-secondary'
          >
            Cancel
          </button>
          
        </div>
            </div>
            </div>
        </div>
    )
}

export default editReview;