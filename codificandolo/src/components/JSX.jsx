

export const JSX = () => {

  const nombre = 'Manuel'

  const renderizarObjeto = (objt) => {
    return objt.nombre + ' ' + objt.apellido
  }

  const objetoNombres = {
    nombre: 'Luciana',
    apellido: 'Muñoz'
  }

  return (
    <div>
      <p>El nombre es: {nombre} y tiene {17 + 1}</p>
      <p>El nombre renderizado del objeto es: {renderizarObjeto(objetoNombres)}</p>
    </div>
  )
}
