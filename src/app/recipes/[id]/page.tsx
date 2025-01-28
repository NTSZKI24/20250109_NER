
import { BaseSyntheticEvent } from "react";
import { Row } from "react-bootstrap";

type Params = Promise<{
    id: string
}>

export default async function Page(
    props: {
        params: Params
    }
)
{
    const params = await props.params;
    const response = await fetch(`https://dummyjson.com/recipes/${params.id}`)
    const data = await response.json()

   
    return(
        <div>
            Title: {data.title} <br />
            UserId: {data.userId} <br />
        </div>
        
        
    )
}