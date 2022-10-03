import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { UserPreferencesProvider } from 'contexts/UserPreferencesContext'

import Cursor from 'components/Cursor'
import Header from 'components/Header'

import 'styles/index.scss'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <UserPreferencesProvider>
        <div className="noise-layer" />
        <Cursor />
        <Header />
        <Component {...pageProps} />
      </UserPreferencesProvider>
    </>
  )
}

export default MyApp
