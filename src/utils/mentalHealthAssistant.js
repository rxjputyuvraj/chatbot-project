// Mental Health Assistant Response Logic
export class MentalHealthAssistant {
  constructor() {
    this.conversationHistory = [];
  }

  // Generate empathetic and supportive responses
  getResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase().trim();
    this.conversationHistory.push({ role: 'user', content: userMessage });

    // Crisis detection - provide immediate resources
    if (this.isCrisis(lowerMessage)) {
      return this.getCrisisResponse();
    }

    // Greeting responses
    if (this.isGreeting(lowerMessage)) {
      return this.getGreetingResponse();
    }

    // Emotional support patterns
    if (this.isFeelingSad(lowerMessage)) {
      return this.getSadResponse();
    }

    if (this.isFeelingAnxious(lowerMessage)) {
      return this.getAnxiousResponse();
    }

    if (this.isFeelingStressed(lowerMessage)) {
      return this.getStressedResponse();
    }

    if (this.isFeelingLonely(lowerMessage)) {
      return this.getLonelyResponse();
    }

    // Asking for help
    if (this.isAskingForHelp(lowerMessage)) {
      return this.getHelpResponse();
    }

    // Thank you responses
    if (this.isThanking(lowerMessage)) {
      return this.getThankYouResponse();
    }

    // General supportive response
    return this.getGeneralSupportiveResponse();
  }

  isCrisis(message) {
    const crisisKeywords = [
      'suicide', 'kill myself', 'end my life', 'want to die', 'not worth living',
      'hurt myself', 'self harm', 'cutting', 'overdose'
    ];
    return crisisKeywords.some(keyword => message.includes(keyword));
  }

  isGreeting(message) {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    return greetings.some(greeting => message.startsWith(greeting));
  }

  isFeelingSad(message) {
    const sadKeywords = ['sad', 'depressed', 'down', 'unhappy', 'miserable', 'hopeless', 'empty'];
    return sadKeywords.some(keyword => message.includes(keyword));
  }

  isFeelingAnxious(message) {
    const anxiousKeywords = ['anxious', 'anxiety', 'worried', 'nervous', 'panic', 'overwhelmed', 'fear'];
    return anxiousKeywords.some(keyword => message.includes(keyword));
  }

  isFeelingStressed(message) {
    const stressKeywords = ['stressed', 'stress', 'pressure', 'overwhelmed', 'burnt out', 'exhausted'];
    return stressKeywords.some(keyword => message.includes(keyword));
  }

  isFeelingLonely(message) {
    const lonelyKeywords = ['lonely', 'alone', 'isolated', 'no one', 'nobody', 'friendless'];
    return lonelyKeywords.some(keyword => message.includes(keyword));
  }

  isAskingForHelp(message) {
    const helpKeywords = ['help', 'advice', 'what should', 'what can', 'how do', 'support'];
    return helpKeywords.some(keyword => message.includes(keyword));
  }

  isThanking(message) {
    const thanks = ['thank', 'thanks', 'appreciate', 'grateful'];
    return thanks.some(word => message.includes(word));
  }

  getCrisisResponse() {
    return "I'm concerned about what you've shared. Your life has value, and there are people who want to help. Please reach out to a crisis helpline immediately:\n\n" +
           "🌐 National Suicide Prevention Lifeline: 988 (US)\n" +
           "🌐 Crisis Text Line: Text HOME to 741741\n" +
           "🌐 International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/\n\n" +
           "If you're in immediate danger, please call your local emergency services. You don't have to go through this alone.";
  }

  getGreetingResponse() {
    const greetings = [
      "Hello! I'm here to listen and support you. How are you feeling today?",
      "Hi there! I'm glad you're here. What's on your mind?",
      "Hello! I'm your mental health assistant. I'm here to provide a safe space for you to share. How can I help you today?",
      "Hi! Welcome. I'm here to listen without judgment. What would you like to talk about?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  getSadResponse() {
    const responses = [
      "I'm sorry you're feeling this way. It takes courage to acknowledge these feelings. Remember that sadness is a valid emotion, and it's okay to not be okay. Would you like to talk more about what's making you feel this way?",
      "I hear you, and I want you to know that your feelings are valid. Sometimes when we're feeling down, it can help to practice self-compassion. What's one small thing you could do today to be kind to yourself?",
      "Thank you for sharing this with me. Feeling sad can be really difficult. Have you noticed any patterns in when these feelings come up? Sometimes understanding our triggers can help us manage them better.",
      "I'm here with you through this. Remember that feelings are temporary, even when they don't feel that way. Is there someone in your life you feel comfortable talking to about this?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  getAnxiousResponse() {
    const responses = [
      "Anxiety can feel overwhelming, but you're taking a positive step by reaching out. When you feel anxious, try taking slow, deep breaths. Inhale for 4 counts, hold for 4, and exhale for 4. Would you like to try this together?",
      "I understand that anxiety can be really challenging. Remember that anxiety is your body's way of trying to protect you, even if it doesn't feel helpful right now. What specific situation or thought is making you feel anxious?",
      "Anxiety can make everything feel bigger than it is. One technique that helps many people is the 5-4-3-2-1 grounding method: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. Would you like to try this?",
      "Thank you for sharing your anxiety with me. You're not alone in feeling this way. Have you tried any coping strategies before? Sometimes having a toolkit of techniques can help when anxiety strikes."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  getStressedResponse() {
    const responses = [
      "Stress can be really draining. It sounds like you're dealing with a lot right now. Sometimes breaking things down into smaller, manageable tasks can help. What's one thing you could do right now that would make you feel a little better?",
      "I hear that you're feeling stressed. Remember that it's okay to take breaks and prioritize your wellbeing. What's causing you the most stress right now?",
      "Stress is a natural response, but when it becomes overwhelming, it's important to take care of yourself. Have you been able to get enough rest and take time for activities you enjoy?",
      "You're doing your best, and that's enough. When stress feels overwhelming, try to focus on what you can control right now. What's one small step you could take to reduce your stress today?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  getLonelyResponse() {
    const responses = [
      "Feeling lonely can be really difficult. I want you to know that you're not truly alone - there are people who care about you, even if it doesn't feel that way right now. Have you considered reaching out to someone you trust?",
      "Loneliness is a painful feeling, and I'm sorry you're experiencing it. Sometimes connecting with others, even in small ways, can help. Is there a community group, hobby, or activity that interests you where you might meet like-minded people?",
      "Thank you for sharing this with me. Loneliness can make us feel disconnected, but remember that many people experience this feeling. What helps you feel more connected to yourself or others?",
      "I'm here with you. Loneliness is a valid and difficult emotion. Sometimes self-compassion and self-care can help bridge the gap until we find connection with others. What's something kind you could do for yourself today?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  getHelpResponse() {
    const responses = [
      "I'm here to help! I can provide emotional support, coping strategies, and resources. What specific area would you like help with? Whether it's managing difficult emotions, finding resources, or just having someone to talk to, I'm here.",
      "I'm glad you reached out. I can help you explore your feelings, suggest coping strategies, or point you toward helpful resources. What would be most helpful for you right now?",
      "You've taken a brave step by asking for help. I can support you with emotional guidance, mindfulness techniques, or help you find professional resources if needed. What do you need help with today?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  getThankYouResponse() {
    const responses = [
      "You're very welcome! I'm glad I could help. Remember, I'm here whenever you need to talk. Take care of yourself.",
      "It's my pleasure to support you. You're doing great by taking care of your mental health. Feel free to come back anytime.",
      "You're welcome! I'm here for you. Remember that seeking support is a sign of strength, not weakness. Take care!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  getGeneralSupportiveResponse() {
    const responses = [
      "Thank you for sharing that with me. I'm listening, and I want you to know that your feelings are valid. Would you like to tell me more about what's on your mind?",
      "I hear you, and I appreciate you opening up. Sometimes just talking about our feelings can help. Is there more you'd like to share?",
      "Thank you for trusting me with this. I'm here to support you. What would be most helpful for you right now?",
      "I'm glad you're here and sharing with me. Your wellbeing matters. How are you feeling about what you just shared?",
      "I'm listening, and I want you to know that you're not alone in whatever you're experiencing. Would you like to explore this feeling together?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

export const mentalHealthAssistant = new MentalHealthAssistant();

