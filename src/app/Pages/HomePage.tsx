import React from 'react'
import AskedQuestionsSection from '../Sections/AskedQuestionsSection/AskedQuestionsSection'
import OurProductSection from '../Sections/OurProductSection/OurProductSection'
import UseCasesSection from '../Sections/UseCasesSection/UseCasesSection'
import OurFeaturesSection from '../Sections/OurFeaturesSection/OurFeaturesSection'
import OurTestimonialSection from '../Sections/OurTestimonialSection/OurTestimonialSection'
import FinancialJourney from '../Sections/FinancialJourney/FinancialJourney'
import HeroSection from '../Sections/HeroSection/HeroSection'

function HomePage() {
	return (
		<>
			<HeroSection />
			<OurProductSection />
			<UseCasesSection />
			<OurFeaturesSection />
			<AskedQuestionsSection />
			<OurTestimonialSection />
			<FinancialJourney />
		</>
	)
}

export default HomePage
