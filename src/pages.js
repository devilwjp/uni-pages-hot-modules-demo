module.exports=(pagesJson, loader)=>{
    const hotRequire = require('uni-pages-hot-modules')(loader)
    let basePages = []
    let baseSubPackages = []
// 12
    return {
        pages:[
            ...basePages,
            ...hotRequire('./page_modules/tabbar.js'),
            ...hotRequire('./page_modules/component.js'),
            ...hotRequire('./page_modules/appPlus.js')
        ],
        subPackages:[
            ...baseSubPackages,
            ...hotRequire('./subpackage_modules/api.js'),
            ...hotRequire('./subpackage_modules/extUI.js'),
            ...hotRequire('./subpackage_modules/template.js')
        ],
        ...pagesJson
    }
}
