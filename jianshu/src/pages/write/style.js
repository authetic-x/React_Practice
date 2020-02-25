import styled from 'styled-components'

export const WriteWrapper = styled.div`
    .sideBar {
        float:left;
        position: absolute;
        min-width: 200px;
        height: 100%;
        background-color: #404040;
        box-sizing: border-box;
        padding: 30px 18px 0;

        a {
            display: block;
            border: 1px solid rgba(236,114,89,.8);
            padding: 9px 0;
            color: #ec7259;
            text-decoration: none;
            text-align: center;
            border-radius: 20px;
        }
    }
`

export const ListWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    min-width: 302px;
    float: left;
    margin-left: 200px;

    .new {
        box-sizing: border-box;
        height: 60px;
        padding: 20px 0 20px 25px;
        cursor: pointer;
    }  
    .new span {
        line-height: 20px;
        font-size: 15px;
        font-weight: 400;
        color: #595959;
    }
`

export const ArticleList = styled.ul`
    list-style: none:
    margin: 0;
    
    li {
        box-sizing: border-box;
        margin: 0;
        height: 60px;
        padding: 20px 0 20px 25px;
        line-height: 20px;
        font-size: 18px;
        font-weight: 400px;
        color: #333;
        cursor: pointer;
        border-top: 1px solid #ccc;
    }

    li:hover {
        background-color: #ccc;
    }

    li.active {
        border-left: 5px solid #ec7259;
        background-color: #e6e6e6;
    }
`

export const EditorWrapper = styled.div`
    overflow: hidden;
`

