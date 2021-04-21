import React from 'react'

import { Button } from '@brandcomponents/buttons'
import '@brandcomponents/buttons/dist/index.css'

const App = () => {
  return (
    <>
      <Button brand="facebook" className="testing-cn">Facebook</Button>
      <Button type="button" brand="facebook" variant={['light', 'wide']} className="testing-cn">Facebook</Button>
      <Button brand="facebook" variant="gray" className="testing-cn">Facebook</Button>
    </>
  )
}

export default App
