import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import SliderCom from './index'

describe('SliderCom', () => {
  it('renders a slider with the given props', () => {
    const defaultValue = 50
    const max = 100
    const step = 10
    render(<SliderCom defaultValue={defaultValue} max={max} step={step} />)

    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
    expect(slider).toHaveAttribute('value', defaultValue.toString())
    expect(slider).toHaveAttribute('max', max.toString())
    expect(slider).toHaveAttribute('step', step.toString())
  })
})
