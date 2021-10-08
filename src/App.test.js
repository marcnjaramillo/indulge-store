import { render, screen } from '@testing-library/react'
import App from './App'
import { client } from './apollo/client'
import { ApolloProvider } from '@apollo/client'

test('renders loading message', () => {
  render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>)
  const loadingMessage = screen.getByText(/loading/i)
  expect(loadingMessage).toBeInTheDocument()
})
