
import { useState } from 'react'
import './App.css'
import { Question } from './components/Question'
import star from './Assets/icon-star.svg'
import desktoppattern from './Assets/background-pattern-desktop.svg'
import mobilepattern from './Assets/background-pattern-mobile.svg'
function App() {
  const [frontendMentorQA, setFrontendMentorQA] = useState([
    {
      id:0,
      question: "What is Frontend Mentor, and how will it help me?",
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      show:true
    },
    {
      id:1,
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      show:false
    },
    {
      id:2,
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      show:false
    },
    {
      id:3,
      question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      show:false
    },
  ]);
  const updateFaq=(id,showstatus)=>{
    
    setFrontendMentorQA(frontendMentorQA.map((qa,ind)=>{
      if(ind==id){
        return {...qa,show:showstatus}
      }
      else{
        return qa
      }
    }))
  }
  return (
    <div className='container'>
   
    <div className='card'>
    <h1 className='heading'><img src={star} alt='star' className='star'></img>FAQs</h1>
      {frontendMentorQA.map((QApair,index)=>{
        return <Question key={index} QApair={QApair} updateFaq={updateFaq}></Question>
      })}
   
    </div>

    </div>
    
  )
}

export default App
