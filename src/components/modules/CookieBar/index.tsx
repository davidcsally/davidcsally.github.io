import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'

import Text from 'components/shared/Text'
import Margin from 'components/shared/Margin'
import { flex } from 'styles/mixins'

interface Props {
  isOpen: boolean
  closeCookieBar: () => void
}

const Column = styled.div`
  ${flex({ direction: 'column' })}
`

const Row = styled.div`
  ${flex()}
`

const Container = styled(motion.aside)`
  ${flex()}
  position: fixed;
  bottom: 0;
  min-height: 5rem;
  background-color: white;
  color: black;
  width: 100%;
  border: 2px solid black;
  font-size: 1.5rem;
  padding: 1rem;
  z-index: 10;

  p {
    margin-right: 1.5rem;
  }
`

const animation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
}

const Button = styled.button`
  padding: 1rem 1rem;
  border: 2px solid black;
  background-color: black;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`

const CookieBar = ({ isOpen, closeCookieBar }: Props) => (
  <AnimatePresence>
    {isOpen ? (
      <Container data-testid="cookie-bar" key="cookie-bar" {...animation}>
        <Column>
          <Margin mb="0.5rem">
            <Row>
              <p>This site uses cookies. Or does it?</p>
              <Button type="button" onClick={() => closeCookieBar()}>
                Who Cares
              </Button>
            </Row>
          </Margin>

          <Text fontSize="0.75rem">
            (but actually it uses a cookie to remember if you clicked this)
          </Text>
        </Column>
      </Container>
    ) : null}
  </AnimatePresence>
)

export default CookieBar
