import Nav from './components/Nav'
import './globals.css'
import ReactQueryProvider from "./ReactQueryProvider";
import { Providers } from './redux/provider'

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Nav />
          <ReactQueryProvider>
            <Providers>
            {children}
            </Providers>
          </ReactQueryProvider>
      </body>
    </html>
  )
}
