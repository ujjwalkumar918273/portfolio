import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div name="contact us" className="w-full h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-fit">
            <div className="pb-8 contact-section">
                <div className="contact-heading"><p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p></div>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>
            <div>
                <form action="https://getform.io/f/eaea775c-9e25-46bd-b767-2f1448d86677" method="POST" className="flex flex-col w-full  md:1/2">
                    <input type="text" name="name" placeholder="Enter your Name..." className="my-2 p-2 bg-transparent border-2 rounded-xl text-white focus:outline-none" ></input>
                    <input type="Email" name="Email" placeholder="Email id...." className="my-2 p-2 bg-transparent border-2 rounded-xl text-white focus:outline-none" ></input>
                    <input type="Number" name="Phone no" placeholder="Phone no.." className="my-2 p-2 bg-transparent border-2 rounded-xl text-white focus:outline-none" ></input>
                    <textarea name="message" rows="10" placeholder="Message..." className=" my-2 p-2 bg-transparent border-2 rounded-xl text-white focus:outline-none"></textarea>
                    <button className="text-white bg-gradient-to-b from-gray-800 to-gray-900 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                  </form>
            </div>
        </div>
    </div>
  )
}

export default Contact