import { createGlobalStyle } from 'styled-components';

const Common = createGlobalStyle`
    :root {
        background-color: #000;
    }
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
    * {
        background-repeat: no-repeat;
        color: #fff;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-weight: inherit;
        outline: none;
    }
    .limit-view {
        max-width: 1920px !important;
    }
    h1 {
        font-family: 'inter-bold';
    }
    h2, h3, h4, h5, h6 {
        font-family: 'inter-semibold';
    }
    h1, h1 > span {
        font-size: 2.7rem;
    }
    h2, h2 > span, h2 > a{
        font-size: 1.1rem;
    }
    h3, h3 > span, h3 > a{
        font-size: 1rem;
    }
    p, p > span, p > a, .link, .link > span {
        font-family: 'inter-regular';
    }
    textarea, input {
        font-family: 'inter-regular';
        border: 2px solid #000;
        resize: none;
        padding: 1rem;
    }
    select {
        border: none;
        padding: .2rem .4rem;
        background-color: #000;
        color: #fff;
    }
    button {
        font-family: 'inter-medium';
        font-size: 1.3rem;
        cursor: pointer;
        border: none;
        padding: .5rem 1.3rem;
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
    .lowercase {
        text-transform: lowercase;
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
    .radius {
        border-radius: .5rem;
    }
    .border-white {
        border: #fff solid 6px;
    }
    .border-black {
        border: #000 solid 6px;
    }
    .border-orange {
        border: solid 6px;
        border-image: linear-gradient( #ff9900, #ff0000 91%) 30;
    }
    .c-white {
        color: #fff;
    }
    .b-white {
        background-color: #fff;
    }
    .c-black {
        color: #000;
    }
    .b-black {
        background-color: #000;
    }
    .c-orange {
        background: linear-gradient(-95.27deg, #ff9900, #ff0000 91%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .c-orange-o {
        background: linear-gradient(95.27deg, #ff9900, #ff0000 91%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .b-orange {
        background-image: linear-gradient(-95.27deg, #ff9900, #ff0000 91%);
    }
    .b-orange-o {
        background-image: linear-gradient(95.27deg, #ff9900, #ff0000 91%);
    }
    .box-shadow, .box-shadow-r {
        position: absolute;
        border-radius: .5rem;
        z-index: 1;
        width: 100%;
        height: 100%;
        ::before {
            content: "";
            position: absolute;
            left: 2px;
            top: 2px;
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            background-color: #000;
            border-radius: .5rem;
        }
    }
    .box-shadow {
        top: 10px;
        left: 10px;
    }
    .box-shadow-r {
        top: 10px;
        right: 10px;
    }
    .box-shadow-hover {
        :hover {
            ::before {
                content: "";
                background-image: linear-gradient(-95.27deg, #ff9900, #ff0000 91%);
                z-index: 1;
                position: absolute;
                top: 10px;
                left: 10px;
                border-radius: .5rem;
                z-index: 1;
                width: 100%;
                height: 100%;
            }
            ::after {
                content: "";
                z-index: 1;
                position: absolute;
                left: 12px;
                top: 12px;
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                background-color: #000;
                border-radius: .5rem;
            }
        }
    }
`;

export default Common;