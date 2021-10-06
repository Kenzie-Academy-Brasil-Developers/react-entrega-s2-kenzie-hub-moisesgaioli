

const Cards = ({ item, deleteTech }) => {
    return (
        <>  
            <h3> {item.title} </h3>
            <p> {item.status} </p>
            <button onClick={() => deleteTech(item.id)} > Remover </button>
        </>
    )
}

export default Cards;