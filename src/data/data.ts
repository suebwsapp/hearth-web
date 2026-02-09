import React from "react";
import IconHeart from "@/assets/icons/heart";
import IconSparkles from "@/assets/icons/sparkles";
import IconShield from "@/assets/icons/shield";
import IconMessageCircle from "@/assets/icons/message-circle";
import IconStar from "@/assets/icons/star";
import IconUserPlus from "@/assets/icons/user-plus";
import IconSmartphone from "@/assets/icons/smartphone";
import IconTrendingUp from "@/assets/icons/trending-up";
import IconZap from "@/assets/icons/zap";

export const features = [
  { icon: React.createElement(IconHeart, { className: "w-6 h-6" }), titleKey: "landing.features.shared_memories_title", descriptionKey: "landing.features.shared_memories_desc" },
  { icon: React.createElement(IconSparkles, { className: "w-6 h-6" }), titleKey: "landing.features.daily_prompts_title", descriptionKey: "landing.features.daily_prompts_desc" },
  { icon: React.createElement(IconMessageCircle, { className: "w-6 h-6" }), titleKey: "landing.features.private_chat_title", descriptionKey: "landing.features.private_chat_desc" },
  { icon: React.createElement(IconStar, { className: "w-6 h-6" }), titleKey: "landing.features.appreciation_title", descriptionKey: "landing.features.appreciation_desc" },
  { icon: React.createElement(IconZap, { className: "w-6 h-6" }), titleKey: "landing.features.streaks_title", descriptionKey: "landing.features.streaks_desc" },
  { icon: React.createElement(IconShield, { className: "w-6 h-6" }), titleKey: "landing.features.privacy_first_title", descriptionKey: "landing.features.privacy_first_desc" },
];

export const steps = [
  { icon: React.createElement(IconUserPlus, { className: "w-6 h-6" }), titleKey: "landing.how_it_works.step_1_title", descriptionKey: "landing.how_it_works.step_1_desc" },
  { icon: React.createElement(IconSmartphone, { className: "w-6 h-6" }), titleKey: "landing.how_it_works.step_2_title", descriptionKey: "landing.how_it_works.step_2_desc" },
  { icon: React.createElement(IconTrendingUp, { className: "w-6 h-6" }), titleKey: "landing.how_it_works.step_3_title", descriptionKey: "landing.how_it_works.step_3_desc" },
];

export const testimonials = [
  { quoteKey: "landing.testimonials.quote_1", authorKey: "landing.testimonials.author_1", yearsKey: "landing.testimonials.years_1", image: "https://images.unsplash.com/photo-1611619827107-ff5b4b4aea23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwb3J0cmFpdCUyMHNtaWxpbmclMjBoYXBweXxlbnwxfHx8fDE3NzAzMDUwNDJ8MA&ixlib=rb-4.1.0&q=80&w=200", locationKey: "landing.testimonials.location_1" },
  { quoteKey: "landing.testimonials.quote_2", authorKey: "landing.testimonials.author_2", yearsKey: "landing.testimonials.years_2", image: "https://images.unsplash.com/photo-1656797050133-9376c800723e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY291cGxlJTIwc21pbGluZyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcwMzA1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=200", locationKey: "landing.testimonials.location_2" },
  { quoteKey: "landing.testimonials.quote_3", authorKey: "landing.testimonials.author_3", yearsKey: "landing.testimonials.years_3", image: "https://images.unsplash.com/photo-1758522490885-75bd134d48a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzZWxmaWUlMjBhdXRoZW50aWN8ZW58MXx8fHwxNzcwMzA1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=200", locationKey: "landing.testimonials.location_3" },
];

export const faqs = [
  { questionKey: "landing.faq.q1_question", answerKey: "landing.faq.q1_answer" },
  { questionKey: "landing.faq.q2_question", answerKey: "landing.faq.q2_answer" },
  { questionKey: "landing.faq.q3_question", answerKey: "landing.faq.q3_answer" },
  { questionKey: "landing.faq.q4_question", answerKey: "landing.faq.q4_answer" },
];
