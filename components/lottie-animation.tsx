'use client'

import Lottie, { LottieComponentProps } from 'lottie-react'

type LottieAnimationProps = LottieComponentProps

export const LottieAnimation = ({ ...rest }: LottieAnimationProps) => {
  return <Lottie {...rest} />
}
