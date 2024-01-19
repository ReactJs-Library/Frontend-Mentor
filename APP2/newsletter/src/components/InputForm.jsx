import React from 'react'

export const InputForm = () => {
  return (
    <div>
        <form action='/success'>
            <div>
                <label>Email address</label><br/>
                <input type='email'placeholder='email@company.com'></input>
            </div>
            <input type='submit' ></input>
        </form>
    </div>
  )
}
