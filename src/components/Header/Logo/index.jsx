import Svg from '../../../assets/logo.svg';

import * as S from './styles';

export default function Logo() {
    return (
        <S.img
            showSkeleton
            height={120}
            src={Svg}
            alt="Logo"
            objectFit='cover'
            maxDelay={3000}
        />
    )
}
