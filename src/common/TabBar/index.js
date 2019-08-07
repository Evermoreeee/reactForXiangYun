import React ,{ Component } from '../../../node_modules/react'
// import TabBarExample from '../../compnents/TabBar'
import { TabBar } from '../../../node_modules/antd-mobile';

class TabBarExample extends Component {
    constructor(props) {
      super();
      this.state = {
        selectedTab: '音乐馆', //默认选中端tab
      };
    }
    renderContent(pageText){
      return(
        <div className='pageItem'>
          {pageText}
        </div>
      )
    }

    render(){
        const TabBarList = [
          {
            title:'理想',
            imgUrl:require('../../assets/fenxiang.png'),
            selectUrl:require('../../assets/fenxiang.png')
          },
          {
            title:'热情',
            imgUrl:require('../../assets/shoucang.png'),
            selectUrl:require('../../assets/shoucang.png')
          },
          {
            title:'坚持',
            imgUrl:require('../../assets/remen.png'),
            selectUrl:require('../../assets/remen.png')
          },
          {
            title:'行动',
            imgUrl:require('../../assets/yuyin.png'),
            selectUrl:require('../../assets/yuyin.png')
          }
        ]
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0}}>
                <TabBar
                  unselectedTintColor="#949494"
                  tintColor="#33A3F4"
                  barTintColor="white"
                  prerenderingSiblingsNumber='0'
                  >
                   {
                     TabBarList.map((item,index)=>{
                      return(
                        <TabBar.Item
                        title={item.title}
                        key={item.title}
                        icon={
                          <img style={{width:"16px",height:'16px'}} src={item.imgUrl}></img>
                        }
                        selectedIcon={
                          <img style={{width:"16px",height:'16px'}} src={item.selectUrl}></img>
                        }
                        selected={this.state.selectedTab === item.title}
                        onPress={() => {
                          this.setState({
                            selectedTab:item.title,
                          });
                        }}
                        >
                          <div className='tabbarItem'>
                            {this.renderContent(item.title)}
                          </div>
                        </TabBar.Item>
                      )
                    })
                   }
                </TabBar>
            </div>
        )
    }
}
export default TabBarExample;