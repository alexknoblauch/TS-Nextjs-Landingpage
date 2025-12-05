'use client'

import { useState } from "react"

export default function BookEvent(){

    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault()

        setTimeout(()=> {
            setSubmitted(true)
        }, 1000)
    }


    return (
    <div id='book-event'>
        {submitted ? (
            <p className="text-sm"> thank you for signing up!</p>
        ) : (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Adress</label>
                    <input type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    placeholder='enter your email'/>
                </div>

                <button type="submit" className="button-submit">Submit</button>
            </form>

        )}
    </div>
)
}