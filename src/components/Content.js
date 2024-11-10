export default function Content(props) {
    return (
        <div>
            <p>This is a very nice website</p>
            <h4>{props.tittle}</h4>


            <ul>
                {props.items.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div >)
}