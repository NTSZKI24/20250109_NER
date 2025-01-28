import { IRecipes } from "@/app/recipes/page";
import { Card, CardFooter, CardHeader, CardSubtitle, Col, Row } from "react-bootstrap";

export default function RecipesDisplay({
    recipes,
    setRecipes
}: {
    recipes: IRecipes[]
    setRecipes: Function
}) {
    return(
        <Col xs={12}>
            <Row>
                {recipes.map((recipes) => (
                    <Col key={recipes.id} xs={3}>
                        <Card>
                            <Card.Header>{recipes.name}
                            <Card.Img src={recipes.image} variant="top"/>
                            </Card.Header>
                            <Card.Text>{recipes.servings}</Card.Text>
                            <Card.Text>{recipes.difficulty}</Card.Text>
                            <Card.Text>{recipes.caloriesPerServing}</Card.Text>
                            <Card.Text>{recipes.prepTimeMinutes}</Card.Text>
                            <Card.Text>{recipes.cookTimeMinutes}</Card.Text>
                            <Card.Text>{recipes.cusisine}</Card.Text>
                            <Card.Text>{recipes.ingredients}</Card.Text>
                             <Card.Text>{recipes.instructions}</Card.Text>
                            <Card.Text>{recipes.tags}</Card.Text>
                            <Card.Text>{recipes.reviewCount}</Card.Text>
                            <Card.Subtitle>{recipes.rating}</Card.Subtitle>
                            <CardFooter>{recipes.mealType}</CardFooter>
                        
                         </Card>   
                    </Col>
                ))}
            </Row>
        </Col>
    )
}