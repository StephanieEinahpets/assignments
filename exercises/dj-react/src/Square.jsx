import React from 'react'
import { useState } from 'react'

export default function Square(props) {
    return (
              <div className="box" style={{ backgroundColor: props.color }}></div>
    )
  }