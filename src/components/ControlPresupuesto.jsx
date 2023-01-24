import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import Swal from 'sweetalert2'

const ControlPresupuesto = ({ gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
      const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
      
      const totalDisponible = presupuesto - totalGastado;

      //Calcular el porcentaje gastado
      const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(0);      

      setDisponible(totalDisponible);
      setGastado(totalGastado);
      setTimeout(() => {
        setPorcentaje(nuevoPorcentaje);
      }, 1000);
    }, [gastos])
    

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        /* const resultado = confirm('¿Deseas reininar el presupuesto y los gastos?');
        if(resultado){
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        } */

        Swal.fire({
            title: "¿Quieres resetear la app?",
            text: "Si lo haces borrarás todos los datos y no podrás recuperarlos",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#EF7857',
            confirmButtonColor: '#38BDF8'
          })
          .then((result) => {
            if (result.isConfirmed) {
              console.log('borrar')
              Swal.fire( {
                text: "¡Perfecto! Los datos han sido borrados, puedes volver a utilizar la app", 
                icon: "success",
                confirmButtonColor: '#38BDF8'
              });
              setTimeout(() => {
                setGastos([])
                setPresupuesto(0)
                setIsValidPresupuesto(false)
              }, 1000);
             
            } else{
              console.log(' salvando datos')
              Swal.fire({
                text: "Todos tus datos están a salvo", 
                icon: "success",
                confirmButtonColor: '#38BDF8'
              });
            }
          });
          


        /* const confirmacion = window.confirm('¿Estas seguro de querer reiniciar la aplicación?')
        if (confirmacion) {
            localStorage.clear()
            window.location.reload()
        } */
    }

    return (
      <div id="header-img" className="flex flex-column jc-center heigth-60vh">
        <section className="container">
          <div className="m1">
            <div className='flex flex-column jc-center ai-center white-box-shadow '>
              <div className="flex flex-wrap jc-space-around ai-center col-12">
                <div className="col-12 sm-12 md-4 flex jc-center m1">
                    <CircularProgressbar
                        styles={buildStyles({
                            pathColor: porcentaje > 100 ? '#EF7857' : '#3B82F6',
                            trailColor: '#F5F5F5',
                            textColor: porcentaje > 100 ? '#EF7857' : '#3B82F6',
                            textSize: '10px'
                        })}
                        value={porcentaje}
                        text={`${porcentaje}% Gastado`} />
                </div>

                <div className="col-12 sm-12 md-6">
                    <button className="reset-app" type="button" onClick={handleResetApp}>
                        Resetear App
                    </button>
                    <p>
                        <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
                    </p>

                    <p className={`${disponible < 0 ? 'red' : ''}`}>
                        <span>Disponible:</span> {formatearCantidad(disponible)}
                    </p>

                    <p>
                        <span>Gastado:</span> {formatearCantidad(gastado)}
                    </p>
                </div>
                </div>
            </div>
          </div>
        </section>
      </div>   
    )
}

export default ControlPresupuesto