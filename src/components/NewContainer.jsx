import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[30px] flex-none mb-[60px] md:w-[350px] md:mb-0 ">
      <h1 className="text-softOrange text-4xl font-bold">Noticias</h1>

        <NewArticle 
          title='Certificación de Calidad ISO 22000'
          text='Nos enorgullece compartir que vitamilk ha obtenido la certificación ISO 22000, que garantiza la máxima calidad y ...'
        />

        <NewArticle 
          title='Programa de Sostenibilidad Agrícola'
          text='En nuestra continua misión de proteger el medio ambiente, hemos lanzado un nuevo programa de sostenibilidad agrícola.'
        />

        <NewArticle 
          title='Lanzamiento de Nuevo Queso Artesanal'
          text='Estamos emocionados de anunciar el lanzamiento de nuestro nuevo queso artesanal madurado. Con un sabor único y una textura inigualable'
        />
    </aside>
  )
}