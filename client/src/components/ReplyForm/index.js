import React from 'react';
import styles from './index.css';

const replyForm = () => {





    return (
        <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Talk about the 'goings on' around North Carolina"
          value={thoughtText}
          className="text-area col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="button-is-right button-is-rounded button-is-primary col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
    )
}