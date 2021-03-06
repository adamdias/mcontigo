import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #EF3E36;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #EF3E36, 0 0 5px #EF3E36;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  #nprogress .spinner {
    display: "block";
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: #EF3E36;
    border-left-color: #EF3E36;
    border-radius: 50%;
    -webkit-animation: nprogresss-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .pagination-default {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    width: 100%;

    li {
      display: flex;
    }

    a {
      padding: 15px 20px;
      background-color: #eee;
      color: #333;
      font-weight: bold;
      outline: none;
      cursor: pointer;

      &:hover {
        background-color: rgba(0,0,0, 0.1);
      }

      &.active {
        background-color: #449dd1;
        color: #fff;
      }
    }
  }
`;
