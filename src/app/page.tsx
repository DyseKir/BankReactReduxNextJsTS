'use client'
import './globals.css'

import HeaderNav from './UI/Header/Header'
import Footer from './UI/Footer/Footer'
// import SignUpPage from './Pages/SignUpPage'
// import LoginPage from './Pages/LogInPage'
import HomePage from './Pages/HomePage'

// import HomePage from './Pages/HomePage'
export default function Home() {
	return (
		<>
			<header className='container my-0 mx-auto'>
				<HeaderNav />
			</header>

			<main className='container my-0 mx-auto'>
				<HomePage />
				{/* <SignUpPage />
				<LoginPage /> */}
			</main>

			<footer className='flex flex-col bg-[var(--lightBlack)] '>
				<Footer />
			</footer>
		</>
	)
}
