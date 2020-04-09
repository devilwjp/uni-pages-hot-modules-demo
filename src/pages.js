module.exports=(pagesJson, loader)=>{
    // 初始化uni-pages-hot-modules（输入loader）
    const hotRequire = require('uni-pages-hot-modules')(loader)
    // pages的初始配置
    let basePages = []
    // subPackages的初始配置
    let baseSubPackages = []

    // 对pages去重并且设置首页
    function removeDuplicationAndSetIndexPage(pages = [], indexPath = pages[0] && pages[0].path || ''){
        let uniquePageMap = {}, resultPages=[]

        // 去重
        pages.forEach((page) => {
            uniquePageMap[page.path] = page
        })
        for (let i in uniquePageMap){
            resultPages.push(uniquePageMap[i])
        }

        // 将indexPath排序到数组首位
        return resultPages.sort((page) =>  page.path === indexPath && -1)
    }

    return {
        // 合并pages.json的初始内容
        ...pagesJson,
        // 可自行对pages进行排序和去重，可以在元素里加上特殊的key作为排序规则
        pages: removeDuplicationAndSetIndexPage([
            ...basePages,
            ...hotRequire('./page_modules/tabbar.js'),
            // 故意重复引入，用来验证去重方法
            ...hotRequire('./page_modules/tabbar.js'),
            ...hotRequire('./page_modules/component.js'),
            ...hotRequire('./page_modules/appPlus.js')
        ]),
        subPackages: [
            ...baseSubPackages,
            ...hotRequire('./subpackage_modules/api.js'),
            ...hotRequire('./subpackage_modules/extUI.js'),
            ...hotRequire('./subpackage_modules/template.js')
        ]
    }
}
