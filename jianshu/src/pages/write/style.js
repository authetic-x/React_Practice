import styled from 'styled-components'

export const WriteWrapper = styled.div`
    height: 100%;
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

        &:hover {
            color: #000;
        }
    }
`

export const ArticleList = styled.ul`
    list-style: none:
    margin: 0;

    a {
        text-decoration: none;
    }
    
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
    height: 100%;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #ccc;
`

export const TitleEditor = styled.input`
    display: block;
    padding: 20px 40px;
    outline: none;
    border: none;
    border-radius: none;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    color: #595959;
`

export const SaveWrapper = styled.ul`
    list-style: none;
    margin: 0;
    background-color: #d9d9d9;
    border-bottom: 1px solid #ccc;
    overflow: hidden;

    li {
        display: inline-block;
        padding: 11px 20px;
        float: right;
        font-size: 13px;
        line-height: 17px;
        cursor: pointer;
    }
    li:hover {
        color: #f2f2f2;
        background-color: #595959;
    }
`

export const ContentEditor = styled.textarea`
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    display: block;
    overflow: auto;
    border: none;
    outline: none;
    box-sizing: border-box;
    flex: 1;
    padding: 40px 40px 80px;
    resize: none;
    color: #333;
    font-size: 19px;
    font-weight: 400;
    line-height: 30px;
`