import { useState } from 'react'


export default function Header (){
       return (
            <div className='header'>
                <div className='img'></div>
                <nav>
                    <h2>Start Bootstrap</h2>
                    <h5>HOME</h5>
                    <h5>ABOUT</h5>
                    <h5>SAMPLE POST</h5>
                    <h5>CONTACT</h5>
                </nav>
                <h1 className='cleanblog'>Clean Blog</h1>
                <h3 className='bio'>A Blog Theme By Start Bootstrap</h3>
            </div>
       )
}