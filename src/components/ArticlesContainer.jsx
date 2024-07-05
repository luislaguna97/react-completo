import { useEffect, useState } from "react"

import { Article } from "./Article"

import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'


//
const apiKey = 'a72213c8e55c47188ee952f90113dd8b'
//   

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center"> 

    {
      // articles.map(article => 
      //   <Article 
      //     key={article.publishedAt}
      //     img={article.urlToImage}
      //     number='01'
      //     title={article.title}
      //     text={article.description}
      //   />)
    }

      <Article
        img={img1}
        number='01'
        title='Quesos'
        text='cada queso es una obra maestra, elaborada con pasión y experiencia para brindarte lo mejor del auténtico sabor y la tradición.'
      />
      <Article
        img={img2}
        number='02'
        title='yogurt'
        text='creemos en la importancia de una alimentación sana y deliciosa. Por eso, nuestros yogures están hechos con los mejores ingredientes, proporcionando un sabor excepcional y beneficios nutricionales en cada cucharada.'
      />
      <Article
        img={img3}
        number='03'
        title='Leche'
        text='Nuestra leche es rica en calcio, proteínas y vitaminas esenciales, perfectas para fortalecer tus huesos y mantener una dieta equilibrada.'
      />

    </section>
  )
}