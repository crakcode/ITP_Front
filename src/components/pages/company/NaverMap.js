import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap,Marker } from 'react-naver-maps'; // 패키지 불러오기
import { getCompanyByName } from '../../../lib/company';


class NaverMap_Company extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name:'',
        lat:37.554722,
        lng:126.970833
    }
}
componentDidMount=async()=>{ 
  this.handleView(); 
}
handleView=async()=>{
  console.log(this.props.data.id);
  const {data}=await getCompanyByName(this.props.data.id);
  this.setState({lng:data[0].longitude});
  this.setState({lat:data[0].latitude});
  this.setState({name:data[0].companyName});
}


 render(){
  const { navermaps }= this.props;
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
          height: '40vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
    >
    <Marker
        key={1}
        position={{ lat: this.state.lat, lng: this.state.lng }}
        animation={2}
        onClick={() => {alert("이 회사는"+this.state.name+"입니다.");}}
      />

        </NaverMap>
      </RenderAfterNavermapsLoaded>
    );
  }
}
export default NaverMap_Company;

