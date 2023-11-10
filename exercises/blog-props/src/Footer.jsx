import { useState } from 'react'


export default function Footer (){
        return (
            <div>
                <button type="button" className='button'> OLDER POSTS → </button>
                <hr></hr>
                <div>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <h3 className='copyright'>Copyright © Stephanie's Website 2023</h3>
            </div>
        )
}