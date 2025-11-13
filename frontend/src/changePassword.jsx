
function changePassword()
{
    return (
        <div>
  <div className="container">
  <div className="changePassword-container">
    <h2 className='page-header'>Change Password</h2>
  <div className="col-md-6 ">
    <label for="currentPassword" className="col-form-label">Current Password</label>
  </div>
  <div className="col-md-3">
    <input type="password" id="currentPassword" className="form-control" aria-describedby="passwordHelpInline"></input>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>

  <div className="col-md-6">
    <label for="newPassword" className="col-form-label">New Password</label>
  </div>
  <div className="col-md-3">
    <input type="password" id="newPassword" className="form-control" aria-describedby="passwordHelpInline"></input>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

<div className="col-md-6">
    <label for="confirmpassword" className="col-form-label">Confirm new Password</label>
  </div>
  <div className="col-md-3">
    <input type="password" id="confirmpassword" className="form-control" aria-describedby="passwordHelpInline"></input>
  </div>
  <div className="col-md-6">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
  </div>

        </div>
    )
}

export default changePassword;