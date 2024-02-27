import { Card, Form } from 'react-bootstrap'

const Buscador = ({ input, onChange }) => {

  return (
    <Card className='d-flex row align-items-center justify-content-center'>
      <Card.Header>
        <Card.Title>
          Buscador de Peliculas
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Form >
          <Form.Group>
            <Form.Label>Selecciona el tipo de busqueda:</Form.Label>
            <Form.Select name='type' value={input.type} onChangeCapture={onChange}>
              <option value='multi'>Todas</option>
              <option value='movie'>Peliculas</option>
              <option value='tv'>Series</option>
              <option value='person'>Personajes</option>
              <option value='collection'>Coleccion</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Busca tu pelicula aqui:</Form.Label>
            <Form.Control type='text' name='search' value={input.search} onChange={onChange} placeholder='Advenger, DC Universe, Mario Brothers...' />
            <Form.Text className='text-muted'>
              Busca por titulo, personajes, actores o id si lo conoces.
            </Form.Text>
          </Form.Group>
          {/* <Button variant='outline-dark' type='submit'>
            Buscar
          </Button> */}
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Buscador
