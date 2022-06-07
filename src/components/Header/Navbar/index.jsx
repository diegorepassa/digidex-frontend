import Logo from '../Logo/index.jsx'
import * as S from './styles'
import { Text, Spacer } from '@nextui-org/react'

export default function Navbar() {
    return (
        <S.nav>
            <Spacer y={1.2} />
            <Logo />
            <Spacer y={1} />
        </S.nav>
    )
}