import React from 'react';
import './HeatlhTips.css'; // Import CSS file for styling

const HealthTips = () => {
//   const healthTips = [
//     {
//       id: 1,
//       title: 'Stay Hydrated',
//       content: 'Drink plenty of water throughout the day to keep your body hydrated and functioning properly.',
//     },
//     {
//       id: 2,
//       title: 'Eat Nutritious Foods',
//       content: 'Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet.',
//     },
//     // ... (Continue adding more health tips)
//   ];
  const healthTips = [
    {
      id: 1,
      title: 'Stay Hydrated',
      description: 'Drink plenty of water throughout the day to keep your body hydrated and maintain optimal bodily functions. Water helps with digestion, circulation, temperature regulation, and more.',
    },
    {
      id: 2,
      title: 'Eat a Balanced Diet',
      description: 'Consume a variety of nutrient-rich foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats. A balanced diet provides essential nutrients and helps maintain overall health.',
    },
    {
      id: 3,
      title: 'Exercise Regularly',
      description: 'Engage in regular physical activity to boost cardiovascular health, strengthen muscles, improve flexibility, manage weight, and enhance overall well-being. Aim for at least 150 minutes of moderate-intensity exercise per week.',
    },
    {
      id: 4,
      title: 'Get Adequate Sleep',
      description: 'Prioritize quality sleep to rejuvenate your body and mind. Most adults require 7-9 hours of sleep per night. Establish a consistent sleep schedule, create a relaxing sleep environment, and practice good sleep hygiene.',
    },
    {
      id: 5,
      title: 'Manage Stress',
      description: 'Find healthy ways to manage stress, such as practicing mindfulness, deep breathing exercises, meditation, engaging in hobbies, or seeking support from loved ones. Chronic stress can negatively impact physical and mental health.',
    },
    {
      id: 6,
      title: 'Maintain a Healthy Weight',
      description: 'Maintain a weight that is within a healthy range for your body type. Focus on a balanced diet and regular exercise to achieve and sustain a healthy weight. Consult with a healthcare professional for personalized guidance.',
    },
    {
      id: 7,
      title: 'Practice Portion Control',
      description: "Be mindful of portion sizes to prevent overeating. Use smaller plates, listen to your body's hunger and fullness cues, and avoid distractions while eating to promote mindful eating.",
    },
    {
      id: 8,
      title: 'Limit Processed Foods',
      description: 'Reduce consumption of processed and packaged foods that are often high in added sugars, unhealthy fats, and sodium. Opt for whole, unprocessed foods to maximize nutrient intake.',
    },
    {
      id: 9,
      title: 'Stay Active Throughout the Day',
      description: 'Incorporate movement into your daily routine by taking breaks from sitting, using the stairs instead of the elevator, walking or biking instead of driving short distances, and engaging in regular physical activity.',
    },
    {
      id: 10,
      title: 'Practice Good Posture',
      description: 'Maintain proper posture while sitting and standing to prevent strain on the muscles and spine. Sit with your back straight, shoulders relaxed, and feet flat on the floor. Avoid prolonged sitting or standing in one position.',
    },
    {
      id: 11,
      title: 'Quit Smoking',
      description: 'If you smoke, quitting is one of the best things you can do for your health. Seek support from healthcare professionals, medications, or support groups to help you quit smoking successfully.',
    },
    {
      id: 12,
      title: 'Limit Alcohol Consumption',
      description: 'If you choose to drink alcohol, do so in moderation. For most adults, moderate drinking is defined as up to one drink per day for women and up to two drinks per day for men.',
    },
    {
      id: 13,
      title: 'Practice Good Dental Hygiene',
      description: 'Brush your teeth at least twice a day, floss daily, and visit your dentist regularly. Good dental hygiene helps prevent tooth decay, gum disease, and other oral health issues.',
    },
    {
      id: 14,
      title: 'Protect Your Skin from the Sun',
      description: 'Wear sunscreen with at least SPF 30, seek shade during peak sun hours, wear protective clothing, and use sunglasses to shield your skin and eyes from harmful UV rays. Avoid indoor tanning.',
    },
    {
      id: 15,
      title: 'Stay Socially Connected',
      description: 'Maintain social connections with friends, family, and community members. Social support and interaction contribute to overall well-being and help reduce the risk of mental health issues.',
    },
    {
      id: 16,
      title: 'Practice Safe Sex',
      description: 'Use protection, such as condoms, to prevent the transmission of sexually transmitted infections (STIs). Discuss sexual health with your partner and get tested regularly.',
    },
    {
      id: 17,
      title: 'Maintain Good Hygiene Practices',
      description: 'Wash your hands frequently with soap and water, especially before eating and after using the restroom. Cover your mouth and nose when coughing or sneezing, and avoid close contact with sick individuals.',
    },
    {
      id: 18,
      title: 'Schedule Regular Check-ups',
      description: 'Visit your healthcare provider for routine check-ups, screenings, and vaccinations. Regular health exams help detect potential issues early and promote preventive care.',
    },
    {
      id: 19,
      title: 'Practice Mindful Eating',
      description: "Pay attention to your body's hunger and fullness cues, eat slowly, savor the flavors of your food, and avoid distractions while eating. Mindful eating promotes a healthy relationship with food.",
    },
    {
      id: 20,
      title: 'Limit Added Sugar Intake',
      description: 'Reduce consumption of foods and beverages high in added sugars, such as sugary drinks, desserts, and processed snacks. Opt for naturally sweet foods, like fruits, to satisfy your sweet tooth.',
    },
    {
      id: 21,
      title: 'Cultivate a Positive Mindset',
      description: 'Practice gratitude, positive self-talk, and self-compassion. Surround yourself with positive influences and engage in activities that bring you joy and fulfillment.',
    },
    {
      id: 22,
      title: 'Take Breaks from Screens',
      description: 'Limit screen time and take regular breaks from electronic devices. Engage in activities that promote physical movement, social interaction, and mental relaxation.',
    },
    {
      id: 23,
      title: 'Prioritize Mental Health',
      description: 'Pay attention to your mental health and seek support if needed. Practice stress management techniques, engage in hobbies, maintain healthy relationships, and consider therapy or counseling if necessary.',
    },
    {
      id: 24,
      title: 'Engage in Brain-Boosting Activities',
      description: 'Challenge your mind with puzzles, reading, learning new skills, or engaging in mentally stimulating activities. Keep your brain active and continuously learning.',
    },
    {
      id: 25,
      title: 'Practice Safe Lifting Techniques',
      description: 'When lifting heavy objects, use your legs and not your back. Bend your knees, keep your back straight, and lift with your leg muscles to avoid strain or injury.',
    },
    {
      id: 26,
      title: 'Maintain Proper Hand Hygiene',
      description: 'Wash your hands thoroughly with soap and water for at least 20 seconds, especially before preparing orserving food, after using the restroom, and after coughing or sneezing. Hand hygiene helps prevent the spread of germs and infections.',
    },
    {
      id: 27,
      title: 'Practice Mindfulness',
      description: 'Engage in mindfulness practices such as meditation, deep breathing exercises, or yoga. These practices can help reduce stress, increase self-awareness, and improve overall well-being.',
    },
    {
      id: 28,
      title: 'Maintain a Positive Work-Life Balance',
      description: 'Find a balance between work and personal life. Set boundaries, prioritize self-care, and make time for activities that bring you joy and relaxation outside of work.',
    },
    {
      id: 29,
      title: 'Promote Good Posture',
      description: 'Maintain proper posture while sitting, standing, and walking to prevent strain on your muscles and spine. Sit with your back straight, shoulders relaxed, and feet flat on the floor.',
    },
    {
      id: 30,
      title: 'Practice Deep Breathing',
      description: 'Take deep, slow breaths to promote relaxation, reduce stress, and increase oxygen flow to your body. Practice deep breathing exercises regularly to experience its calming effects.',
    },
    {
      id: 31,
      title: 'Practice Gratitude',
      description: 'Express gratitude for the positive aspects of your life. Take a moment each day to acknowledge and appreciate the things you are grateful for. Gratitude can promote a positive mindset and overall well-being.',
    },
    {
      id: 32,
      title: 'Maintain a Clean Living Environment',
      description: 'Keep your living space clean and organized to promote a healthy and peaceful environment. Regularly clean surfaces, minimize clutter, and create a space that promotes relaxation and well-being.',
    },
    {
      id: 33,
      title: 'Take Time for Self-Care',
      description: 'Make self-care a priority by engaging in activities that recharge and rejuvenate you. This could include taking a bath, practicing hobbies, reading, or spending time in nature.',
    },
    {
      id: 34,
      title: 'Laugh and Have Fun',
      description: 'Engage in activities that make you laugh and bring joy to your life. Laughter has been shown to reduce stress, boost mood, and improve overall well-being.',
    },
    {
      id: 35,
      title: 'Practice Good Oral Hygiene',
      description: 'Brush your teeth at least twice a day, floss daily, and visit your dentist regularly for check-ups and cleanings. Good oral hygiene helps prevent tooth decay, gum disease, and other dental issues.',
    },
    {
      id: 36,
      title: 'Engage in Regular Stretching',
      description: 'Incorporate stretching exercises into your routine to improve flexibility, prevent muscle stiffness, and enhance mobility. Stretch major muscle groups after exercise or as part of your daily routine.',
    },
    {
      id: 37,
      title: 'Spend Time Outdoors',
      description: 'Spend time in nature and enjoy outdoor activities. Exposure to nature has been shown to reduce stress, boost mood, and improve overall well-being.',
    },
    {
      id: 38,
      title: 'Practice Safe Driving',
      description: 'Follow traffic rules, wear seatbelts, avoid distractions while driving, and never drink and drive. Practice defensive driving techniques to promote your safety and the safety of others.',
    },
    {
      id: 39,
      title: 'Protect Your Hearing',
      description: 'Limit exposure to loud noises and use ear protection in noisy environments. Prolonged exposure to loud noises can damage your hearing over time.',
    },
    {
      id: 40,
      title: 'Nurture Positive Relationships',
      description: 'Cultivate and maintain positive relationships with friends, family, and loved ones. Surrounding yourself with supportive and positive individuals contributes to your mental and emotional well-being.',
    },
    {
      id: 41,
      title: 'Challenge Your Mind',
      description: 'Engage in activities that challenge your cognitive abilities, such as puzzles, reading, learning a new language, or playing strategic games. Mental stimulation can help maintain brain health.',
    },
    {
      id: 42,
      title: 'Practice Good Hand Hygiene',
      description: 'Wash your hands regularly with soap and water for at least 20 seconds, especially before preparing or consuming food, after using the restroom, and after coughing or sneezing.',
    },
    {
      id: 43,
      title: 'Promote Healthy Workstation Ergonomics',
      description: 'Set up your workstation in an ergonomic manner to reduce the risk of musculoskeletal issues. Use an adjustable chair, maintain proper posture, and position your computer monitor at eye level.',
    },
    {
      id: 44,
      title: 'Engage in Regular Cardiovascular Exercise',
      description: 'Include aerobic exercises such as brisk walking, jogging, cycling, or swimming in your routine. Cardiovascular exercise improves heart health, strengthens muscles, and boosts overall fitness.',
    },
    {
      id: 45,
      title: 'Practice Meditation',
      description: 'Set aside time for meditation or mindfulness practices. Meditation can help reduce stress, improve focus, and promote emotional well-being. Find a quiet and comfortable space, focus on your breath or a specific mantra, and allow your mind to become calm and centered.',
    },
    {
      id: 46,
      title: 'Practice Safe Household Cleaning',
      description: 'When using cleaning products, follow safety guidelines and ensure proper ventilation. Avoid mixing different cleaning chemicals, wear protective gloves, and keep cleaning products out of reach of children.',
    },
    {
      id: 47,
      title: 'Maintain Strong and Healthy Bones',
      description: 'Consume foods rich in calcium and vitamin D, such as dairy products, leafy greens, and fortified foods. Engage in weight-bearing exercises like walking or weightlifting to help maintain bone density.',
    },
    {
      id: 48,
      title: 'Limit Caffeine Intake',
      description: 'Monitor and moderate your caffeine consumption, as excessive intake can lead to sleep disturbances, increased heart rate, and anxiety. Be mindful of the sources of caffeine, including coffee, tea, energy drinks, and certain sodas.',
    },
    {
      id: 49,
      title: 'Take Regular Breaks and Rest',
      description: 'Incorporate regular breaks and moments of rest into your daily routine. Taking short breaks can help reduce mental fatigue, increase productivity, and prevent burnout.',
    },
    {
      id: 50,
      title: 'Practice Self-Compassion',
      description: 'Be kind and understanding to yourself. Treat yourself with the same compassion and care that you would offer to a loved one. Practice self-acceptance, forgive yourself for mistakes, and prioritize your well-being.',
    },
  ];
  
  return (
    <div className="health-tips-container" style={{marginTop:'5%'}}>
      <h1 className="health-tips-title">Health Tips and Guidance</h1>
      <div className="health-tips-list">
        {healthTips.map((tip) => (
          <div className="health-tip" key={tip.id}>
            <ul>
            <h2 className="health-tip-title">{tip.title}</h2>
                <li>
                
            <p className="health-tip-content">{tip.description}</p>
                </li>
            </ul>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
