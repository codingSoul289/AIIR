import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full red__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h2 className={styles.heading2}>Message from Chairperson, <span className={styles.heading}>CoEAMT</span></h2>
        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
          <div className='px-20 py-2'>
            {feedback.map((card) => (
              <Feedback key={card.id} {...card}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
