'use client'

import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
	return (
		<div className='fullScreenContainer'>
			<h1>Rn I have no time for styling this thing. This is the home</h1>
			<Link href='/box'> First scene - BOX </Link>
			<Link href='/two-boxes'> Using components - 2 Boxes </Link>
		</div>	
	)
}
