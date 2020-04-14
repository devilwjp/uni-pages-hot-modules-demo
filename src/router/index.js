import { getRouterTableList, subPackageToPageConfigForSimpleRouter } from '../utils/uniPagesUtils_commonJs'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from '../common/uni-simple-router'
import pages from '../page_modules'
import subPackages from '../subpackage_modules'

Vue.use(Router)
//初始化
const router = new Router({
    routes: [
        ...getRouterTableList(pages),
        ...subPackageToPageConfigForSimpleRouter(subPackages),
    ]//路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
    console.log(to,from,88888)
    next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router;
