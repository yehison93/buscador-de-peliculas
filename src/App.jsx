import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Buscador from './component/Buscador'
import DisplayPeliculas from './component/DisplayPeliculas'
import useForm from './custom_hooks/UseForm'
import useFetchData from './custom_hooks/UseFetchData'


function App () {
  const [input, onChange] = useForm({
    search: '',
    type: 'multi'
  })
  
  const [data] = useFetchData(input)

  return (
    <Container fluid>
      <Buscador input={input} onChange={onChange} />
      <Row className='justify-content-center my-4'>
        <DisplayPeliculas searchs={data || []} input={input}/>
      </Row>
    </Container>
  )
}

export default App
