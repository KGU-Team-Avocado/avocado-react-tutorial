import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import GabrielView from '../../views/user/gabriel/GabrielView';
import HidoView from '../../views/user/HidoView';
import YeonsuView from '../../views/user/YeonsuView';
import SeeunView from '../../views/user/SeeunView';
import WwwlsView from '../../views/user/WwwlsView';
import HyunjunView from '../../views/user/HyunjunView';
import GykimView from '../../views/user/GykimView';
import SoyoungView from '../../views/user/SoyoungView';

const data = {
  gabrielyoon7:{
    html:<GabrielView/>,
  },
  hido02:{
    html:<HidoView/>,
  },
  yeonsu00:{
    html:<YeonsuView/>,
  },
  seeun01:{
    html:<SeeunView/>,
  },
  wwwls99:{
    html:<WwwlsView/>,
  },
  hyunjun003:{
    html:<HyunjunView/>,
  },
  gykim0923:{
    html:<GykimView/>,
  },
  soyoung125:{
    html:<SoyoungView/>,
  },
};

const DataPage = () => {
  const params = useParams();
  const menu = data[params.menu];

  return (
    <div>
        <Header/>
        {/* 이 자리에 container가 오지 않는 이유는 loading 페이지 간격아 어색하기 때문임 */}
        {menu ? (
            <>
              {menu.html}
            </>
        ) : (
            <p>존재하지 않는 메뉴입니다.</p>
        )}
    </div>
  );
};

export default DataPage;