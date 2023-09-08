'use client'
import './globals.css'
import { Sora } from 'next/font/google'
import Header from '../components/Header'
import TopLeftImg from '@/components/TopLeftImg'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['100', '200', '300', '400', '500', '600', '700', '800',] })

export const metadata = {
  title: 'Taiwo Kolawole Portfolio',
  description: 'Welcome to Taiwo Portfolio',
}

import Layout from '../components/Layout'
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div className='page bg-site text-white bg-cover bg-no-repeat font-sora relative ' >
          <TopLeftImg />
          <Navbar />
          <Header />
          <Layout>
            {children}
          </Layout>
        </div>
      </body>
    </html>
  )
}
