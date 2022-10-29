export const TypeList = ({types}) => {
    return <article>
        <ul>
            {
                types.map((types) => <li key={types.index}>{types}</li> )
            }
        </ul>
    </article>
}