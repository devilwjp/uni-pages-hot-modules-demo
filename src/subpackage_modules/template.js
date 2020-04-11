module.exports=[{
    "root": "pages/template",
    "pages": [{
        "path": "ucharts/ucharts",
        "style": {
            "navigationBarTitleText": "uCharts 图表"
        }
    },
        {
            "path": "nav-default/nav-default",
            "style": {
                "navigationBarTitleText": "默认导航栏"
            }
        },
        {
            "path": "component-communication/component-communication",
            "style": {
                "navigationBarTitleText": "组件通讯"
            }
        },
        // #ifdef APP-PLUS || H5 || MP-ALIPAY
        ...(process.env.VUE_APP_PLATFORM.match(/^((APP-PLUS)|(MP-ALIPAY)|(H5))$/) ? [{
            "path": "nav-transparent/nav-transparent",
            "style": {
                "navigationBarTitleText": "透明渐变导航栏",
                "transparentTitle": "auto"
            }
        }] : []),
        // #endif
        // #ifdef APP-PLUS || H5
        ...(process.env.VUE_APP_PLATFORM.match(/^((APP-PLUS)|(H5))$/) ? [{
            "path": "nav-button/nav-button",
            "style": {
                "navigationBarTitleText": "导航栏带自定义按钮",
                "app-plus": {
                    "titleNView": {
                        "buttons": [{
                            "type": "share"
                        },
                            {
                                "type": "favorite"
                            }
                        ]
                    }
                }
            }
        }] : []),
        // #endif
        // #ifdef APP-PLUS || H5 || MP-ALIPAY
        ...(process.env.VUE_APP_PLATFORM.match(/^((APP-PLUS)|(MP-ALIPAY)|(H5))$/) ? [{
            "path": "nav-image/nav-image",
            "style": {
                "navigationBarBackgroundColor": "#FFFFFF",
                "navigationBarTextStyle": "black",
                "titleImage": "https://img-cdn-qiniu.dcloud.net.cn/static/images/logo1@2x.png"
            }
        }] : []),
        // #endif
        // #ifdef APP-PLUS || H5
        ...(process.env.VUE_APP_PLATFORM.match(/^((APP-PLUS)|(H5))$/) ? [{
            "path": "nav-city-dropdown/nav-city-dropdown",
            "style": {
                "navigationBarTitleText": "导航栏带城市选择",
                "app-plus": {
                    "titleNView": {
                        "buttons": [{
                            "text": "北京市",
                            "fontSize": "14",
                            "select": true,
                            "width": "auto"
                        }]
                    }
                }
            }
        },
            {
                "path": "nav-dot/nav-dot",
                "style": {
                    "navigationBarTitleText": "导航栏带红点和角标",
                    "app-plus": {
                        "titleNView": {
                            "buttons": [{
                                "text": "消息",
                                "fontSize": "14",
                                "redDot": true
                            },
                                {
                                    "text": "关注",
                                    "fontSize": "14",
                                    "badgeText": "12"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "path": "nav-search-input/nav-search-input",
                "style": {
                    "navigationBarTitleText": "导航栏带搜索框",
                    "app-plus": {
                        "titleNView": {
                            "type": "transparent",
                            "titleColor": "#fff",
                            "backgroundColor": "#007AFF",
                            "buttons": [{
                                "fontSrc": "/static/uni.ttf",
                                "text": "\ue537",
                                "width": "40px",
                                "fontSize": "28px",
                                "color": "#fff",
                                "background": "rgba(0,0,0,0)"
                            }],
                            "searchInput": {
                                "backgroundColor": "#fff",
                                "borderRadius": "6px",
                                "placeholder": "请输入地址 如：大钟寺",
                                "disabled": true
                            }
                        }
                    }
                }
            },
            {
                "path": "nav-search-input/detail/detail",
                "style": {
                    "navigationBarTitleText": "搜索",
                    "app-plus": {
                        "titleNView": {
                            "titleColor": "#fff",
                            "backgroundColor": "#007AFF",
                            "buttons": [{
                                "fontSrc": "/static/uni.ttf",
                                "text": "\ue537",
                                "width": "auto",
                                "fontSize": "28px",
                                "color": "#fff"
                            }],
                            "searchInput": {
                                "backgroundColor": "#fff",
                                "borderRadius": "6px",
                                "placeholder": "请输入地址 如：大钟寺",
                                "autoFocus": true
                            }
                        }
                    }
                }
            }] : []),
        // #endif
        {
            "path": "list2detail-list/list2detail-list",
            "style": {
                "navigationBarTitleText": "列表到详情示例",
                "enablePullDownRefresh": true
            }
        },
        {
            "path": "list2detail-detail/list2detail-detail",
            "style": {
                "navigationBarTitleText": "详情",
                "app-plus": {
                    "titleNView": {
                        "type": "transparent",
                        "buttons": [{
                            "type": "share"
                        }]
                    }
                },
                "h5": {
                    "titleNView": {
                        "type": "transparent",
                        "buttons": []
                    }
                }
            }
        },
        {
            "path": "tabbar/tabbar",
            "style": {
                "navigationBarTitleText": "可拖动顶部选项卡"
            }
        },
        {
            "path": "tabbar/detail/detail",
            "style": {
                "navigationBarTitleText": "详情页面"
            }
        },
        // #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
        ...(process.env.VUE_APP_PLATFORM.match(/^((APP-PLUS)|(MP-WEIXIN)|(H5)|(MP-QQ))$/) ? [{
            "path": "swiper-vertical/swiper-vertical",
            "style": {
                "navigationBarTitleText": "上下滑动切换视频",
                "app-plus": {
                    "titleNView": false
                }
            }
        },
            {
                "path": "swiper-list/swiper-list",
                "style": {
                    "navigationBarTitleText": "swiper-list"
                }
            }] : []),
        // #endif
        // #ifdef APP-PLUS
        ...(process.env.VUE_APP_PLATFORM.match(/^(APP-PLUS)$/) ? [{
            "path": "swiper-list-nvue/swiper-list-nvue",
            "style": {
                "navigationBarTitleText": "swiper-list"
            }
        }] : []),
        // #endif
        {
            "path": "scheme/scheme",
            "style": {
                "navigationBarTitleText": "打开外部应用"
            }
        },
        // #ifdef APP-PLUS || MP-WEIXIN || MP-QQ || H5
        ...(process.env.VUE_APP_PLATFORM.match(/^((APP-PLUS)|(MP-WEIXIN)|(H5)|(MP-QQ))$/) ? [{
            "path": "vant-button/vant-button",
            "style": {
                "navigationBarTitleText": "微信自定义组件示例",
                "usingComponents": {
                    "van-button": "/wxcomponents/vant/button/index"
                }
            }
        }] : []),
        // #endif
        {
            "path": "global/global",
            "style": {
                "navigationBarTitleText": "GlobalData和vuex"
            }
        }
    ]
}]
