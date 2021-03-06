import React ,{ Component } from 'react'

import { Tabs } from 'antd-mobile';

class TopNavBar extends Component {
    render(){
        const tabs2 = [
            { title: 'First Tab', sub: '1' },
            { title: 'Second Tab', sub: '2' },
            { title: 'Third Tab', sub: '3' },
            { title: 'Third Tab', sub: '4' },
          ];
        return(
            <Tabs tabs={tabs2}
                initialPage={1}
                tabBarPosition="bottom"
                renderTab={tab => <span>{tab.title}</span>}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of first tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of second tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of third tab
                </div>
            </Tabs>
        )
    }
}
export default TopNavBar;