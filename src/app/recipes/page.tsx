"use client"

import RecipesDisplay from "@/components/RecipeDisplay"
import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"

export interface IRecipes{
    id: number
    name: string
    ingredients: string[]
    instructions: string
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cusisine: string
    caloriesPerServing: number
    tags: string[]
    userId: number
    image: string 
    rating: number
    reviewCount: number
    mealType: string[]
}

export default function Page(){
    const [recipes, setRecipes] = useState([] as IRecipes[])

    useEffect(() => {

        async function fetchRecipes(){
            const data = await fetch("https://dummyjson.com/recipes")
            const initRecipes = (await data.json()).recipes as IRecipes[]

            setRecipes([...initRecipes])
        }
        fetchRecipes()
    },[])

    return(
        <Row>
            <Row>
               
                <RecipesDisplay recipes ={recipes} setRecipes={(data: IRecipes[]) =>{
                    setRecipes([...data])
                }}/>
            </Row>
        </Row>
    )
}