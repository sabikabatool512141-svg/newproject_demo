// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native';
// import { MotiView, MotiImage } from 'moti';
// import { AntDesign } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const { width, height } = Dimensions.get('window');

// const items = [
//   { id: '1', label: 'Sunset', image: require('./assets/sunset.jpg'), description: 'A warm sunset with glowing colors and soft motion.' },
//   { id: '2', label: 'Mountains', image: require('./assets/mountains.jpg'), description: 'Majestic peaks with slow cloud drift animations.' },
//   { id: '3', label: 'Forest', image: require('./assets/forest.jpg'), description: 'Green trees swaying with light breeze animation.' },
//   { id: '4', label: 'Ocean', image: require('./assets/ocean.jpg'), description: 'Blue waves rolling gently under sunlight animation.' },
// ];

// const Stack = createStackNavigator();

// function HomeScreen({ navigation }) {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(items[0]);

//   const toggleDropdown = () => setOpen(!open);
//   const selectItem = (item) => {
//     setSelected(item);
//     setOpen(false);
//     navigation.navigate('Details', { item });
//   };

//   return (
//     <ImageBackground source={require('./assets/background.jpg')} style={styles.background} blurRadius={3}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Animated Dropdown Gallery</Text>

//         <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
//           <Text style={styles.dropdownText}>{selected.label}</Text>
//           <AntDesign name={open ? 'up' : 'down'} size={20} color="white" />
//         </TouchableOpacity>

//         {open && (
//           <MotiView
//             from={{ opacity: 0, translateY: -20 }}
//             animate={{ opacity: 1, translateY: 0 }}
//             transition={{ type: 'timing', duration: 400 }}
//             style={styles.dropdown}
//           >
//             <FlatList
//               data={items}
//               keyExtractor={(item) => item.id}
//               renderItem={({ item }) => (
//                 <TouchableOpacity style={styles.item} onPress={() => selectItem(item)}>
//                   <MotiImage
//                     from={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ type: 'spring', duration: 500 }}
//                     source={item.image}
//                     style={styles.itemImage}
//                   />
//                   <Text style={styles.itemLabel}>{item.label}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//           </MotiView>
//         )}

//         <MotiView
//           from={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ type: 'spring', delay: 300 }}
//           style={styles.imageContainer}
//         >
//           <Image source={selected.image} style={styles.mainImage} />
//         </MotiView>
//       </View>
//     </ImageBackground>
//   );
// }

// function DetailsScreen({ route }) {
//   const { item } = route.params;
//   return (
//     <ImageBackground source={require('./assets/background.jpg')} style={styles.background} blurRadius={2}>
//       <View style={styles.detailsContainer}>
//         <MotiImage
//           from={{ opacity: 0, scale: 0.5, rotate: '10deg' }}
//           animate={{ opacity: 1, scale: 1, rotate: '0deg' }}
//           transition={{ type: 'spring', duration: 800 }}
//           source={item.image}
//           style={styles.detailImage}
//         />

//         <MotiView
//           from={{ translateY: 20, opacity: 0 }}
//           animate={{ translateY: 0, opacity: 1 }}
//           transition={{ type: 'timing', duration: 600, delay: 400 }}
//         >
//           <Text style={styles.detailTitle}>{item.label}</Text>
//           <Text style={styles.detailDesc}>{item.description}</Text>
//         </MotiView>
//       </View>
//     </ImageBackground>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     backgroundColor:"black"
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   dropdownHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '80%',
//     padding: 15,
//     backgroundColor: 'rgba(255,255,255,0.25)',
//     borderRadius: 12,
//     marginBottom: 10,
//   },
//   dropdownText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   dropdown: {
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 10,
//     padding: 10,
//     width: '80%',
//     maxHeight: 200,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   itemImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   itemLabel: {
//     color: 'white',
//     fontSize: 16,
//   },
//   imageContainer: {
//     marginTop: 20,
//     borderRadius: 16,
//     overflow: 'hidden',
//     elevation: 5,
//   },
//   mainImage: {
//     width: width * 0.8,
//     height: height * 0.3,
//     borderRadius: 16,
//   },
//   detailsContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   detailImage: {
//     width: width * 0.9,
//     height: height * 0.4,
//     borderRadius: 20,
//     marginBottom: 20,
//   },
//   detailTitle: {
//     fontSize: 28,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   detailDesc: {
//     color: 'white',
//     fontSize: 18,
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });



// App.js
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState(null);
  const flatListRef = useRef(null);
  const streamingIntervalRef = useRef(null);

  // 🔑 REPLACE WITH YOUR GEMINI API KEY
  const GEMINI_API_KEY = 'AIzaSyDD05tiMSH4oz_6EpA1xcfsP48jden_bi4';
  
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  useEffect(() => {
    // Welcome message
    setMessages([
      {
        id: '1',
        text: "Hello! I'm your AI assistant powered by Google Gemini. How can I help you today?",
        isUser: false,
        timestamp: new Date(),
        isComplete: true,
      },
    ]);

    // Cleanup on unmount
    return () => {
      if (streamingIntervalRef.current) {
        clearInterval(streamingIntervalRef.current);
      }
    };
  }, []);

  // Function to simulate typing effect (character by character)
  const startTypingEffect = (messageId, fullText) => {
    if (streamingIntervalRef.current) {
      clearInterval(streamingIntervalRef.current);
    }

    let currentIndex = 0;
    let currentText = '';

    streamingIntervalRef.current = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        currentIndex++;
        
        setMessages(prev => prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, text: currentText }
            : msg
        ));
        
        // Auto scroll to bottom
        setTimeout(() => {
          flatListRef.current?.scrollToEnd({ animated: true });
        }, 50);
      } else {
        // Typing complete
        clearInterval(streamingIntervalRef.current);
        streamingIntervalRef.current = null;
        setMessages(prev => prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, isComplete: true }
            : msg
        ));
        setStreamingMessageId(null);
      }
    }, 16); // ~60 characters per second for natural typing speed
  };

  const sendMessage = async () => {
    if (!inputText.trim() || loading) return;

    // Check API key
    if (!GEMINI_API_KEY) {
      Alert.alert(
        'API Key Required',
        'Please set your Gemini API key in the App.js file.',
        [{ text: 'OK' }]
      );
      return;
    }

    const userMessage = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
      isComplete: true,
    };

    // Add user message immediately
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    // Add placeholder for bot response
    const botMessageId = (Date.now() + 1).toString();
    const botMessage = {
      id: botMessageId,
      text: '', // Start with empty text
      isUser: false,
      timestamp: new Date(),
      isComplete: false,
    };

    setMessages(prev => [...prev, botMessage]);
    setStreamingMessageId(botMessageId);

    try {
      // Try different models in order
      const modelsToTry = ['gemini-2.5-flash'];
      let responseText = '';
      let lastError = null;

      for (const modelName of modelsToTry) {
        try {
          console.log(`Trying model: ${modelName}`);
          const model = genAI.getGenerativeModel({ 
            model: modelName,
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1000,
            },
          });

          const result = await model.generateContent(inputText);
          const response = await result.response;
          responseText = response.text();
          console.log(`Success with model: ${modelName}`);
          break; // Exit loop if successful
        } catch (modelError) {
          console.log(`Failed with model ${modelName}:`, modelError.message);
          lastError = modelError;
          continue; // Try next model
        }
      }

      if (!responseText) {
        throw lastError || new Error('All models failed');
      }

      // Start typing effect with the response
      startTypingEffect(botMessageId, responseText);

    } catch (error) {
      console.error('Gemini API Error:', error);
      
      let errorMessage = 'Sorry, I encountered an error. Please try again.';
      
      if (error.message?.includes('API_KEY') || error.status === 401) {
        errorMessage = 'Invalid API key. Please check your Gemini API configuration.';
      } else if (error.message?.includes('quota')) {
        errorMessage = 'API quota exceeded. Please check your usage limits.';
      } else if (error.message?.includes('network') || error.message?.includes('NETWORK')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.message?.includes('404') || error.message?.includes('not found')) {
        errorMessage = 'Service temporarily unavailable. Please try again later.';
      }

      // Show error message immediately (no typing effect for errors)
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId 
          ? { ...msg, text: errorMessage, isComplete: true }
          : msg
      ));
      setStreamingMessageId(null);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    Alert.alert(
      'Clear Chat',
      'Are you sure you want to clear all messages?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => {
            if (streamingIntervalRef.current) {
              clearInterval(streamingIntervalRef.current);
              streamingIntervalRef.current = null;
            }
            setMessages([
              {
                id: '1',
                text: 'Chat cleared. How can I help you today?',
                isUser: false,
                timestamp: new Date(),
                isComplete: true,
              },
            ]);
            setStreamingMessageId(null);
          },
        },
      ]
    );
  };

  const stopTyping = () => {
    if (streamingIntervalRef.current) {
      clearInterval(streamingIntervalRef.current);
      streamingIntervalRef.current = null;
    }
    setStreamingMessageId(null);
    setLoading(false);
    
    // Mark the current streaming message as complete
    if (streamingMessageId) {
      setMessages(prev => prev.map(msg => 
        msg.id === streamingMessageId 
          ? { ...msg, isComplete: true }
          : msg
      ));
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.isUser ? styles.userMessage : styles.botMessage
    ]}>
      <View style={[
        styles.messageBubble,
        item.isUser ? styles.userBubble : styles.botBubble
      ]}>
        <Text style={[
          styles.messageText,
          item.isUser ? styles.userMessageText : styles.botMessageText
        ]}>
          {item.text}
          {!item.isComplete && item.id === streamingMessageId && (
            <Text style={styles.typingCursor}>|</Text>
          )}
        </Text>
        
        {/* Typing indicator for empty starting message */}
        {!item.text && !item.isComplete && (
          <View style={styles.typingIndicator}>
            <View style={styles.typingDot} />
            <View style={styles.typingDot} />
            <View style={styles.typingDot} />
          </View>
        )}
      </View>
      
      <View style={styles.messageFooter}>
        <Text style={styles.timestamp}>
          {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
        {!item.isUser && !item.isComplete && item.text && (
          <TouchableOpacity onPress={stopTyping} style={styles.stopButton}>
            <Text style={styles.stopButtonText}>Stop</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Gemini Chat</Text>
          <Text style={styles.headerSubtitle}>Powered by Google AI</Text>
        </View>
        <TouchableOpacity onPress={clearChat} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {/* Messages List */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.messagesList}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        ListFooterComponent={
          loading && !streamingMessageId ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#007AFF" />
              <Text style={styles.loadingText}>Connecting to Gemini...</Text>
            </View>
          ) : null
        }
      />

      {/* Input Area */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          placeholderTextColor="#999"
          multiline
          maxLength={2000}
          editable={!loading}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            (!inputText.trim() || loading) && styles.sendButtonDisabled
          ]}
          onPress={sendMessage}
          disabled={!inputText.trim() || loading}
        >
          <Text style={styles.sendButtonText}>
            {loading ? '...' : 'Send'}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  messagesList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageContainer: {
    marginVertical: 8,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 18,
    maxWidth: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    minHeight: 40,
    justifyContent: 'center',
  },
  userMessage: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  botMessage: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#007AFF',
  },
  botBubble: {
    backgroundColor: '#fff',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#fff',
  },
  botMessageText: {
    color: '#333',
  },
  typingCursor: {
    color: '#007AFF',
    fontWeight: 'bold',
    marginLeft: 2,
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },
  typingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#999',
    marginHorizontal: 2,
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    minHeight: 20,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  stopButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#ff4444',
    borderRadius: 8,
    marginLeft: 8,
  },
  stopButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    maxHeight: 100,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 60,
  },
  sendButtonDisabled: {
    backgroundColor: '#ccc',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  loadingText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 14,
  },
});