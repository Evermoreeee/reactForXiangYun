import React ,{ Component } from '../../../node_modules/react'

// import TopNavBar from '../TopNavBar'
import { Drawer, List, NavBar  } from 'antd-mobile';
class IdealPage extends Component{
    state = {
        open: false,
      }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    render(){
        const TopTabs = ['我的','发现','云村','视频']
        const sidebar = (<List>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
              if (index === 0) {
                return (<List.Item key={index}
                  thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                  multipleLine
                >Category</List.Item>);
              }
              return (<List.Item key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              >Category{index}</List.Item>);
            })}
          </List>);
        return(
            <div>
                <NavBar
                    mode="light"
                    onLeftClick={this.onOpenChange}
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
                    <div style={{display:'flex',width:'100%'}} >
                        {
                            TopTabs.map((item,index) => {
                                return(<div style={{flex:1,textAlign:'center'}} key={index}>{item}</div>)
                            })
                        }
                    </div>
                </NavBar>
                <Drawer
                    className="my-drawer"
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop:'12px'}}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    Click upper-left corner
                </Drawer>
            </div>
        )
    }
}

export default IdealPage;

