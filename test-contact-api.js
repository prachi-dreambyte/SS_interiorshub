// Test script for contact API endpoint
// Run with: node test-contact-api.js

const testData = {
  name: "Test User",
  email: "test@example.com",
  subject: "Test Message",
  message: "This is a test message from the API test script."
};

async function testContactAPI() {
  console.log('Testing Contact API endpoint...');
  
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    const data = await response.json();
    
    console.log('Response Status:', response.status);
    console.log('Response Data:', data);
    
    if (response.ok) {
      console.log('✅ API test passed!');
    } else {
      console.log('❌ API test failed:', data.error);
    }
  } catch (error) {
    console.log('❌ Network error:', error.message);
    console.log('Make sure the development server is running: npm run dev');
  }
}

// Run the test
testContactAPI();