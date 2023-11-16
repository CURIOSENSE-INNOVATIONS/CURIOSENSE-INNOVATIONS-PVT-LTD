import React from 'react'
import './ErrorPage.css'
import errorImage from '../Images/logo.png'

const ErrorPage = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might be in another castle.</p>
      <div className="error-image">
        <img src={errorImage} alt="Error Illustration" />
      </div>
    </div>
  )
}

export default ErrorPage