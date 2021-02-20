import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; // 패키지 불러오기


class NaverMap_Company extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        lat:37.554722,
        lng:126.970833
    }
}
componentDidUpdate=()=>{  
  console.log(this.props);
  this.componentDidMount();
}
 render(){
  console.log(this.props);
    return (
      <RenderAfterNavermapsLoaded
        ncpClientId={'oydrem9bc3'} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '45vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng }} // 지도 초기 위치
        defaultZoom={15} // 지도 초기 확대 배율
      />
      </RenderAfterNavermapsLoaded>
    );
  }
}
export default NaverMap_Company;

