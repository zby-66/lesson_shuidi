import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from '../components/Header';

//SPA
//SSR 不需要render
//调和： 服务端已经完成，客户端不会重复做
ReactDom.hydrate(<Header />, document.getElementById('root'));