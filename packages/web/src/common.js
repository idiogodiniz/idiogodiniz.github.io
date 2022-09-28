import { createGlobalStyle } from 'styled-components';

const Common = createGlobalStyle`
    @font-face {
        font-family: 'inter-bold';
        src: url('/assets/fonts/Inter-Bold.ttf');
    }
    @font-face {
        font-family: 'inter-semibold';
        src: url('/assets/fonts/Inter-SemiBold.ttf');
    }
    @font-face {
        font-family: 'inter-medium';
        src: url('/assets/fonts/Inter-Medium.ttf');
    }
    @font-face {
        font-family: 'inter-regular';
        src: url('/assets/fonts/Inter-Regular.ttf');
    }
    @font-face {
        font-family: 'inter-light';
        src: url('/assets/fonts/Inter-Light.ttf');
    }
    @font-face {
        font-family: 'inter-thin';
        src: url('/assets/fonts/Inter-Thin.ttf');
    }
    .limit-view {
        max-width: 1920px !important;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'inter-bold';
        letter-spacing: .0001rem;
    }
    h1, h1 > span {
        font-size: 2.7rem;
        line-height: 3.2rem;
    }
    h2, h2 > span, h2 > a{
        font-size: 1.2rem;
        line-height: 1.5rem;
    }
    h3, h3 > span, h3 > a{
        font-size: 1.1rem;
        line-height: 1.3rem;
    }
    h4, h4 > span, h4 > a{
        
    }
    h5, h5 > span, h5 > a{
        
    }
    h6, h6 > span, h6 > a{
        
    }
    p, p > span, p > a, .link, .link > span{
        font-size: 1.2rem;
        line-height: 1.4rem;
        letter-spacing: .04rem;
    }
    * {
        font-family: 'inter-regular';
        color: #000;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-weight: inherit;
        outline: none;
    }
    .o-hidden {
       overflow: hidden; 
    }
    p > a::before{
        content: ' ';
    }
    .capitalize {
        text-transform: capitalize;
    }
    .uppercase {
        text-transform: uppercase;
    }
    .nomin {
        min-height: inherit;
        min-width: inherit;
    }
    .fit {
        width: fit-content;
        height: fit-content;
    }
    .wh100 {
        width: 100%;
        height: 100%;
    }
    .w100{
        width: 100%;
    }
    .h100{
        height: 100%;
    }
    .wh100v{
        width: 100vw;
        height: 100vh;
    }
    .w100v{
        width: 100vw;
    }
    .h100v{
        height: 100vh;
    }
    .container {
        display: flex;
        flex-direction: row;
    }
    .container-column {
        display: flex;
        flex-direction: column;
    }
    .fit-content {
        width: fit-content;
        height: fit-content;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .jc-between {
        justify-content: space-between;
    }
    .jc-center {
        justify-content: center;
    }
    .jc-end {
        justify-content: end;
    }
    .al-center {
        align-items: center;
    }
    .al-end {
        align-items: end;
    }
    .relative {
        position: relative;
    }
    .fixed {
        position: fixed;
    }
    .absolute {
        position: absolute;
    }
    .top {
        top: 0;
    }
    .z1 {
        z-index: 1;
    }
    .z2 {
        z-index: 2;
    }
    .z3 {
        z-index: 3;
    }
    .z4 {
        z-index: 4;
    }
    .z5 {
        z-index: 5;
    }
    .cFFFFFF {
        color: #FFF;
    }
    .bFFFFFF {
        background-color: #FFF;
    }
    .c000000 {
        color: #000;
    }
    .b000000 {
        background-color: #000;
    }
    .box-shadow-white-right {
        border: #fff solid 6px;
        position: absolute;
        top: 15px;
        left: 15px;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .box-shadow-white-left {
        border: #fff solid 6px;
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .box-shadow-black-right {
        border: #000 solid 6px;
        position: absolute;
        top: 15px;
        left: 15px;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .box-shadow-black-left {
        border: #000 solid 6px;
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
`;

export default Common;