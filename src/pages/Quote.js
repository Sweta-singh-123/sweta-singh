import React, { useEffect, useRef} from 'react'
import { observeIntersection } from '../utility/userInterfaceObserver'

const Quote = () => {
    const textRef = useRef(null)
    const authorRef = useRef(null)

    useEffect(()=>{
        observeIntersection([textRef,authorRef]);
    },[]);
    var quote = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            author: "Martin Luther King Jr."
        },
        {
            text: "The best way to predict the future is to invent it.",
            author: "Alan Kay"
        },
        {
            text: "You must be the change you wish to see in the world.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            text: "I have not failed. I've just found 10,000 ways that won't work.",
            author: "Thomas Edison"
        },
        {
            text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
            author: "Albert Einstein"
        },
        {
            text: "The journey of a thousand miles begins with one step.",
            author: "Lao Tzu"
        },
        {
            text: "It is our choices that show what we truly are, far more than our abilities.",
            author: "J.K. Rowling"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
            author: "William Butler Yeats"
        },
        {
            text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "The only limit to our realization of tomorrow is our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "In the middle of difficulty lies opportunity.",
            author: "Albert Einstein"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            text: "That which does not kill us makes us stronger.",
            author: "Friedrich Nietzsche"
        },
        {
            text: "It is never too late to be what you might have been.",
            author: "George Eliot"
        },
        {
            text: "The only true wisdom is in knowing you know nothing.",
            author: "Socrates"
        },
        {
            text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "You miss 100% of the shots you don't take.",
            author: "Wayne Gretzky"
        }
    ];
    let count = Math.floor(Math.random() *20);
 
  return (
    <>
     <div className='w-40  text-center d-flex flex-column m-auto justify-content-between align-items-end quote-text' ref={textRef}>
        <div className='flex-item'>
       <span>
       <h1 className='fs-3 justify-content-center'   style={{ lineHeight: '25px' }}><i class="bi bi-quote " style={{fontSize:'40px'}}>
            </i><sub>{quote[count].text}</sub></h1>
       </span>
        </div>
        <div className='flex-item quote-author' ref={authorRef}>
        <h4 className='text-bottom flex-item mt-2'>~ {quote[count].author}</h4>
        </div>

     </div>
    </>
  )
}

export default Quote