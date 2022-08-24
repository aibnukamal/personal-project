import { DataProvider } from '../../context/data'
import { render } from '@testing-library/react'

const renderRoute = (component) => {
  return render(<DataProvider>{component}</DataProvider>)
}

export default renderRoute
