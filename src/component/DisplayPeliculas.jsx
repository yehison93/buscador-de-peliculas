// import exampleApi from '../assets/ExampleAPI.json'
import { Badge, Card, Stack } from 'react-bootstrap'

const imageUrl = "https://image.tmdb.org/t/p/w200"



const DisplayPeliculas = ( { searchs, input } ) => {
  
  const data = searchs.results;
  data?.sort((a, b) => b.popularity - a.popularity);

  return (

    <>
      {input.search?data.length >= 1?<Card.Text>{`Resultados de ${input.search}:`}</Card.Text>: <Card.Text>{`Sin resultados para ${input.search}.`}</Card.Text>: <Card.Text>{`Lo mas trending del dia:`}</Card.Text>}
      {data
        ?
        data.map((search) => {
          return (
            <Card
              key={search.id}
              style={{ width: '300px' }}
              className='text-center m-2 p-0'
            >
              <Card.Header>
                <Card.Title>{`${search.original_title || search.original_name || search.name } `} <span className='text-muted fs-6'>{`(${search.media_type || input.type})`}</span></Card.Title>
                
                
              </Card.Header>
              <Card.Subtitle />
              <Card.Body className='gap-2'>
                <Stack direction='horizontal' gap={1}>
                  <Badge bg='secondary' className='mx-auto mb-2'>
                    {`🩷 ${search.popularity || 'Popularidad desconocida'}`}
                  </Badge>
                  {search.known_for?null:<Badge bg='secondary' className='mx-auto mb-2 '>
                  {`📆 ${search.release_date || search.first_air_date || 'Desconocida'}`}
                  </Badge>}
                </Stack>
                <>
                {search.poster_path || search.profile_path || search.backdrop_path
                  ? <Card.Img style={{height: 300}} src={`${imageUrl}${search.poster_path || search.profile_path || search.backdrop_path}`} alt={`imagen referente a la pelicula ${search.original_title}`} />
                  : <Card.Title>{`${search.original_title} no tiene poster conocido en esta pagina...`}</Card.Title>}
                </>
                <>
                {
                  search.known_for?
                  <Stack gap={1} className='m-2 fs-6'>
                    <Card.Text>Conocido por:</Card.Text>
                    {
                    search.known_for.map((search)=>{
                      return(
                      <Badge bg='secondary' key={`badge${search.id}`}>{search.original_title || search.title || search.name}</Badge>
                      )})}
                  </Stack>: null
                }
                
                </>
                <Card.Text className='my-2'>{search.overview}</Card.Text>
              </Card.Body>
            </Card>
          )
        })
        : <Card.Title>Busca tu pelicula</Card.Title>}
    </>

  )
}

export default DisplayPeliculas
