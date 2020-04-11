module.exports=[
    {
        "path": "pages/component/view/view",
        "style": {
            "navigationBarTitleText": "view"
        }
    },
    {
        "path": "pages/component/scroll-view/scroll-view",
        "style": {
            "navigationBarTitleText": "scroll-view"
        }
    },
    {
        "path": "pages/component/swiper/swiper",
        "style": {
            "navigationBarTitleText": "swiper"
        }
    },
    // #ifndef MP-TOUTIAO
    ...((process.env.VUE_APP_PLATFORM !== 'MP-TOUTIAO') ? [{
        "path": "pages/component/cover-view/cover-view",
        "style": {
            "navigationBarTitleText": "cover-view"
        }
    },
    {
        "path": "pages/component/movable-view/movable-view",
        "style": {
            "navigationBarTitleText": "movable-view"
        }
    }] : []),
    // #endif
    {
        "path": "pages/component/text/text",
        "style": {
            "navigationBarTitleText": "text"
        }
    },
    {
        "path": "pages/component/rich-text/rich-text",
        "style": {
            "navigationBarTitleText": "rich-text"
        }
    },
    {
        "path": "pages/component/progress/progress",
        "style": {
            "navigationBarTitleText": "progress"
        }
    },
    {
        "path": "pages/component/button/button",
        "style": {
            "navigationBarTitleText": "button"
        }
    },
    {
        "path": "pages/component/checkbox/checkbox",
        "style": {
            "navigationBarTitleText": "checkbox"
        }
    },
    {
        "path": "pages/component/form/form",
        "style": {
            "navigationBarTitleText": "form"
        }
    },
    {
        "path": "pages/component/input/input",
        "style": {
            "navigationBarTitleText": "input",
            "app-plus": {
                "softinputNavBar": "none"
            }
        }
    },
    {
        "path": "pages/component/label/label",
        "style": {
            "navigationBarTitleText": "label"
        }
    },
    {
        "path": "pages/component/picker/picker",
        "style": {
            "navigationBarTitleText": "picker"
        }
    },
    {
        "path": "pages/component/picker-view/picker-view",
        "style": {
            "navigationBarTitleText": "picker-view"
        }
    },
    {
        "path": "pages/component/radio/radio",
        "style": {
            "navigationBarTitleText": "radio"
        }
    },
    {
        "path": "pages/component/slider/slider",
        "style": {
            "navigationBarTitleText": "slider"
        }
    },
    {
        "path": "pages/component/switch/switch",
        "style": {
            "navigationBarTitleText": "switch"
        }
    },
    {
        "path": "pages/component/textarea/textarea",
        "style": {
            "navigationBarTitleText": "textarea"
        }
    },
    // #ifdef APP-PLUS || MP-WEIXIN || H5
    ...(process.env.VUE_APP_PLATFORM === 'APP-PLUS' || process.env.VUE_APP_PLATFORM === 'MP-WEIXIN' || process.env.VUE_APP_PLATFORM === 'H5' ? [{
        "path": "pages/component/editor/editor",
        "style": {
            "navigationBarTitleText": "editor"
        }
    }] : []),
    // #endif
    {
        "path": "pages/component/navigator/navigator",
        "style": {
            "navigationBarTitleText": "navigator"
        }
    },
    {
        "path": "pages/component/navigator/navigate/navigate",
        "style": {
            "navigationBarTitleText": "navigatePage"
        }
    },
    {
        "path": "pages/component/navigator/redirect/redirect",
        "style": {
            "navigationBarTitleText": "redirectPage"
        }
    },
    {
        "path": "pages/component/image/image",
        "style": {
            "navigationBarTitleText": "image"
        }
    },
    {
        "path": "pages/component/video/video",
        "style": {
            "navigationBarTitleText": "video"
        }
    },
    // #ifndef MP-ALIPAY || MP-TOUTIAO
    ...(!(process.env.VUE_APP_PLATFORM === 'MP-ALIPAY' || process.env.VUE_APP_PLATFORM === 'MP-TOUTIAO') ? [{
        "path": "pages/component/audio/audio",
        "style": {
            "navigationBarTitleText": "audio"
        }
    }] : []),
    // #endif
    // #ifndef MP-TOUTIAO
    ...(process.env.VUE_APP_PLATFORM !== 'MP-TOUTIAO' ? [{
        "path": "pages/component/map/map",
        "style": {
            "navigationBarTitleText": "map"
        }
    }] : []),
    // #endif
    {
        "path": "pages/component/canvas/canvas",
        "style": {
            "navigationBarTitleText": "canvas"
        }
    },
    {
        "path": "pages/component/web-view/web-view",
        "style": {
            "navigationBarTitleText": "web-view"
        }
    },
    // #ifndef H5 || MP-BAIDU
    ...(!(process.env.VUE_APP_PLATFORM === 'H5' || process.env.VUE_APP_PLATFORM === 'MP-BAIDU') ? [{
        "path": "pages/component/ad/ad",
        "style": {
            "navigationBarTitleText": "AD"
        }
    }] : []),
    // #endif
    // #ifdef APP-PLUS
    ...(process.env.VUE_APP_PLATFORM === 'APP-PLUS' ? [{
        "path": "pages/component/web-view-local/web-view-local",
        "style": {}
    }] : [])
    // #endif
]
