import * as S from './styles'
import Navbar from '../../components/Header/Navbar';
import Search from '../../components/Search/';
import Info from '../../components/Info/';

function Home() {

  return (
    <S.div>
      <Navbar />
      <Search />
    </S.div>
  )
}

export default Home;
