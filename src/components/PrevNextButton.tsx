import React, { ReactNode } from 'react'

interface IPrevNextButtonProps {
  type: 'prev' | 'next'
  children: ReactNode
  className?: string
  onClick?: () => void
}

const PrevNextButton = ({
  type,
  children,
  className = null,
  onClick = null,
}: IPrevNextButtonProps) => {
  return (
    <button
      className={`prev-next-btn ${type} ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrevNextButton
