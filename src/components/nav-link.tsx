import { ComponentProps } from "react"

 interface NavLinkProps extends ComponentProps<'a'> { //Automaticamente o NavLink pode receber todas as propriedades que um <a> recebe
    children: string
 }
 
 export function NavLink(props: NavLinkProps) { //...props -> pega automaticamente todas as propriedades enviadas para o NavLink e adiciona como atributos na tag <a>
    return (
        <a {...props} className='font-medium text-sm'>
            {props.children}
        </a>
    )
}