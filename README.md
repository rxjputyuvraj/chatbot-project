# Mental Health Assistant

A compassionate AI-powered mental health assistant built with React and Vite. This application provides a safe, non-judgmental space for users to express their thoughts and feelings, receive emotional support, and access mental health resources.

## Features

### 🤗 Empathetic Conversations
- AI-powered responses tailored to emotional states (anxiety, sadness, stress, loneliness)
- Crisis detection with immediate resource provision
- Supportive, non-judgmental communication style

### 🎯 Quick Actions
- One-click buttons for common emotional states
- Easy access to express feelings quickly
- Streamlined user experience

### 📚 Mental Health Resources
- Crisis helpline information (988 Suicide & Crisis Lifeline)
- Crisis Text Line access
- Links to mental health organizations
- Easy-to-find resource section

### 🎨 Calming Design
- Soothing color palette designed for mental wellness
- Clean, modern interface
- Responsive design for all devices
- Accessible and user-friendly

### ⚡ Key Capabilities
- **Emotional Support**: Provides empathetic responses to various emotional states
- **Crisis Detection**: Automatically detects crisis situations and provides immediate resources
- **Coping Strategies**: Offers practical techniques for managing difficult emotions
- **Resource Links**: Quick access to professional mental health resources

## Important Disclaimer

⚠️ **This application provides supportive conversation and general information, but it is NOT a substitute for professional mental health care.**

If you're experiencing a mental health crisis or emergency, please contact:
- **988 Suicide & Crisis Lifeline** (US): Call or text 988
- **Crisis Text Line**: Text HOME to 741741
- **Emergency Services**: Call 911 (US) or your local emergency number

## Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern gradients and animations
- **JavaScript ES6+** - Core functionality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatbot-project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The built files will be in the `dist` directory.

## Project Structure

```
chatbot-project/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   ├── utils/
│   │   └── mentalHealthAssistant.js  # AI assistant logic
│   └── assets/              # Images and static assets
├── public/                  # Public assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## How It Works

The Mental Health Assistant uses pattern recognition to identify emotional states and provide appropriate responses:

1. **Input Analysis**: User messages are analyzed for emotional keywords and patterns
2. **Response Generation**: The assistant generates empathetic, supportive responses based on detected emotional states
3. **Crisis Detection**: Special handling for crisis situations with immediate resource provision
4. **Conversation Flow**: Natural conversation flow with appropriate follow-up questions and support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. When contributing:

1. Maintain the empathetic, supportive tone
2. Ensure all mental health resources are accurate and up-to-date
3. Follow the existing code style
4. Test thoroughly before submitting

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**Remember**: Your mental health matters. This tool is here to support you, but professional help is available and encouraged when needed. You are not alone. 💙
