import { motion } from 'framer-motion'

import images from '../exports/images'
import '../styles/slider.css'

export const Slider = () => {
  return (
    <motion.div className='slider-container'>
      <motion.div className='slider' drag='x' dragConstraints={{right: 0, left:-120}}>
        {images.map(image => (
          <motion.div className='item'>
            <img src={image} alt="img-cool" />
          </motion.div>
        ))}
      </motion.div>      
    </motion.div>
  )
}
