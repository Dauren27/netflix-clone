import React from 'react'
import "./OptForm.scss"
const OptForm = () => {
  return (
    <div className='optForm'>
      <div className="optForm__form">
        <input placeholder="Email address" />
        <button>
          Try it now
          <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </button>
      </div>
      <p className="optForm__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
    </div>
  )
}

export default OptForm
