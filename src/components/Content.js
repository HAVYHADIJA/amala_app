export default function Content(props) {
    return (
        <div>
            
            <h4>{props.tittle}</h4>


            <ul>
                {props.items.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div >)
}