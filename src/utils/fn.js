import icons from './icons';

export const renderStar = (number) => {
    const isIntergerNum = Number.isInteger(number);
    const html = [];
    if (isIntergerNum) {
        for (let i = 0; i < number; i++) {
            html.push(<span key={Date.now() + Math.random(Date.now())}><icons.IoStar color='#f69c08' /></span>)
        }
        for (let i = 5; i > number; i--) {
            html.push(<span key={Date.now() + Math.random(Date.now())}><icons.IoStarOutline color='#f69c08' /></span>)
        }
    } else {
        const intNum = Math.floor(number);
        for (let j = 0; j < intNum; j++) {
            html.push(<span key={Date.now() + Math.random(Date.now())}><icons.IoStar color='#f69c08' /></span>)
        }
        html.push(<span key={Date.now()}><icons.IoStarHalfOutline color='#f69c08' /></span>)
        for (let i = 5; i > Math.floor(number + 1); i--) {
            html.push(<span key={Date.now() + Math.random(Date.now())}><icons.IoStarOutline color='#f69c08' /></span>)
        }
    }
    return html;
}