import React ,{ Component } from '../../../node_modules/react'
// import {IconBox,ItemIcon} from './style.js'
import styled from 'styled-components'

class IconNavBar extends Component{
    render(){
        const iconlist =[
            {url:require('../../assets/iconnav/baby-trolley.png'),title:'ainidexin' },
            {url:require('../../assets/iconnav/dating-rose.png') ,title:'songhua'},
            {url:require('../../assets/iconnav/graph-stats-circle.png'),title:'xintiao' },
            {url:require('../../assets/iconnav/design-tool-pen-station.png'),title:'xiexi' },
            {url:require('../../assets/iconnav/beach-parasol-water-.png'),title:'dujia' },
        ]
        return(
            <IconBox>
                {iconlist.map((item,index)=>{
                    return(
                        <IconContainer key={index} >
                            <ItemIcon>
                                <img style={{width:'60%',height:'60%'}} src={item.url} alt=""/>
                            </ItemIcon>
                            <ItemText>{item.title}</ItemText>
                        </IconContainer>
                    )
                })}
            </IconBox>
        )
    }
}
export default IconNavBar;

export const IconBox = styled.div`
    position:relative;
    height:90px;
    color:#fff555;
    /* background:red; */
    width:95%;
    margin:0 auto;
    display:flex;
    
    justify-content:center;
    align-items:center;
`
export const IconContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const ItemIcon = styled.div` 
    width:52px;
    height:52px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#fff;
    border:1px solid #f57f0ae0;
`
export const ItemText = styled.div` 
    font-size:14px;
    color:#f57f0ae0;
    padding-top:6px;
`
