interface Props {
    children: JSX.Element
}

// Component tonto, solo recibe algo y lo muestra
function Test({ children}: Props ) {
    return (
        <div style={{ color: 'tomato' }}>
            {children}
        </div>
    )
}

export default Test;