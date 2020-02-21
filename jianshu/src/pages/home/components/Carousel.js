import React from 'react'
import {
    CarouselWrap,
    ImgWrap,
    Indicators
} from '../style';
import { connect } from 'react-redux';
import ImgOne from '../../../static/img-1.jpg';
import ImgTwo from '../../../static/img-2.jpg';

function Carousel() {
    

    return (
        <CarouselWrap>
            <ImgWrap >
                <img src={ImgTwo} alt="404"/>
                <img src={ImgOne} alt="404"/>
                <img src={ImgTwo} alt="404"/>
                <img src={ImgOne} alt="404"/>
            </ImgWrap>
            <Indicators>
                <li class="active"></li>
                <li></li>
            </Indicators>
            <span 
                href="#" 
                class="carousel-control left"
                onClick={}
            >&lt;</span>
		    <span href="#" class="carousel-control right">&gt;</span>
        </CarouselWrap>
    )
}

const mapStateToProps = (state) => {
    return {
        newPostion: state.getIn(['home', 'newPosition']),
    }
}

// 映射事件处理函数到props
const mapDispatchToProps = (dispatch) => {
    return {
        handlePrevPic: function() {
            let offset = 600;
        },
        handleNextPic: function () {
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);