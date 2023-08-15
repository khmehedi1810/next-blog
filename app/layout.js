import './globals.css'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
        <Menu/>
        <div className='bg-white border-gray-200 dark:bg-gray-700'>
          <div className='max-w-screen-xl mx-auto p-4'>
          {children}
          </div>
        </div>
      </body>
    </html>
  )
}
