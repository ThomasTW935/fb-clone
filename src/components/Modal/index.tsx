import React, { useState } from 'react'
import Con from './Modal.style'

interface IProps {
  open: boolean
  setOpen: (arg0: boolean) => void
}

export default function Modal({ open, setOpen }: IProps) {
  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      {open && (
        <Con>
          <Con.Form>
            <Con.Head>
              <p>Create Post</p>
              <button onClick={closeModal}>&times;</button>
            </Con.Head>
            <Con.Body>
              <textarea placeholder="What's on your mind?"></textarea>
              <button>Post</button>
            </Con.Body>
          </Con.Form>
        </Con>
      )}
    </>
  )
}
