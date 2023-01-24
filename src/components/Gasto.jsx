import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import {formatearFecha} from '../helpers'

import IcoAhorro from '../img/icono_ahorro.svg'
import IcoCasa from '../img/icono_casa.svg'
import IcoComida from '../img/icono_comida.svg'
import IcoGastos from '../img/icono_gastos.svg'
import IcoOcio from '../img/icono_ocio.svg'
import IcoSalud from '../img/icono_salud.svg'
import IcoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro : IcoAhorro,
    comida : IcoComida,
    casa : IcoCasa,
    gastos : IcoGastos,
    ocio : IcoOcio,
    salud : IcoSalud,
    suscripciones : IcoSuscripciones
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    const {categoria, nombre, cantidad, id, fecha} = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => eliminarGasto(id)}
                destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='container'>        
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}>            
                <div className="flex flex-column ai-center col-12">
                    <div className="gasto-box flex flex-wrap jc-space-between ai-center">
                        <div className='flex flex-wrap jc-space-betweens ai-center col-12 md-8'>
                            <div className='col-12 md-4 flex js-center'>
                                <img 
                                src={diccionarioIconos[categoria]} 
                                alt="icono gasto"
                                />
                            </div>
                            <div className='col-6 md-5 '>
                                <p className="categoria-gasto">{categoria}</p>
                                <p className="nombre-gasto">{nombre}</p>
                                {/* <p className='fecha-gasto'>
                                    Agregado el: {''}
                                    <span>{formatearFecha(fecha)}</span>
                                </p> */}
                            </div>
                            <div className='col-6 md-3'>
                                <p className='cantidad-gasto'>{formatearCantidad(cantidad)}</p>
                            </div>
                        </div>
                        <div className=' flex jc-space-between md-flex-wrap md-jc-center col-12 md-3'>
                            <button className=' col-5 md-10' onClick={() => setGastoEditar(gasto)}>Editar</button>
                            <button className='btn-borrar col-5 md-10' onClick={() => eliminarGasto(id)}>Borrar</button>
                        </div>                                                      
                    </div>
                    
                </div>            
            </SwipeableListItem>
        </SwipeableList>
    </div>
  )
}

export default Gasto