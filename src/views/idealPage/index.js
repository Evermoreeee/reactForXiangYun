import React ,{ Component } from '../../../node_modules/react'

import TopNabBar from '../topNabBar'
import { NavBar } from 'antd-mobile';
class IdealPage extends Component{
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    leftContent={[
                        <img 
                         style={{width:'22px',height:'22px'}}
                         key='0' src={require('../../assets/xiaoxi.png')}
                         alt=""/>
                        ]}
                    rightContent={[
                        <img 
                         style={{width:'22px',height:'22px'}}
                         key='0' src={require('../../assets/sousuo.png')}
                         alt=""/>
                    ]}
                    >
                        <TopNabBar></TopNabBar>
                </NavBar>
            </div>
        )
    }
}

export default IdealPage;

