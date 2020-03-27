import React from 'react'
import {
    CarouselWrap,
    ImgWrap,
    Indicators
} from '../style';
import { connect } from 'react-redux';
import ImgOne from '../../../static/img-1.jpg';
import ImgTwo from '../../../static/img-2.jpg';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(
            this.props.handleNextPic.bind(this), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        let {newPosition, indexActice} = this.props;
        this.newPosition = newPosition;
        this.indexActice = indexActice;
        return (
            <CarouselWrap
                onMouseEnter={() => this.props.handleMouseEnter.apply(this)}
                onMouseLeave={() => this.props.handleMouseLeave.apply(this)}
            >
                <ImgWrap ref={wrap => this.ImgWrap = wrap}>
                    <img src={ImgTwo} alt="404"/>
                    <img src={ImgOne} alt="404"/>
                    <img src={ImgTwo} alt="404"/>
                    <img src={ImgOne} alt="404"/>
                </ImgWrap>
                <Indicators>
                    <li className={this.indexActice ? "active" : null}></li>
                    <li className={this.indexActice ? null : "active"}></li>
                </Indicators>
                <span 
                    href="#" 
                    className="carousel-control left"
                    onClick={() => this.props.handlePrevPic.apply(this)}
                >&lt;</span>
                <span 
                    href="#" 
                    className="carousel-control right"
                    onClick={(e) => this.props.handleNextPic.apply(this)}
                >&gt;</span>
            </CarouselWrap>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newPosition: state.getIn(['home', 'newPosition']),
        indexActice: state.getIn(['home', 'indexActive']),
        timer: state.getIn(['home', 'timer'])
    }
}

// 映射事件处理函数到props
const mapDispatchToProps = (dispatch) => {
    return {
        handlePrevPic: function() {
            dispatch({
                type: "change_index"
            });

            let offset = 600;
            this.newPosition += offset;
            this.ImgWrap.style.transition = "transform 1s";
            this.ImgWrap.style.transform = `translate(${this.newPosition}px)`;

            if (this.newPosition > 0) {
				setTimeout(() => {
                    this.newPosition = -600;
					this.ImgWrap.style.transition = '';
					this.ImgWrap.style.transform = `translate(${this.newPosition}px)`;
                }, 1000);
                this.newPosition = -600;
            }
            dispatch({
                type: 'change_position',
                data: this.newPosition
            });
        },
        handleNextPic: function () {
            dispatch({
                type: "change_index"
            });

            let offset = -600;
            this.newPosition += offset;
            this.ImgWrap.style.transition = "transform 1s";
            this.ImgWrap.style.transform = `translate(${this.newPosition}px)`;

            if (this.newPosition < -600) {
				setTimeout(() => {
                    this.newPosition = 0;
					this.ImgWrap.style.transition = '';
					this.ImgWrap.style.transform = `translate(${this.newPosition}px)`;
                }, 1000);
                this.newPosition = 0;
            }
            dispatch({
                type: 'change_position',
                data: this.newPosition
            });
        },
        handleMouseEnter() {
            clearInterval(this.timer);
        },
        handleMouseLeave() {
            this.timer = setInterval(
                this.props.handleNextPic.bind(this), 3000);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);