import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import type { WidthType, FontSizeType } from '@/types'
import { EyeButton, InputStyled, InputWrapper } from './styles'

export type InputType = {
  type: string
  id: string
  name: string
  className?: string
  placeholder?: string
  value?: string
  display?: string
  $disabled?: boolean
  $required?: boolean
  onClick?: () => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & WidthType &
  FontSizeType

const Input = ({
  type,
  id,
  name,
  className,
  placeholder,
  display,
  $lgWidth,
  $mdWidth,
  $smWidth,
  $lgFontSize,
  $mdFontSize,
  $smFontSize,
  $disabled,
  $required,
  onClick,
  onChange
}: InputType) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputWrapper
      className={className}
      display={display}
      $lgWidth={$lgWidth}
      $mdWidth={$mdWidth}
      $smWidth={$smWidth}
    >
      <InputStyled
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        id={id}
        name={name}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        disabled={$disabled}
        required={$required}
        $lgFontSize={$lgFontSize}
        $mdFontSize={$mdFontSize}
        $smFontSize={$smFontSize}
      />
      {type === 'password' && (
        <EyeButton type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </EyeButton>
      )}
    </InputWrapper>
  )
}

export default Input
