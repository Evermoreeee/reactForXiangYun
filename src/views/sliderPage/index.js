import React ,{ Component } from '../../../node_modules/react'
import { Carousel, WingBlank  } from 'antd-mobile';


class SliderPage extends Component{
    state = {
        data: ['1', '2', '3','4'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [
                'http://p1.music.126.net/wt_fhhVpkNs_9X_YmvrSlg==/109951164275533267.jpg', 
                'http://p1.music.126.net/l75oqBhEUdxcuEnX4oe-mw==/109951164276097647.jpg', 
                'http://p1.music.126.net/VAzy7-v4e-6LCr2euEW8Nw==/109951164275515949.jpg',
                'http://p1.music.126.net/303FyMiwAHm1eLmgqbCdZA==/109951164272465784.jpg'],
          });
        }, 100);
    }
    render(){
    
        return(
            
        <Carousel
          autoplay
          dots
          dotActiveStyle={{background:'#red'}}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <div  key={val} style={{width:'90%',height:'190px',margin:'0 auto',}}>
                <img
                    src={ val } 
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}
                />
            </div>
          ))}
        </Carousel>
        )
    }
}
export default SliderPage;