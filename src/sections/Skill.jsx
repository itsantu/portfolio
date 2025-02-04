import React from 'react'
import SkillMarquee from '../components/SkillMarquee'

const Skill = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Skills
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          you might looking for,
        </p>
        <SkillMarquee />
      </div>
    </section>
  )
}

export default Skill
