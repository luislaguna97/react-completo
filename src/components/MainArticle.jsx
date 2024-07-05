import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    <section className='mb-12 md:mb-0'>
      <picture>
        <source media='(max-width: 640px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />
        <img src={imageMobile} alt="image" />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h2 className='text-[40px] leading-none font-bold sm:text-[58px]'>Bienvenidos a Vitamilk</h2>
        </div>
        <div className='flex-1  pt-9 px-4'>
          <p className='mb-10 text-[13px] sm:text-[15px] '>En Vitamilk , nos dedicamos a producir lácteos de la más alta calidad, combinando técnicas tradicionales con innovación moderna. Desde hace 10 años, hemos trabajado incansablemente para ofrecer productos que no solo satisfacen el paladar sino que también nutren a nuestras comunidades.</p>
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue '>Read more</button>
        </div>
      </div>
    </section>
  )
}