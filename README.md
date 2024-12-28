# AONWeb: Web3-Native AI Framework

AONWeb is a cutting-edge framework that seamlessly integrates Web3 capabilities with AI functionalities, providing a robust foundation for decentralized AI applications.

## Core Features

### Web3 Integration
- Smart contract interaction with multiple specialized contracts (AonAppPoint, AonUser, AonAiModel, etc.)
- Wallet connectivity and authentication
- Token management and reward systems
- Decentralized user management

### AI Capabilities
- Integration with state-of-the-art AI models (including Stable Diffusion)
- Customizable AI parameters and configurations
- Support for various input/output formats
- Scalable AI execution through clustered architecture

### Technical Architecture
- Modular design with clear separation of concerns
- Environment-specific configurations (development/production)
- Cross-domain storage solutions
- Comprehensive error handling and logging
- Telegram Web App integration

## Key Components

### Smart Contracts
- `AonAppPoint`: Application point management
- `AonRewardPoint`: Reward system management
- `AonUser`: User identity and permissions
- `AonAiModel`: AI model registry and management
- `AonAiCluster`: Distributed AI processing
- `AonAiExcutor`: AI execution orchestration

### Core Classes
- `AI`: AI model interaction and management
- `AIOptions`: Configuration for AI operations
- `User`: User management and authentication
- `ListOptions`: Data query and pagination
- `Options`: System-wide configuration

## Technical Specifications
- Built with modern JavaScript/TypeScript
- Supports multiple blockchain networks
- RESTful API architecture
- Real-time data processing
- Secure storage handling

## Use Cases
- Decentralized AI services
- Token-gated AI capabilities
- AI-powered Web3 applications
- Custom AI model deployment
- Cross-chain AI interactions

## Future Potential
The framework is designed to evolve into a comprehensive Web3 AI Agent system, supporting:
- Autonomous AI agents
- Agent-to-agent communication
- Decentralized AI marketplaces
- Token-based governance
- AI model sharing and collaboration

## Security Features
- Secure wallet integration
- Protected API endpoints
- Cross-domain security
- Data encryption
- Smart contract safety checks

## Integration Capabilities
- Easy integration with existing Web3 projects
- Support for multiple AI models
- Extensible plugin system
- Custom contract integration
- Third-party service connectivity

AONWeb represents the convergence of Web3 and AI technologies, offering a foundation for building the next generation of decentralized AI applications. Its modular architecture and comprehensive feature set make it an ideal choice for developers looking to create innovative Web3-native AI solutions.

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
            console.log("login failed,please try again later");
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

### Constructor

name | type | Description
------------ | ------------- | -------------
*appId* | string | **Required**.