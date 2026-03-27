//Props with children is used when we want to show children as a wrapper. This will be used as a layout just as we did in ecommerce website
import type { PropsWithChildren, ReactNode } from "react"
interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode
}
//since props with children will always have children property and title and footer we have added so destructure them 
export const Card = ({title,children,footer}:CardProps) => {
  return (
    <section>
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </section>
  )
}