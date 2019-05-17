interface FontInterface {
    family: string;
    url: string;
    format: string;
    weight: number;
    style: string;
    display: string;
}

const fontsList:Array<FontInterface> = [
    {
        family: 'Inter',
        url: '/static/fonts/Inter-Black.woff',
        format: 'woff',
        weight: 800,
        style: 'normal',
        display: 'fallback',
    },
    {
        family: 'Inter',
        url: '/static/fonts/Inter-Bold.woff',
        format: 'woff',
        weight: 700,
        style: 'normal',
        display: 'fallback',
    },
    {
        family: 'Inter',
        url: '/static/fonts/Inter-Regular.woff',
        format: 'woff',
        weight: 400,
        style: 'normal',
        display: 'fallback',
    },
];

function createFontFace(list:Array<FontInterface>):string {
    const fontFaces = list.reduce((styledFontFaces:string, currentItem:FontInterface) => (
        styledFontFaces + `
            @font-face {
                font-family: ${ currentItem.family };
                src: url(${ currentItem.url}) format(${ currentItem.format });
                font-weight: ${ currentItem.weight };
                font-style: ${ currentItem.family };
                font-display: ${ currentItem.display };
            }
        `), '');

    return fontFaces;
}

const fontFaces = createFontFace(fontsList);

export default fontFaces;
