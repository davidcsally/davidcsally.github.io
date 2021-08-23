import { useState, useRef, useEffect } from 'react'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import styled from 'styled-components'

import type { RefObject } from 'react'

const Text = styled.p`
  display: inline-flex;
  padding: 1rem;
  font-size: 2rem;
  font-family: 'Futura-Heavy-Oblique', Arial, Helvetica, sans-serif;
  color: white;
`

const Column = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
  padding: 1rem;
  background-color: yellow;
  background-color: var(--supremely-red);
  overflow: hidden;
  max-width: 90rem;
  margin: 0 auto;
`

const Mask = styled.div`
  overflow: hidden;
  padding: 0 2rem;
  background-color: var(--supremely-red);
`

const Overflow = styled(motion.div)`
  width: 100%;
  display: block;
  white-space: nowrap;
`

const calculateNodes = (ref: RefObject<HTMLParagraphElement>) => {
  const node = ref.current
  const body = document.querySelector('body')

  if (node && node.offsetWidth) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Math.round(body!.offsetWidth / node.offsetWidth + 1)
  }
  return 1
}

/**
 * This block says has text that scrolls with the viewport
 */
export const SupremeBlock = () => {
  const [numToShow, setNumToShow] = useState(1)
  const { scrollYProgress } = useViewportScroll()
  const myRef = useRef<HTMLParagraphElement>(null)

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-65%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-65%', '0%'])

  // Attach resize listener on mount
  useEffect(() => {
    setNumToShow(calculateNodes(myRef))
    const handleResize = () => setNumToShow(calculateNodes(myRef))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setNumToShow])

  const nodes = []
  nodes.push(
    <Text ref={myRef} key="-1">
      Full Stack Engineer
    </Text>
  )
  for (let i = 0; i < numToShow * 2; i += 1) {
    nodes.push(<Text key={i}>Full Stack Engineer</Text>)
  }

  return (
    <Mask as="section">
      <Column>
        <Overflow style={{ x: x1 }}>{nodes}</Overflow>
        <Overflow style={{ x: x2 }}>{nodes}</Overflow>
        <Overflow style={{ x: x1 }}>{nodes}</Overflow>
        <Overflow style={{ x: x2 }}>{nodes}</Overflow>
      </Column>
    </Mask>
  )
}
