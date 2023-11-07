import App from '@/components/App'
import './globals.css'
import { Inter } from 'next/font/google'
import { StoreProvider } from '@/redux/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // 웹페이지 제목과 설명 메타데이터
  title: '다팔아',
  description: 'Global shopping mall using Next.js, MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  )
}
