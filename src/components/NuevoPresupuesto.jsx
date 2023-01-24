import {useState} from 'react'
import Mensaje from './Mensaje'
import Swal from 'sweetalert2'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();       
        if(presupuesto <= 0 || presupuesto > 50000){
            Swal.fire({
                text: "El presupuesto debe de ser mayor a 0 y menor a 50,000",
                icon: "error",
                confirmButtonColor: '#38BDF8',
            });
            return;
        }

        setMensaje('');
        setIsValidPresupuesto(true);
    }

  return (
    <div id='header-img' className='flex flex-column jc-center heigth-100vh'>
        <section className='container'>
            <div className='flex flex-column jc-center ai-center white-box-shadow '>
                <h1 className='center'>Planificador de Gastos</h1>
                <form onSubmit={handlePresupuesto} className='flex flex-column ai-center'>
                    <div className='flex flex-column ai-center max-w-100'>
                        <label>Definir Presupuesto</label>  

                        <input 
                        className='text-center max-w-100'
                        type="number"
                        placeholder='Añade tu Presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                        onClick={e => e.target.select()} />              
                    </div>

                    <input type="submit" value="Añadir" />

                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                </form>


            </div>
        </section>
    </div>
  )
}

export default NuevoPresupuesto