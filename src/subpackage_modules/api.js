module.exports=[{
    "root": "pages/API",
    "pages": [{
        "path": "login/login",
        "style": {
            "navigationBarTitleText": "授权登录"
        }
    },
        // #ifdef APP-PLUS
        ...(process.env.UNI_PLATFORM === 'APP-PLUS' ? [{
            "path": "subnvue/subnvue",
            "style": {
                "navigationBarTitleText": "SubNvue",
                "app-plus": {
                    "titleNView": false,
                    "subNVues": [{
                        "id": "drawer",
                        "path": "subnvue/subnvue/drawer",
                        "type": "popup",
                        "style": {
                            "width": "50%"
                        }
                    }, {
                        "id": "popup",
                        "path": "subnvue/subnvue/popup",
                        "type": "popup",
                        "style": {
                            "margin": "auto",
                            "width": "80%",
                            "height": "600rpx"
                        }
                    }, {
                        "id": "video_mask",
                        "path": "subnvue/subnvue/video-mask",
                        "style": {
                            "position": "absolute",
                            "bottom": "30px",
                            "left": "0",
                            "width": "230px",
                            "height": "110px",
                            "background": "transparent"
                        }
                    }, {
                        "id": "nav",
                        "path": "subnvue/subnvue/nav",
                        "type": "navigationBar"
                    }]
                }
            }
        }] : []),
        // #endif
        {
            "path": "get-user-info/get-user-info",
            "style": {
                "navigationBarTitleText": "获取用户信息"
            }
        },
        {
            "path": "request-payment/request-payment",
            "style": {
                "navigationBarTitleText": "发起支付"
            }
        },
        {
            "path": "share/share",
            "style": {
                "navigationBarTitleText": "分享"
            }
        },
        {
            "path": "set-navigation-bar-title/set-navigation-bar-title",
            "style": {
                "navigationBarTitleText": "设置界面标题"
            }
        },
        {
            "path": "show-loading/show-loading",
            "style": {
                "navigationBarTitleText": "加载提示框"
            }
        },
        {
            "path": "navigator/navigator",
            "style": {
                "navigationBarTitleText": "页面跳转"
            }
        },
        {
            "path": "navigator/new-page/new-vue-page-1",
            "style": {
                "navigationBarTitleText": "新VUE页面1"
            }
        },
        {
            "path": "navigator/new-page/new-vue-page-2",
            "style": {
                "navigationBarTitleText": "新VUE页面2"
            }
        },
        {
            "path": "navigator/new-page/new-nvue-page-1",
            "style": {
                "navigationBarTitleText": "新NVUE页面1"
            }
        },
        {
            "path": "navigator/new-page/new-nvue-page-2",
            "style": {
                "navigationBarTitleText": "新NVUE页面2"
            }
        },
        {
            "path": "pull-down-refresh/pull-down-refresh",
            "style": {
                "navigationBarTitleText": "下拉刷新",
                "enablePullDownRefresh": true
            }
        },
        {
            "path": "animation/animation",
            "style": {
                "navigationBarTitleText": "创建动画"
            }
        },
        {
            "path": "get-node-info/get-node-info",
            "style": {
                "navigationBarTitleText": "节点信息"
            }
        },
        {
            "path": "intersection-observer/intersection-observer",
            "style": {
                "navigationBarTitleText": "节点布局相交状态"
            }
        },
        {
            "path": "canvas/canvas",
            "style": {
                "navigationBarTitleText": "创建绘画"
            }
        },
        {
            "path": "action-sheet/action-sheet",
            "style": {
                "navigationBarTitleText": "操作菜单"
            }
        },
        {
            "path": "modal/modal",
            "style": {
                "navigationBarTitleText": "模态弹窗"
            }
        },
        {
            "path": "toast/toast",
            "style": {
                "navigationBarTitleText": "消息提示框"
            }
        },
        {
            "path": "get-network-type/get-network-type",
            "style": {
                "navigationBarTitleText": "获取手机网络状态"
            }
        },
        {
            "path": "get-system-info/get-system-info",
            "style": {
                "navigationBarTitleText": "获取手机系统信息"
            }
        },
        {
            "path": "add-phone-contact/add-phone-contact",
            "style": {
                "navigationBarTitleText": "添加手机联系人"
            }
        },
        {
            "path": "on-accelerometer-change/on-accelerometer-change",
            "style": {
                "navigationBarTitleText": "监听加速度计数据"
            }
        },
        {
            "path": "on-compass-change/on-compass-change",
            "style": {
                "navigationBarTitleText": "监听罗盘数据"
            }
        },
        {
            "path": "make-phone-call/make-phone-call",
            "style": {
                "navigationBarTitleText": "打电话"
            }
        },
        {
            "path": "scan-code/scan-code",
            "style": {
                "navigationBarTitleText": "扫码"
            }
        },
        {
            "path": "clipboard/clipboard",
            "style": {
                "navigationBarTitleText": "剪贴板"
            }
        },
        {
            "path": "request/request",
            "style": {
                "navigationBarTitleText": "网络请求"
            }
        },
        {
            "path": "upload-file/upload-file",
            "style": {
                "navigationBarTitleText": "上传文件"
            }
        },
        {
            "path": "download-file/download-file",
            "style": {
                "navigationBarTitleText": "下载文件"
            }
        },
        {
            "path": "image/image",
            "style": {
                "navigationBarTitleText": "图片"
            }
        },
        {
            "path": "voice/voice",
            "style": {
                "navigationBarTitleText": "录音"
            }
        },
        {
            "path": "background-audio/background-audio",
            "style": {
                "navigationBarTitleText": "背景音频"
            }
        },
        {
            "path": "video/video",
            "style": {
                "navigationBarTitleText": "视频"
            }
        },
        {
            "path": "file/file",
            "style": {
                "navigationBarTitleText": "文件"
            }
        },
        // #ifndef MP-QQ || MP-TOUTIAO
        ...(!(process.env.UNI_PLATFORM === 'MP-QQ' || process.env.UNI_PLATFORM === 'MP-TOUTIAO') ? [{
            "path": "map/map",
            "style": {
                "navigationBarTitleText": "map"
            }
        }] : []),
        // #endif
        // #ifdef APP-PLUS
        ...(process.env.UNI_PLATFORM === 'APP-PLUS' ? [{
            "path": "map-search/map-search",
            "style": {
                "navigationBarTitleText": "map search"
            }
        }] : []),
        // #endif
        {
            "path": "get-location/get-location",
            "style": {
                "navigationBarTitleText": "获取位置"
            }
        },
        {
            "path": "open-location/open-location",
            "style": {
                "navigationBarTitleText": "查看位置"
            }
        },
        // #ifndef MP-TOUTIAO
        ...(process.env.UNI_PLATFORM !== 'MP-TOUTIAO' ? [{
            "path": "choose-location/choose-location",
            "style": {
                "navigationBarTitleText": "使用地图选择位置"
            }
        }] : []),
        // #endif
        {
            "path": "storage/storage",
            "style": {
                "navigationBarTitleText": "数据存储"
            }
        },
        {
            "path": "sqlite/sqlite",
            "style": {
                "navigationBarTitleText": "SQLite"
            }
        },
        // #ifdef APP-PLUS || MP-WEIXIN
        ...(process.env.UNI_PLATFORM === 'APP-PLUS' || process.env.UNI_PLATFORM === 'MP-WEIXIN' ? [{
            "path": "rewarded-video-ad/rewarded-video-ad",
            "style": {
                "navigationBarTitleText": "激励视频广告"
            }
        }] : []),
        // #endif
        // #ifndef H5
        ...(process.env.UNI_PLATFORM !== 'H5' ? [{
            "path": "brightness/brightness",
            "style": {
                "navigationBarTitleText": "屏幕亮度"
            }
        }] : []),
        // #endif
        // #ifndef H5 || MP-ALIPAY
        ...(!(process.env.UNI_PLATFORM === 'H5' || process.env.UNI_PLATFORM === 'MP-ALIPAY') ? [{
            "path": "save-media/save-media",
            "style": {
                "navigationBarTitleText": "保存媒体到本地"
            }
        }] : []),
        // #endif
        // #ifdef APP-PLUS || MP-WEIXIN || MP-QQ
        ...(process.env.UNI_PLATFORM === 'APP-PLUS' || process.env.UNI_PLATFORM === 'MP-WEIXIN' || process.env.UNI_PLATFORM === 'MP-QQ' ? [{
            "path": "bluetooth/bluetooth",
            "style": {
                "navigationBarTitleText": "蓝牙"
            }
        },
            {
                "path": "soter/soter",
                "style": {
                    "navigationBarTitleText": "生物认证"
                }
            }] : []),
        // #endif
        // #ifdef APP-PLUS || MP-WEIXIN
        ...(process.env.UNI_PLATFORM.match(/^((APP-PLUS)|(MP-WEIXIN))$/) ? [{
            "path": "ibeacon/ibeacon",
            "style": {
                "navigationBarTitleText": "iBeacon"
            }
        }] : []),
        // #endif
        {
            "path": "vibrate/vibrate",
            "style": {
                "navigationBarTitleText": "震动"
            }
        },
        // #ifndef MP-ALIPAY
        ...(process.env.UNI_PLATFORM.match(/^(MP-ALIPAY)$/) ? [{
            "path": "websocket-socketTask/websocket-socketTask",
            "style": {
                "navigationBarTitleText": "websocket-socketTask"
            }
        }] : []),
        // #endif
        {
            "path": "websocket-global/websocket-global",
            "style": {
                "navigationBarTitleText": "websocket-global"
            }
        }
    ]
}]
