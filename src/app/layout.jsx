import { Alex_Brush, Montserrat } from 'next/font/google';
import './globals.css';

const alexBrush = Alex_Brush({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alexBrush' 
});

const montserrat = Montserrat({ 
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable: '--font-montserrat' 
});

export const metadata = {
  title: 'CACAU RAMOS',
  description: 'Designer de moda textil.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${alexBrush.variable} ${montserrat.variable} overflow-x-hidden relative`}>
        {children}
      </body>
    </html>
  )
}
