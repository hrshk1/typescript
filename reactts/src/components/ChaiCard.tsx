//The function will work nice and there will be no issues but it will show red underline because we haven't defined the type for the props that we are passing to the component. To fix this issue, we can define an interface for the props and use it in the function definition.
interface ChaiCardProps {
    name: string;
    price: string;
    isSpecial?: boolean; //optional prop
}
export function ChaiCard({name, price, isSpecial = false}: ChaiCardProps){
    return (
        <article>
            <h2>
                {name} {isSpecial && <span>star</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
}