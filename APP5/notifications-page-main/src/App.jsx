import React, { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Components/Header'
const App = () => {
  const [notifications,setNotifications]=useState([
    {id:1,read:false,profileimage:'',name:'Mark Webber',conent:'reacted to your recent post',link:'My first tournament today!',message:'',image:'',messageOrLinkOrImage:{haslink:true,hasmessage:false,hasimage:false},time:'1m ago'},
    {id:2,read:false,profileimage:'',name:'Angela Gray',conent:'followed you',link:'',message:'',image:'',messageOrLinkOrImage:{haslink:false,hasmessage:false,hasimage:false},time:'5m ago'},
    {id:3,read:false,profileimage:'',name:'Jacob Thompson',conent:'has joined your group',link:'Chess Club',image:'',message:'',messageOrLinkOrImage:{haslink:true,hasmessage:false,hasimage:false},time:'1 day ago'},
    {id:4,read:true,profileimage:'',name:'Rizky Hasanuddin',conent:'sent you a private message',link:'',message:"  Hello, thanks for setting up the Chess Club.I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",image:'',messageOrLinkOrImage:{haslink:false,hasmessage:true,hasimage:false},time:'5 days ago'},
    {id:5,read:true,profileimage:'',name:'Kimberly Smith',conent:'commented on your picture',link:'',message:'',image:'',messageOrLinkOrImage:{haslink:false,hasmessage:false,hasimage:true},time:'1 week ago'},
    {id:6,read:true,profileimage:'',name:'Nathan Peterson',conent:'reacted to your recent post',link:'5 end-game strategies to increase your win rate',message:'',image:'',messageOrLinkOrImage:{haslink:true,hasmessage:false,hasimage:false},time:'2 weeks ago'},
    {id:7,read:true,profileimage:'',name:'Anna Kim',conent:'left the group',link:'Chess Club',message:'',image:'',messageOrLinkOrImage:{haslink:true,hasmessage:false,hasimage:false},time:'2 weeks ago'}
  ])
    
               
  return (
    <div className={styles.container}>
        <Header notificationcount={3}></Header>
    </div>
  )
}
export default App;