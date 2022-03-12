import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"
import Link from "next/link";
import { LinkHTMLAttributes } from "react"

interface SetaProps extends LinkHTMLAttributes<HTMLLinkElement>  {
    cursor: string;
    href: string;
}

const translateY = keyframes`
    from {transform: translateY(0%)}
    to {transform: translateY(50%)}
` 

export const Seta = ({ cursor, href }:SetaProps) => {
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion
    ? undefined
    : `${translateY} infinite 0.9s linear`


    return (
        <Link href={href}>
            <Box animation={animation} cursor={cursor} padding={'20px'} boxShadow={'4px -4px 0 1px #101010 inset'} border={'solid transparent'} border-width={"0 0 2px 2px"} transform={'rotate(-45deg)'} />
        </Link>
    )
}