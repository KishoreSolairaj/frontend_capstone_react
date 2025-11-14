import React ,{useEffect,useState}from 'react'

import "./Services.css";
import { Link } from 'react-router-dom';

const demoData = [
    {
        imageSrc: 'https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?size=626&ext=jpg',
        title: 'Instant Consultation',
    },
    {
        imageSrc: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=626&ext=jpg',
        title: 'Book an appointment',
    },
    {
        imageSrc: 'https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?size=626&ext=jpg',
        title: 'Find a doctor',
    },
    {
        imageSrc: 'https://img.freepik.com/free-vector/hospital-service-concept-flat-illustration_1150-50287.jpg?size=626&ext=jpg',
        title: 'Health tips and guidance',
    },
]
const healthQuotes = [
    "Health is a state of complete harmony of the body, mind, and spirit.",
    "The greatest wealth is health.",
    "Take care of your body; it's the only place you have to live.",
    "A healthy outside starts from the inside.",
    "Good health is not something we can buy. However, it can be an extremely valuable savings account.",
    "The groundwork for all happiness is good health.",
    "To keep the body in good health is a duty... otherwise, we shall not be able to keep the mind strong and clear.",
    "Invest in your health. It's the best investment you can make.",
    "Your body will be around a lot longer than that expensive handbag.",
    "Healthy is an outfit that looks different on everybody.",
    "An apple a day keeps the doctor away.",
    "Health is like money; we never have a true idea of its value until we lose it.",
    "Health is not about the weight you lose but about the life you gain.",
    "The first wealth is health.",
    "Physical fitness is the first requisite of happiness.",
    "Happiness is the highest form of health.",
    "To enjoy the glow of good health, you must exercise.",
    "Eat right, exercise regularly, die anyway.",
    "A healthy outside starts from the inside.",
    "The human body is the best work of art.",
    "When the heart is at ease, the body is healthy.",
    "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison.",
    "Your body is a temple, but only if you treat it as one.",
    "The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not.",
    "A healthy lifestyle not only changes your body; it changes your mind, your attitude, and your mood.",
    "He who takes medicine and neglects to diet wastes the skill of his doctors.",
    "Don't eat anything your great-great-grandmother wouldn't recognize as food.",
    "Health is not simply the absence of sickness.",
    "The best and most efficient pharmacy is within your own system.",
    "Wellness is the natural state of my body.",
    "The mind has great influence over the body, and maladies often have their origin there.",
    "The groundwork of all happiness is health.",
    "When you have your health, you have everything. When you do not have your health, nothing else matters at all.",
    "A healthy attitude is contagious but don't wait to catch it from others. Be a carrier.",
    "Love yourself enough to live a healthy lifestyle.",
    "Your health is what you make of it. Everything you do and think either adds to the vitality, energy, and spirit you possess or takes away from it.",
    "If you don't take care of your body, where will you live?",
    "The human body is the best picture of the human soul.",
    "A healthy life is a happy life.",
    "A healthy diet is a solution to many of our health-care problems. It's the most important solution.",
    "Walking is the best possible exercise. Habituate yourself to walk very far.",
    "A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned.",
    "Your health is an investment, not an expense.",
    "Your body hears everything your mind says.",
    "A healthy body is a platform for flourishing a healthy mind and soul.",
    "Take care of your body, it's the only place you have to live.",
    "Good health and good sense are two of life's greatest blessings.",
    "An ounce of prevention is worth a pound of cure.",
    "The greatest medicine of all is to teach people how not to need it.",
    "Health is not just about being physically fit, it's also about having a positive mental attitude.",
    "The greatest wealth is health.",
    "Healthy citizens are the greatest asset any country can have.",
    "A healthy lifestyle is a lifelong journey.",
    "Health is the crown on the well person's head that only the ill person can see.",
    "Investing in your health now will pay dividends in the future.",
    "A healthy body is a guest chamber for the soul.",
    "Good health is not something you can buy. It must be earned and maintained.",
    "Health is not valued till sickness comes.",
    "A healthy diet is not a short-term fix; it's a long-term investment.",
    "To keep the body in good health is a duty... otherwise, we shall not be able to keep the mind strong and clear.",
    "Your body is a reflection of your lifestyle.",
    "Prevention is better than cure.",
    "A healthy lifestyle is not just about what you eat. It's also about what you think and say.",
    "Take care of your body. It's the only place you have to live.",
    "Health is a state of complete physical, mental, and social well-being.",
    "A healthy outside starts from the inside.",
    "Your health is an investment, not an expense.",
    "The doctor of the future will no longer treat the human frame with drugs, but rather will cure and prevent disease with nutrition.",
    "Good health is not something we can buy. However, it can be an extremely valuable savings account.",
    "A healthy lifestyle is the best medicine.",
    "Wellness encompasses a healthy body, a sound mind, and a tranquil spirit.",
    "Your health is your wealth.",
    "A healthy lifestyle is not just about what you eat. It's also about what you think, say, and do.",
    "A healthy life is a happy life.",
    "Your health is your responsibility.",
    "A healthy lifestyle is a journey, not a destination.",
    "A healthy outside starts from the inside.",
    "Take care of your body, it's the only place you have to live.",
    "Your health is an investment, not an expense.",
    "Health is not simply the absence of sickness.",
    "The greatest wealth is health.",
    "To keep the body in good health is a duty... otherwise, we shall not be able to keep the mind strong and clear.",
    "Good health is not something we can buy. However, it can be an extremely valuable savings account.",
    "A healthy lifestyle not only changes your body; it changes your mind, your attitude, and your mood.",
    "Your body is a temple, but only if you treat it as one.",
    "A healthy lifestyle is the foundation of a happy life.",
    "Invest in your health. It's the best investment you can make.",
    "Your health is your most precious asset.",
    "A healthy mind in a healthy body.",
    "A healthy body is a platform for a healthy mind and soul.",
    "A healthy life begins with a healthy mindset.",
    "A healthy lifestyle is a choice that you make every day.",
    "Your body is a reflection of your lifestyle choices.",
    "The best project you'll ever work on is you.",
    "Your health is your wealth; invest in it wisely.",
    "A healthy lifestyle is a journey of self-discovery and self-improvement.",
   "A healthy body is a vehicle for a fulfilling life.",
    "A balanced diet is the key to a healthy body and mind.",
    "Your body is a masterpiece; treat it with love and respect.",
    "Health is not just about the absence of illness; it's about thriving and living your best life.",
    "Small steps towards a healthy lifestyle can lead to big changes in your overall well-being.",
    "Physical fitness is not only one of the most important keys to a healthy body, but it is also the basis of dynamic and creative intellectual activity.",
    "Nourish your body with good food, exercise, and positive thoughts.",
    "Wellness is not a destination, it's a lifelong journey.",
    "Your body is capable of amazing things; take care of it and it will take care of you.",
    "Your health is a reflection of your habits. Choose wisely.",
    "A healthy lifestyle is not about restriction; it's about making conscious choices that nourish your body and soul.",
    "Health is the foundation of a happy and fulfilling life.",
    "Physical activity is not just about getting in shape; it's about improving your quality of life.",
    "A healthy mind breeds a healthy body.",
    "Don't wait for a crisis to prioritize your health; make it a daily practice.",
    "Your body is a temple; honor it with healthy choices.",
    "Good health is the greatest gift you can give yourself and your loved ones.",
    "A healthy lifestyle is not about perfection; it's about progress and making better choices every day.",
    "Your health is your responsibility; no one can take care of it better than you.",
    "Make self-care a priority. Your well-being is worth it.",
    "A healthy lifestyle is not a punishment; it's a gift you give to yourself.",
    "Your body is your most valuable asset; invest in it wisely.",
    "Health is not just about the body; it's about nurturing your mind and soul as well.",
    "Choose foods that nourish your body and fuel your passions.",
    "Self-care is not selfish; it's essential for your well-being.",
    "A healthy lifestyle is a form of self-respect.",
    "Your health is an investment that pays dividends for a lifetime.",
    "Take time to rest and rejuvenate. Your body needs it.",
    "A healthy lifestyle is not about deprivation; it's about finding balance and enjoying life.",
    "Your body is a reflection of how you treat it. Choose kindness and love.",
    "Health is not a goal; it's a way of life.",
    "Take care of your body, and it will take care of you.",
    "Your health is the foundation of your happiness and success.",
    "A healthy lifestyle is a gift you give yourself every day.",
    "Don't wait for motivation; create healthy habits that become second nature.",
    "Your body is an instrument; keep it finely tuned.",
    "A healthy mind is as important as a healthy body. Nurture both.",
    "Your health is your wealth; invest in it wisely.",
    "A healthy lifestyle is a lifelong commitment to self-care.",
    "Choose progress over perfection in your journey to better health.",
    "Your body is capable of amazing things; believe in its power.",
    "A healthy lifestyle is not about restrictions; it's about abundance and nourishment.",
    "Make self-care a non-negotiable part of your daily routine.",
    "Your health is a reflection of your mindset. Cultivate positivity.",
    "Nourish your body with wholesome foods that fuel your vitality.",
    "Prioritize sleep as an essential component of your well-being.",
    "A healthy lifestyle is a gift you give to yourself"
]

const Services = () => {
    const [randomQuote, setRandomQuote] = useState('');

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * healthQuotes.length);
        setRandomQuote(healthQuotes[randomIndex]);
    };
    useEffect(() => {
        getRandomQuote(); // Initial quote
    
        const interval = setInterval(() => {
          getRandomQuote(); // Change quote every 24 hours
        }, 24 * 60 * 60 * 1000);
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, []);
    return (
        <div>
            <section class="services" id="services">
                <div class="section__container services__container">
                    <h2 class="section__title">Best Services</h2>
                    <p class="section__subtitle">
                    {randomQuote && <p>{randomQuote}
                    </p>}
                    </p>
                    <div class="services__grid">
                    {demoData.map((data, index) => (
                        <div className="services__card" key={index}>
                            <img src={data.imageSrc} alt="services" />
                            <div className="services__details">
                            {data.title === 'Book an appointment' ? (
                                <Link to="/search/doctors">
                                <p>{data.title}</p>
                                </Link>
                            ) : data.title === 'Instant Consultation' ? (
                                <Link to="/instant-consultation">
                                <p>{data.title}</p>
                                </Link>
                            ) : data.title === 'Find a doctor' ? (
                                <Link to="/find-doctor">
                                <p>{data.title}</p>
                                </Link>
                            ) : data.title === 'Health tips and guidance' ? (
                                <Link to="/healthblog">
                                <p>{data.title}</p>
                                </Link>
                            ) : (
                            <p>
                            {data.title}
                            </p>
                            )}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services