// 对pages去重并且设置首页
function removeDuplicationAndSetIndexPage(pages = [], indexPath = pages[0] && pages[0].path || ''){
    let uniquePageMap = {}, resultPages=[], indexPage=[]

    // 去重
    pages.forEach((page) => {
        uniquePageMap[page.path] = page
    })

    // 抽出首页
    indexPage.push(uniquePageMap[indexPath])
    delete uniquePageMap[indexPath]

    for (let i in uniquePageMap){
        resultPages.push(uniquePageMap[i])
    }

    return [
        ...indexPage,
        ...resultPages
    ]
}

module.exports={
    removeDuplicationAndSetIndexPage
}
