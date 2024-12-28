# AONWEB

aonweb - JavaScript sdk for AON

- API version: 1.0.0
- Package version: 1.0.14

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it from npm:

```shell
npm install aonweb --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

import { AI, AIOptions, User } from 'aonweb'

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function prediction() {
    let user = new User()
    let is_login = await user.islogin()
    if (!is_login) {
        for (let i = 0; i < 10; i++) {
            let result = await user.getOwnedUsers()
            let userid = result && result._userIds && result._userIds.length && result._userIds[0]
            if (userid && userid.length) {
                break
            }
            await sleep(300)       
        }
        is_login = await user.islogin()
        if (!is_login) {
            showToast("login failed,please try again later");
            return
        }
    }
    const ai_options = new AIOptions({
        appId: REPLACE_APP_ID //replace app id
    })
    let price = 10
	const ai = new AI(ai_options)
    let response = await ai.prediction("/predictions/ai/stable-diffusion-3",
    {
        input:{
            "prompt": "with smoke, half ice and half fire and ultra realistic in detail.wolf, typography, dark fantasy, wildlife photography, vibrant, cinematic and on a black background",
            "cfg": 3.5,
            "steps": 28,
            "aspect_ratio": "9:16",
            "output_format": "png",
            "output_quality": 90,
            "negative_prompt": "",
            "prompt_strength": 0.85
        }
    },price);
    if (response && response.code == 200 && response.data) {
        response = response.data
    }
    if (response.task.exec_code == 200 && response.task.is_success) {
        console.log("test",response.output);
    }
}

prediction();

```

### Constructor

name | type | Description
------------ | ------------- | -------------
*appId* | string | **Required**.