import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='container'>
              <div className='flex flex-column ai-center m1'>
                <div className='gasto-box'>
                  <div className='campo flex flex-wrap'>
                    <label className='col-12 md-4 f1_5 color-primario'>Filtrar Gastos</label>
                    <select value={filtro} onChange={e => setFiltro(e.target.value)} className='col-12 md-8'>
                        <option value="">Todas las categorías</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
        </form>
    </div>
  )
}

export default Filtros