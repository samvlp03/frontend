// This component is responsible for displaying a list of activities.
const activities = {
  "Depression": [
    {
      "id": "01",
      "title": "Fix Sleep Schedule",
      "description": "Maintain a consistent wake-up and bedtime to regulate mood.",
      "img_url": "https://plus.unsplash.com/premium_photo-1661779054933-3b929260ec41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xlZXAlMjBzY2hlZHVsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": "02",
      "title": "Get Sunlight",
      "description": "Spend 15-30 minutes in natural sunlight to boost serotonin levels.",
      "img_url": "https://images.unsplash.com/photo-1511836536898-6d6f1b8f6948?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VubGlnaHR8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "03",
      "title": "Engage in Physical Activity",
      "description": "Practice light exercises like walking or yoga for mental well-being.",
      "img_url": "https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "04",
      "title": "Reduce Social Media",
      "description": "Limit exposure to negative content and unnecessary screen time.",
      "img_url": "https://images.pexels.com/photos/4050300/pexels-photo-4050300.jpeg"
    },
    {
      "id": "05",
      "title": "Start a Gratitude Journal",
      "description": "Write down three positive things daily to shift focus to positivity.",
      "img_url": "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYXRpdHVkZSUyMGpvdXJuYWx8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "06",
      "title": "Positive Affirmations",
      "description": "Identify and replace negative thoughts with empowering affirmations.",
      "img_url": "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg"
    },
    {
      "id": "07",
      "title": "Creative Hobby",
      "description": "Spend time on a creative hobby like painting, music, or writing.",
      "img_url": "https://images.pexels.com/photos/4050303/pexels-photo-4050303.jpeg"
    },
    {
      "id": "08",
      "title": "Listen to Motivational Content",
      "description": "Engage with motivational podcasts or audiobooks for inspiration.",
      "img_url": "https://images.pexels.com/photos/4050304/pexels-photo-4050304.jpeg"
    },
    {
      "id": "09",
      "title": "Join a Support Group",
      "description": "Connect with friends or an online mental health support group.",
      "img_url": "https://images.pexels.com/photos/4050305/pexels-photo-4050305.jpeg"
    },
    {
      "id": "010",
      "title": "Practice Meditation",
      "description": "Meditate or practice deep breathing for at least 10 minutes daily.",
      "img_url": "https://images.pexels.com/photos/4050306/pexels-photo-4050306.jpeg"
    },
    {
      "id": "011",
      "title": "Eat a Balanced Diet",
      "description": "Maintain a healthy diet by limiting processed food, sugar, and caffeine.",
      "img_url": "https://images.pexels.com/photos/4050307/pexels-photo-4050307.jpeg"
    },
    {
      "id": "012",
      "title": "Set Small Goals",
      "description": "Define and achieve a small goal within a week to build confidence.",
      "img_url": "https://images.pexels.com/photos/4050308/pexels-photo-4050308.jpeg"
    },
    {
      "id": "013",
      "title": "Track Thought Patterns",
      "description": "Journal thought patterns to identify mood changes and triggers.",
      "img_url": "https://images.pexels.com/photos/4050309/pexels-photo-4050309.jpeg"
    },
    {
      "id": "014",
      "title": "Regular Physical Activity",
      "description": "Exercise for at least 30 minutes daily to maintain mental resilience.",
      "img_url": "https://images.pexels.com/photos/4050310/pexels-photo-4050310.jpeg"
    },
    {
      "id": "015",
      "title": "Improve Sleep Hygiene",
      "description": "Avoid screens 30 minutes before bed for better sleep quality.",
      "img_url": "https://images.pexels.com/photos/4050311/pexels-photo-4050311.jpeg"
    },
    {
      "id": "016",
      "title": "Step Out of Comfort Zone",
      "description": "Challenge yourself with a new activity to build confidence.",
      "img_url": "https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg"
    },
    {
      "id": "017",
      "title": "Celebrate Small Wins",
      "description": "Track progress and acknowledge every improvement.",
      "img_url": "https://images.pexels.com/photos/4050313/pexels-photo-4050313.jpeg"
    }
  ],
  "Anxiety": [
  {
    "id": "11",
    "title": "Practice Deep Breathing",
    "description": "Use deep breathing exercises to calm the nervous system.",
    "img_url": "https://plus.unsplash.com/premium_photo-1672037884220-3c42b63de4f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVlcCUyMGJyZWF0aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "12",
    "title": "Limit Caffeine Intake",
    "description": "Reduce coffee and energy drinks to prevent increased anxiety levels.",
    "img_url": "https://images.unsplash.com/photo-1508497377555-59ef1e5d6a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhZmZlaW5lfGVufDB8fDB8fHww"
  },
  {
    "id": "13",
    "title": "Try Progressive Muscle Relaxation",
    "description": "Release tension by tensing and relaxing different muscle groups.",
    "img_url": "https://images.unsplash.com/photo-1593204075264-0b7994458bf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFByb2dyZXNzaXZlJTIwTXVzY2xlJTIwUmVsYXhhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "14",
    "title": "Use Grounding Techniques",
    "description": "Try the 5-4-3-2-1 technique to stay present in the moment.",
    "img_url": "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lZGl0YXRlfGVufDB8fDB8fHww"
  },
  {
    "id": "15",
    "title": "Write in a Journal",
    "description": "Express thoughts and emotions to reduce mental clutter.",
    "img_url": "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am91cm5hbHxlbnwwfHwwfHx8MA%3D%3D"
  }
]
,
  "Schizophrenia": [
  {
    "id": "21",
    "title": "Follow Medication Plan",
    "description": "Take prescribed medications consistently to stabilize symptoms.",
    "img_url": "https://images.unsplash.com/photo-1567333971983-7ba18485eaad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYXRpb24lMjBwbGFufGVufDB8fDB8fHww"
  },
  {
    "id": "22",
    "title": "Attend Therapy Sessions",
    "description": "Engage in cognitive behavioral therapy to manage thought patterns.",
    "img_url": "https://plus.unsplash.com/premium_photo-1663050739359-a4261779f6ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRoZXJhcHklMjBzZXNzaW9ufGVufDB8fDB8fHww"
  },
  {
    "id": "23",
    "title": "Join a Support Group",
    "description": "Connect with others who understand the condition for emotional support.",
    "img_url": "https://plus.unsplash.com/premium_photo-1661963007374-f976ba0112be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcG9ydCUyMGdyb3VwfGVufDB8fDB8fHww"
  },
  {
    "id": "24",
    "title": "Maintain a Routine",
    "description": "Stick to a structured daily schedule to reduce stress and confusion.",
    "img_url": "https://plus.unsplash.com/premium_photo-1684331411879-9c5189065fe2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um91dGluZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "25",
    "title": "Practice Mindfulness",
    "description": "Engage in meditation or deep breathing to manage stress.",
    "img_url": "https://plus.unsplash.com/premium_photo-1723780821312-58dded55802d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFByYWN0aWNlJTIwTWluZGZ1bG5lc3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": "26",
    "title": "Exercise Regularly",
    "description": "Engage in light physical activities like walking or yoga.",
    "img_url": "https://plus.unsplash.com/premium_photo-1664478256604-52548c4af05a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhlcmNpc2UlMjByZWd1bGFybHl8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": "27",
    "title": "Eat a Balanced Diet",
    "description": "Maintain a nutritious diet to support brain health and energy levels.",
    "img_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFsYW5jZWQlMjBkaWV0fGVufDB8fDB8fHww"
  },
  {
    "id": "28",
    "title": "Improve Sleep Hygiene",
    "description": "Follow a proper sleep schedule to improve cognitive function.",
    "img_url": "https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsZWVwJTIwaHlnaWVuZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "29",
    "title": "Limit Social Media",
    "description": "Reduce screen time and exposure to triggering content.",
    "img_url": "https://images.unsplash.com/photo-1712331676372-2fc48f449c56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm8lMjBzb2NpYWwlMjBtZWRpYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "210",
    "title": "Engage in Creative Activities",
    "description": "Try painting, writing, or music to express emotions positively.",
    "img_url": "https://plus.unsplash.com/premium_photo-1676734031799-6a469993e475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRpdmUlMjBhY3Rpdml0aWVzfGVufDB8fDB8fHww"
  },
  {
    "id": "211",
    "title": "Track Thought Patterns",
    "description": "Journal thoughts to recognize triggers and patterns.",
    "img_url": "https://plus.unsplash.com/premium_photo-1683491155621-cd42e847d646?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpvdXJuYWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": "212",
    "title": "Set Small Goals",
    "description": "Achieve small tasks daily to boost confidence and motivation.",
    "img_url": "https://plus.unsplash.com/premium_photo-1705010662254-97e7d82cd182?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hbGwlMjBnb2Fsc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "213",
    "title": "Avoid Substance Abuse",
    "description": "Stay away from alcohol and drugs to prevent worsening symptoms.",
    "img_url": "https://plus.unsplash.com/premium_photo-1668487827037-7b88850dea9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1YnN0YW5jZSUyMGFidXNlfGVufDB8fDB8fHww"
  },
  {
    "id": "214",
    "title": "Develop Social Skills",
    "description": "Practice social interactions to strengthen relationships.",
    "img_url": "https://images.unsplash.com/photo-1567151993653-b471db6c2304?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNvY2lhbCUyMHNraWxsc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "215",
    "title": "Learn Stress Management",
    "description": "Adopt relaxation techniques like progressive muscle relaxation.",
    "img_url": "https://images.unsplash.com/photo-1559595500-e15296bdbb48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyZXNzJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "216",
    "title": "Practice Positive Affirmations",
    "description": "Challenge negative thoughts with positive self-talk.",
    "img_url": "https://plus.unsplash.com/premium_photo-1723619021737-df1d775eccc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHJhY3RpY2UlMjBQb3NpdGl2ZSUyMEFmZmlybWF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "217",
    "title": "Engage in Volunteering",
    "description": "Help others to build a sense of purpose and community.",
    "img_url": "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RW5nYWdlJTIwaW4lMjBWb2x1bnRlZXJpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": "218",
    "title": "Improve Personal Hygiene",
    "description": "Maintain self-care habits to boost self-esteem and well-being.",
    "img_url": "https://images.unsplash.com/photo-1591610160225-861405867ba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW1wcm92ZSUyMFBlcnNvbmFsJTIwSHlnaWVuZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": "219",
    "title": "Stay Hydrated",
    "description": "Drink enough water daily to maintain energy levels and focus.",
    "img_url": "https://plus.unsplash.com/premium_photo-1670426501176-d772b7bcca4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHlkcmF0aW9ufGVufDB8fDB8fHww"
  }
]
,
  "Panic Disorder": [
    {
      "id": "31",
      "title": "Deep Breathing Exercises",
      "description": "Practice diaphragmatic breathing to calm the nervous system.",
      "img_url": "https://plus.unsplash.com/premium_photo-1725983651130-40bc371d5843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVlcCUyMEJyZWF0aGluZyUyMEV4ZXJjaXNlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": "32",
      "title": "Progressive Muscle Relaxation",
      "description": "Tense and release muscles to reduce panic symptoms.",
      "img_url": "https://plus.unsplash.com/premium_photo-1663013066721-f8d0de45f927?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJvZ3Jlc3NpdmUlMjBNdXNjbGUlMjBSZWxheGF0aW9ufGVufDB8fDB8fHww"
    },
    {
      "id": "33",
      "title": "Mindfulness Meditation",
      "description": "Stay present in the moment to reduce anxiety and fear.",
      "img_url": "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWluZGZ1bG5lc3MlMjBtZWRpdGF0aW9ufGVufDB8fDB8fHww"
    },
    {
      "id": "34",
      "title": "Cognitive Restructuring",
      "description": "Identify and challenge irrational panic-related thoughts.",
      "img_url": "https://images.unsplash.com/photo-1714632428564-1e5c44d67263?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZ25pdGl2ZSUyMHJlc3RydWN0dXJpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "35",
      "title": "Journaling Panic Episodes",
      "description": "Track panic attacks to identify triggers and patterns.",
      "img_url": "https://images.unsplash.com/photo-1701206886407-6a1a3cf6c74d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpvdXJuYWwlMjBwYW5pYyUyMGVwaXNvZGVzfGVufDB8fDB8fHww"
    },
    {
      "id": "36",
      "title": "Avoid Caffeine and Stimulants",
      "description": "Reduce caffeine intake to prevent unnecessary panic symptoms.",
      "img_url": "https://images.unsplash.com/photo-1674336771947-8bf8fadb7f70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhZmZlaW5lfGVufDB8fDB8fHww"
    },
    {
      "id": "37",
      "title": "Practice Visualization",
      "description": "Imagine calming scenarios to ease panic attacks.",
      "img_url": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpc3VhbGl6YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "38",
      "title": "Regular Physical Exercise",
      "description": "Engage in daily movement to manage panic symptoms.",
      "img_url": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "39",
      "title": "Healthy Sleep Routine",
      "description": "Ensure 7-9 hours of sleep for better emotional regulation.",
      "img_url": "https://images.unsplash.com/photo-1631310665125-b07e024f408d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xlZXAlMjByb3V0aW5lfGVufDB8fDB8fHww"
    },
    {
      "id": "310",
      "title": "Hydration and Balanced Diet",
      "description": "Drink enough water and eat nutrient-rich foods for brain health.",
      "img_url": "https://plus.unsplash.com/premium_photo-1708971732529-28f9a670de56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHlkcmF0aW9uJTIwYW5kJTIwYmFsYW5jZWQlMjBkaWV0fGVufDB8fDB8fHww"
    },
    {
      "id": "311",
      "title": "Grounding Techniques",
      "description": "Use the 5-4-3-2-1 method to stay present and reduce panic.",
      "img_url": "https://plus.unsplash.com/premium_photo-1666283137079-aa77f01e8fca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JvdW5kaW5nJTIwZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "312",
      "title": "Laugh More",
      "description": "Engage in activities that bring joy and lighten your mood.",
      "img_url": "https://media.istockphoto.com/id/1447873870/photo/group-of-indian-senior-people-wearing-white-cloths-relaxing-and-laughing-together-outdoor-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=YZNvDDoWh9S0VGkX308BBUtcKQoWtTwM3HZSuVazfSQ="
    }
  ],
  "Obsessive-Compulsive Disorder (OCD)": [
    {
      "id": "40",
      "title": "Cognitive Behavioral Therapy (CBT) Exercise",
      "description": "Practice an exposure and response prevention (ERP) exercise to challenge obsessive thoughts.",
      "img_url": "https://plus.unsplash.com/premium_photo-1681911704030-e9f4fdf8f05a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29nbml0aXZlJTIwQmVoYXZpb3JhbCUyMFRoZXJhcHklMjAoQ0JUKSUyMEV4ZXJjaXNlfGVufDB8fDB8fHww"
    },
    {
      "id": "41",
      "title": "Mindfulness Meditation",
      "description": "Engage in a guided mindfulness meditation to stay present and reduce compulsive behaviors.",
      "img_url": "https://images.unsplash.com/photo-1592895792095-85fa785192a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbmRmdWxuZXNzJTIwbWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": "42",
      "title": "Journaling",
      "description": "Write down your intrusive thoughts and analyze them rationally.",
      "img_url": "https://plus.unsplash.com/premium_photo-1706552574221-4a0a64addcbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am91cm5hbGxpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "43",
      "title": "Deep Breathing Exercise",
      "description": "Practice deep breathing techniques to manage stress and anxiety.",
      "img_url": "https://media.istockphoto.com/id/1176660377/photo/young-woman-doing-breathing-exercise.webp?a=1&b=1&s=612x612&w=0&k=20&c=_H4EfWtwHerQI53cq-gRgl6rKf_pY2eqI1YqjSBaexg="
    },
    {
      "id": "44",
      "title": "Distraction Technique",
      "description": "Engage in an activity like reading or solving a puzzle to divert attention from compulsions.",
      "img_url": "https://images.unsplash.com/photo-1553729784-e91953dec042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
  "Autism Spectrum Disorder (ASD)":
    [
      {
        "id": "50",
        "title": "Sensory Play",
        "description": "Engage in activities like playing with textured objects, water beads, or kinetic sand to improve sensory processing.",
        "img_url": "https://media.istockphoto.com/id/1365116579/photo/womens-hands-press-on-a-silicone-rainbow-antistress-toy-in-the-shape-of-a-heart-and-other.webp?a=1&b=1&s=612x612&w=0&k=20&c=nlc1tavSyG1YgpYNuKoXOg1B3DEAPTNOAFyfvGPoFro="
      },
      {
        "id": "51",
        "title": "Social Stories",
        "description": "Read or create social stories to help understand different social situations and responses.",
        "img_url": "https://images.unsplash.com/photo-1647529734891-b1d1d2b93bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwc3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        "id": "52",
        "title": "Emotion Recognition Game",
        "description": "Use flashcards or apps to recognize and express different emotions effectively.",
        "img_url": "https://plus.unsplash.com/premium_photo-1739107848676-46d472e4a1f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1vdGlvbiUyMHJlY29nbml0aW9uJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        "id": "53",
        "title": "Physical Activities",
        "description": "Participate in activities like yoga, jumping on a trampoline, or swimming to improve motor skills and coordination.",
        "img_url": "https://images.unsplash.com/photo-1612985838143-47ffc9b76532?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhbXBvbGluZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        "id": "54",
        "title": "Visual Schedule",
        "description": "Use a visual schedule with pictures or symbols to structure daily routines and reduce anxiety.",
        "img_url": "https://images.unsplash.com/photo-1676276375900-dd41f828c985?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmlzdWFsJTIwU2NoZWR1bGUlNUN8ZW58MHx8MHx8fDA%3D"
      },
      {
        "id": "55",
        "title": "Music Therapy",
        "description": "Listen to calming music or play simple instruments to enhance focus and emotional regulation.",
        "img_url": "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjB0aGVyYXB5fGVufDB8fDB8fHww"
      },
      {
        "id": "56",
        "title": "Art Therapy",
        "description": "Use drawing, painting, or coloring to express emotions and develop creativity.",
        "img_url": "https://plus.unsplash.com/premium_photo-1681494294358-a48f57c7e4f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0JTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        "id": "57",
        "title": "Turn-Taking Games",
        "description": "Play board games or interactive activities that encourage patience and social skills.",
        "img_url": "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hcmQlMjBnYW1lc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        "id": "58",
        "title": "Storytelling and Role-Playing",
        "description": "Engage in storytelling or role-playing to improve communication and imaginative skills.",
        "img_url": "https://plus.unsplash.com/premium_photo-1664268415647-fc5f53e8d0b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHN0b3J5dGVsbGluZyUyMGFuZCUyMHJvbGUlMjBwbGF5aW5nfGVufDB8fDB8fHww"
      },
      {
        "id": "59",
        "title": "Handwriting and Fine Motor Exercises",
        "description": "Practice tracing letters, cutting paper, or using tweezers to enhance fine motor skills.",
        "img_url": "https://images.unsplash.com/photo-1710447503692-8364152e431c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEhhbmR3cml0aW5nJTIwYW5kJTIwRmluZSUyME1vdG9yJTIwRXhlcmNpc2VzfGVufDB8fDB8fHww"
      }
    ]

}

export default activities;