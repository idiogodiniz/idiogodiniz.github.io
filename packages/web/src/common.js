import { createGlobalStyle } from 'styled-components';

const Common = createGlobalStyle`
    @font-face {
        font-family: 'source-semibold';
        src: url('/assets/fonts/source-code-pro/static/SourceCodePro-SemiBold.ttf')
    }
    @font-face {
        font-family: 'itim';
        src: url('/assets/fonts/itim/Itim-Regular.ttf');
    }
    @font-face {
        font-family: 'inria-bold';
        src: url('/assets/fonts/inria-sans/InriaSans-Bold.ttf');
    }
    @font-face {
        font-family: 'inria-bold-italic';
        src: url('/assets/fonts/inria-sans/InriaSans-BoldItalic.ttf');
    }
    @font-face {
        font-family: 'inria-italic';
        src: url('/assets/fonts/inria-sans/InriaSans-Italic.ttf');
    }
    @font-face {
        font-family: 'inria-light';
        src: url('/assets/fonts/inria-sans/InriaSans-Light.ttf');
    }
    @font-face {
        font-family: 'inria-light-italic';
        src: url('/assets/fonts/inria-sans/InriaSans-LightItalic.ttf');
    }
    @font-face {
        font-family: 'inria-regular';
        src: url('/assets/fonts/inria-sans/InriaSans-Regular.ttf');
    }
    .limit-view {
        max-width: 1920px !important;
    }
    h1, h1 > span {
        font-family: 'inria-bold';
        font-size: 4rem;
        line-height: 4.4rem;
        margin-bottom: 1.8rem;
        letter-spacing: .04rem;
    }
    h2, h2 > span, h2 > a{
        font-size: 2rem;
        line-height: 2.2rem;
        margin-bottom: .8rem;
        letter-spacing: .04rem;
    }
    h3, h3 > span, h3 > a{
        font-size: 1.6rem;
        line-height: 1.8rem;
        margin-bottom: .8rem;
        letter-spacing: .04rem;
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
        margin-bottom: .8rem;
    }
    * {
        font-family: 'inria-regular';
        color: #FFFFFF;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-weight: inherit;
    }
    .o-hidden {
       overflow: hidden; 
    }
    p > a::before{
        content: ' ';
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
    .container-limit {
        padding: 0 2rem;
    }
    .p2-left{
        padding-left: 2rem;
    }
    .p2-right {
        padding-right: 2rem;
    }
    .fit-content {
        width: fit-content;
        height: fit-content;
    }
    .jc-between {
        justify-content: space-between;
    }
    .jc-center {
        justify-content: center;
    }
    .al-center {
        align-items: center;
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
    .c00A3FF{
        color: #00A3FF;
    }
    .cFFFFFF {
        color: #FFFFFF;
    }
    .cCECECE {
        color: #CECECE;
    }
    .c00A3FF {
        color: #00A3FF;
    }
    .bFFFFFF {
        background-color: #FFFFFF;
    }
    .b0F0F0F {
        background-color: #0F0F0F;
    }
`;

export default Common;