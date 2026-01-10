import React from 'react'
import FAQCart from './parts/FAQCart'

function FAQ() {
   const questionsData = [
  // General Questions
  { type: "General Questions", question: "How long does a car inspection take?" },
  { type: "General Questions", question: "Can I return the car?" },
  { type: "General Questions", question: "Is there a warranty?" },
  { type: "General Questions", question: "Do you offer financing?" },
  { type: "General Questions", question: "Can I test drive the car?" },
  { type: "General Questions", question: "Are all cars certified?" },
  { type: "General Questions", question: "What documents are needed?" },
  { type: "General Questions", question: "Is the price negotiable?" },
   ]
  return (
    <div className='w-full h-auto bg-slate-50 py-8 flex flex-col items-center justify-center'>
      <div className='lg:w-2/3 w-full  rounded-lg shadow-lg bg-white px-5 py-5 flex flex-col '>
      <h1 className='text-2xl text-start py-4 font-bold darkgreen'>Booking & Reservations</h1>
         {questionsData.map((item , index)=>{
            return(
               <FAQCart key={index} question={item.question}/>
            )
         })}
      </div>
    </div>
  )
}

export default FAQ
