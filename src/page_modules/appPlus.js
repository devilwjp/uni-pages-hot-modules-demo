module.exports=[
    {
        "path": "platforms/app-plus/speech/speech",
        "style": {
            "navigationBarTitleText": "语音识别"
        }
    },
    {
        "path": "platforms/app-plus/orientation/orientation",
        "style": {
            "navigationBarTitleText": "方向传感器"
        }
    },
    {
        "path": "platforms/app-plus/proximity/proximity",
        "style": {
            "navigationBarTitleText": "距离传感器"
        }
    },
    {
        "path": "platforms/app-plus/push/push",
        "style": {
            "navigationBarTitleText": "推送"
        }
    },
    {
        "path": "platforms/app-plus/shake/shake",
        "style": {
            "navigationBarTitleText": "摇一摇"
        }
    },
    // #ifdef H5 || APP-PLUS
    ...(process.env.VUE_APP_PLATFORM === 'APP-PLUS' || process.env.VUE_APP_PLATFORM === 'H5' ? [{
        "path": "pages/about/about",
        "style": {
            "navigationBarTitleText": "关于"
        }
    }] : []),
    // #endif
    {
        "path": "platforms/app-plus/feedback/feedback",
        "style": {
            "navigationBarTitleText": "问题反馈"
        }
    }]
