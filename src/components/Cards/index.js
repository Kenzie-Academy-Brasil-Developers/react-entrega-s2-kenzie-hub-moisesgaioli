import { Button } from "@material-ui/core";
import "./styles.css"

const Cards = ({ item, deleteTech }) => {
    return (
        
        <div className="card">  
            <h3 className="title-card"> {item.title} </h3>
            <p className="text-card"> {item.status} </p>
            <Button color="error" variant="outlined" onClick={() => deleteTech(item.id)} > Remover </Button>
        </div>

    )
}

export default Cards;