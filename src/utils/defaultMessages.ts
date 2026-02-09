/**
 * Default English messages for all translation keys.
 */
export const defaultMessages: Record<string, string> = {
  "landing.features.shared_memories_title": "Shared Memories",
  "landing.features.shared_memories_desc":
    "Build a beautiful, living timeline of your relationship's most precious photos and moments.",
  "landing.features.daily_prompts_title": "Daily Prompts",
  "landing.features.daily_prompts_desc":
    "Spark deep, meaningful conversations with a new thought-provoking question every single day.",
  "landing.features.private_chat_title": "Private Chat",
  "landing.features.private_chat_desc":
    "A secure, intimate space for your conversations, away from the noise of other social apps.",
  "landing.features.appreciation_title": "Appreciation & Praise",
  "landing.features.appreciation_desc":
    "Send virtual hugs, love notes, and stickers to show your partner they're appreciated.",
  "landing.features.streaks_title": "Streaks & Milestones",
  "landing.features.streaks_desc":
    "Track your relationship consistency and celebrate key anniversaries and milestones together.",
  "landing.features.privacy_first_title": "Privacy First",
  "landing.features.privacy_first_desc":
    "Your data is end-to-end encrypted and visible only to the two of you. Your digital sanctuary.",
  "landing.how_it_works.step_1_title": "1. Invite Partner",
  "landing.how_it_works.step_1_desc":
    "Sign up and send a unique invite link to your partner to connect your accounts.",
  "landing.how_it_works.step_2_title": "2. Daily Connection",
  "landing.how_it_works.step_2_desc":
    "Answer one fun or deep question every day to unlock your partner's answer.",
  "landing.how_it_works.step_3_title": "3. Grow Together",
  "landing.how_it_works.step_3_desc":
    "Watch your relationship deepen as you build a habit of appreciation and openness.",
  "landing.testimonials.quote_1":
    "Hearth changed how we communicate. The daily prompts spark conversations we wouldn't have otherwise. It feels like we're dating again.",
  "landing.testimonials.author_1": "Jessica & Mark",
  "landing.testimonials.years_1": "Together 3 years",
  "landing.testimonials.location_1": "San Francisco, CA",
  "landing.testimonials.quote_2":
    "I love the private timeline. It's like our own little social network, just for us, without the noise. The aesthetic is just beautiful.",
  "landing.testimonials.author_2": "Alex & Sam",
  "landing.testimonials.years_2": "Married 5 years",
  "landing.testimonials.location_2": "London, UK",
  "landing.testimonials.quote_3":
    "The best investment we've made for our relationship this year. It keeps us connected despite our busy schedules.",
  "landing.testimonials.author_3": "Taylor & Jordan",
  "landing.testimonials.years_3": "Together 1 year",
  "landing.testimonials.location_3": "Austin, TX",
  "landing.faq.q1_question": "Is Hearth free to use?",
  "landing.faq.q1_answer":
    "Yes! Hearth has a generous free tier that includes daily questions and basic memory sharing. Hearth Premium unlocks unlimited memories, advanced insights, and more.",
  "landing.faq.q2_question": "Can I use Hearth for a long-distance relationship?",
  "landing.faq.q2_answer":
    "Absolutely. Hearth is designed to bridge the gap between couples, whether you're in the same room or thousands of miles apart.",
  "landing.faq.q3_question": "Is my data private?",
  "landing.faq.q3_answer":
    "Privacy is our top priority. Your conversations and photos are encrypted and only accessible by you and your partner. We do not sell your data.",
  "landing.faq.q4_question": "What if we break up? (Sad, but practical)",
  "landing.faq.q4_answer":
    "You can easily export your data or delete your account permanently. Your data belongs to you.",
};

export function getDefaultMessage(key: string): string {
  return defaultMessages[key] ?? key;
}
