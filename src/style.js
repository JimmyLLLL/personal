import { createGlobalStyle }  from 'styled-components'
import styled from 'styled-components'
import bg from './resource/bg.jpg'
import { getAvailHeightHeightAppBg } from './function.js'

//reset css使得各个浏览器的值一样
export const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

export const Bgpic = styled.div`
	background:url(${bg});
	width:100%;
	min-width:${getAvailHeightHeightAppBg()}
	background-size:100% 100%;
	background-repeat:no-repeat;
	height:100%;
	z-index:-1;
	position:absolute;
`

export const BgpicWrapper = styled.div`
	width:100%;
	height:100%;
	position:absolute;
	overflow:hidden;
`
export const Bottom = styled.div`
	position:absolute;
	bottom:0;
	height:40px;
	line-height:40px;
	text-align:center;
	color:white;
	width:100%;
	.left{
		margin-right:60px;
	}
	.right{
		margin-left:60px;
	}
`