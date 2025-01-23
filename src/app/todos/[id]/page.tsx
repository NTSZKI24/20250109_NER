type Params = Promise<{
    id: string
}>

export default async function Page(
    props: {
        params: Params
    }
){
    const params = await props.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const data = await response.json()

    return(
        <div>
            Title: {data.title} <br />
            UserId: {data.userId} <br />
            Completed: {data.completed ? "Yes" : "No"}
        </div>
    )
}