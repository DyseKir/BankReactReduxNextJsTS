'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HtagComponent } from '@/app/UI/HTag/Htag'
import { PTagComponent } from '@/app/UI/PTag/Ptag'
import axios from 'axios'

type Product = {
	src: string
	alt: string
	title: string
	text: string
}

const InfoCard: React.FC<{ product: Product; index: number }> = ({
	product,
	index,
}) => {
	return (
		<motion.article
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{
				duration: 0.5,
				delay: index * 0.2, // Staggered animation
				ease: 'easeOut',
			}}
			className='flex flex-col space-y-7 items-center max-w-[464px]'
		>
			<img src={product.src} alt={product.alt} />
			<div className='flex flex-col space-y-5 items-center text-center'>
				<HtagComponent
					$tag='h3'
					$fontFamily='Lexend'
					$color='white'
					$fontSize='24px'
					$lineHeight='36px'
					$fontWeight={400}
				>
					{product.title}
				</HtagComponent>
				<PTagComponent
					$tag='p'
					$fontFamily='Lexend'
					$color='grey'
					$fontSize='18px'
					$lineHeight='27px'
					$fontWeight={300}
				>
					{product.text}
				</PTagComponent>
			</div>
		</motion.article>
	)
}

const ProductList: React.FC<{ mode: 'individual' | 'business' }> = ({
	mode,
}) => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		axios
			.get('./Products.json')
			.then(response => {
				if (response.data['Product-section']) {
					setProducts(response.data['Product-section'][mode])
				}
			})
			.catch(error => {
				console.error('Error loading:', error)
			})
	}, [mode])

	return (
		<motion.div
			key={mode}
			className='flex flex-row items-start justify-center gap-6'
		>
			<AnimatePresence>
				{products.map((product, index) => (
					<InfoCard key={`${mode}-${index}`} product={product} index={index} />
				))}
			</AnimatePresence>
		</motion.div>
	)
}

export default ProductList
