import * as React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface Props {
  brand: string
  className: string
  variant: string | string[]
  as: string
  [x: string]: any
}

export const Button = (props: Props) => {
  const { brand, className, variant, as, ...rest } = props

  var variants: string[] = []

  function addVariant(name: string) {
    variants.push(styles[`${brand}-${name}`])
  }

  if (variant && Array.isArray(variant)) {
    variant.forEach((element) => {
      addVariant(element)
    })
  } else if (typeof variant === 'string') {
    addVariant(variant)
  }

  const componentClassNames = classNames(
    brand && styles[brand],
    brand && variants.length > 0 && variants,
    className
  )

  console.log(as)

  const CustomTag = as || 'button'

  return (
    <CustomTag className={componentClassNames} {...rest}>
      {props.children}
    </CustomTag>
  )
}
