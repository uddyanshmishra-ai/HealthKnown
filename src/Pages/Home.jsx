import { ArrowRight, Bot, HeartPulse, Salad, User } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-yellow-50 text-gray-800  bg-[url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170")] bg-cover  bg-center  overflow-hidden'>

      <section className='relative bg-[url("")] bg-cover  bg-center h-100 text-white'>
        <div className='bg-black/60  h-full w-full flex flex-col justify-center items-center text-center p-4'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to EatHealthy</h1>
          <p className='text-lg md:text-2xl mb-8'>Your Journey to a Healthier Lifestyle Starts Here</p>
          <div className='flex gap-6'>
            <a href="/about" className='bg-green-600  hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300'>Learn More</a>

            <button className='bg-gray-50/20 hover:bg-green-100 hover:text-black text-white border-2 border-green-200 font-semibold px-6 py-3 rounded-md transition-colors duration-300 flex justify-center items-center '>Get Started</button>

          </div>
        </div>

      </section>

      <section className="bg-gray-50 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-6">
          Smart Fitness Tools
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-6 font-semibold text-gray-500">
          Everything you need to eat, track smartly, and get personalised
          suggestions.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mb-6 mx-auto px-6 ">
          <div className=" p-6 rounded-2xl shadow-md">
            <div className="p-6 bg-green-100 inline-flex rounded-full shadow-md mb-6">
              <Salad className="text-green-600 w-10 h-10" />
            </div>
            <h2 className="text-green-600 text-2xl font-semibold mb-2">Ingredient Generator</h2>
            <p className="text-md text-gray-700">
              All your healthy eating suggestions for your home essentials
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md">
            <div className="p-6 bg-red-100 inline-flex rounded-full shadow-md mb-6">
              <HeartPulse className="text-red-600 w-10 h-10" />
            </div>
            <h2 className="text-red-600 text-2xl font-semibold mb-2">Ingredient Generator</h2>
            <p className="text-md text-gray-700">
              All your healthy eating suggestions for your home essentials
            </p>
          </div>
          <div className=" p-6 rounded-2xl shadow-md">
            <div className="p-6 bg-blue-100 inline-flex rounded-full shadow-md mb-6">
              <Bot className="text-blue-600 w-10 h-10" />
            </div>
            <h2 className="text-blue-600 text-2xl font-semibold mb-2">Ingredient Generator</h2>
            <p className="text-md text-gray-700">
              All your healthy eating suggestions for your home essentials
            </p>
          </div>
        </div>
      </section>




      {/* ---------------- USER FLOW SECTION ---------------- */}
      <section className="bg-yellow-50 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div>
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
              1
            </div>
            <h3 className="font-semibold text-xl mb-2">Choose Body Type</h3>
            <p className="text-gray-600">Select your body type and fitness goal to begin your journey.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
              2
            </div>
            <h3 className="font-semibold text-xl mb-2">Pick Veg/Non-Veg Flow</h3>
            <p className="text-gray-600">Get diet options that suit your preferences and budget.</p>
          </div>

          <div>
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
              3
            </div>
            <h3 className="font-semibold text-xl mb-2">Get AI Guidance</h3>
            <p className="text-gray-600">
              Ask your assistant anything — from protein intake to motivation tips.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Start Your Fitness Journey Today</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Transform your body, one meal and one workout at a time. Your AI coach is waiting!
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition flex items-center gap-2 mx-auto">
          Begin Now <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-gray-100 py-8 text-center text-gray-600 text-sm">
        <div className="flex justify-center items-center gap-2 mb-2">
          <User className="w-4 h-4" />
          <span>Powered by SmartFit AI — Made with ❤ for every fitness enthusiast.</span>
        </div>
        © {new Date().getFullYear()} EatHealthy. All rights reserved.
      </footer>
    </div>


  );
};


export default Home