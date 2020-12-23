const Item = (props) => {
    console.log(props)
    return (
        <div>
            <img src={props.image} />
            <div>
                <div>{props.name}</div>
                <div>{props.price}</div>
                <div>{props.category}</div>
            </div>
        </div>
    )
}

export default Item;


