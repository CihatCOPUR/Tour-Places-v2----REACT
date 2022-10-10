const Content = (items) => {
    const {
        title, image, desc
    } = items;
    return (
        <div className="cart">
            <h2>{title.toUpperCase()}</h2>
            <img src={image} alt="img" />
            <div className="cart-over"><p>{desc}</p></div>
        </div>
        )
}

export default Content;