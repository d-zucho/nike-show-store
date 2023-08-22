import { arrowRight, cheveronRight } from '../assets/icons'
import { shoe8 } from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='text-left flex justify-between items-center max-lg:flex-col gap 10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold text-left lg:max-w-lg'>
          <p>
            We provide you
            <br />
            <span className='text-coral-red inline-block mt-3'>
              Super Quality
            </span>{' '}
            Shoes
          </p>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is design to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfgaction
        </p>
        <div className='mt-11'>
          <Button label='Shop Now' iconURL={arrowRight} />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          className='object-contain'
          src={shoe8}
          alt='shoe 8'
          width={570}
          height={522}
        />
      </div>
    </section>
  )
}

export default SuperQuality
