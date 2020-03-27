import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
`

export const HomeRight = styled.div`
    float right;
    width: 280px;
    padding-top: 30px;
`

// Carousel components
export const CarouselWrap = styled.div`
    position: relative;
    width: 600px;
    height: 270px;
    overflow: hidden;
    border-radius: 6px;
    
    &:hover .carousel-control {
        opacity: 1;
    }

    .carousel-control {
        position: absolute;
        width: 40px;
        height: 50px;
        line-height: 50px;
        top: 40%;
        background-color: rgba(0, 0, 0, .4);
        color: #fff;
        font-size: 20px;
        text-align: center;
        z-index: 2;
        box-sizing: border-box;
        opacity: 0;
        cursor: pointer;
    }

    .carousel-control.left {
        border-top-right-radius: 6px;
	    border-bottom-right-radius: 6px;
    }

    .carousel-control.right {
        right: 0;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
`
export const ImgWrap = styled.div`
    position: absolute;
    width: 2400px;
    height: 400px;
    z-index: 1;
    left: -600px;
    
    img {
        float: left;
        width: 600px;
        height: 270px;
    }
`
export const Indicators = styled.ol`
    position: absolute;
    width: 80%;
    left: 20%;
    bottom: 8px;
    z-index: 2;
    text-align: center;
    transform: translateX(-50px);

    li {
        display: inline-block;
        width: 25px;
        height: 2px;
        cursor: pointer;
        border-radius: 10px;
        margin: 1px;
        background-color: hsla(0,0%,47%,.4);
    }
    li.active {
        background-color: #fff;
    }
`

// Topic components
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

// List components
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    
    .list-pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }

    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

// Recommend component
export const RecommendWrapper = styled.div`
    width: 280px;
    margin-bottom: 30px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 5px;
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`