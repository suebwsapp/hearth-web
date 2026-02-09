import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { testimonials } from "@/data/data";
import IconHeart from "@/assets/icons/heart";
import IconStar from "@/assets/icons/star";
import IconCheck from "@/assets/icons/check";
import { getDefaultMessage } from "@/utils/defaultMessages";
import { AnimateInView } from "@/components/AnimateInView";

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0F0A1E]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E]/95 via-[#0F0A1E]/80 to-[#0F0A1E]/95 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1651249098113-6b6c64c14a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHNpbGhvdWV0dGUlMjBuaWdodCUyMHNreSUyMHB1cnBsZXxlbnwxfHx8fDE3NzAzMDUyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          className="w-full h-full object-cover opacity-60"
          alt=""
          role="presentation"
          width={1080}
          height={720}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimateInView className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
            <IconHeart className="w-4 h-4 text-pink-400" fill />
            <span>{t("landing.testimonials.badge", "Loved by 50,000+ couples")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground tracking-tight">
            {t("landing.testimonials.section_title", "Love stories from our community")}
          </h2>
          <p className="text-body text-muted max-w-2xl mx-auto">
            {t(
              "landing.testimonials.section_subtitle",
              "Discover how Hearth is helping couples around the world build deeper, more meaningful connections.",
            )}
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimateInView
              key={i}
              className="flex flex-col"
              delay={i * 100}
            >
            <div className="bg-white/5 backdrop-blur-md min-w-80 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col flex-1">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <IconStar
                    key={star}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                    fill
                  />
                ))}
              </div>

              <blockquote className="type-heading-4 leading-relaxed mb-8 flex-1 text-primary-foreground font-medium">
                &quot;{t(testimonial.quoteKey, getDefaultMessage(testimonial.quoteKey))}&quot;
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white/10">
                  <img
                    src={testimonial.image}
                    alt={t(testimonial.authorKey, getDefaultMessage(testimonial.authorKey))}
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="type-body font-bold text-primary-foreground">
                      {t(testimonial.authorKey, getDefaultMessage(testimonial.authorKey))}
                    </p>
                    <div className="bg-blue-500/20 p-0.5 rounded-full">
                      <IconCheck className="w-3 h-3 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-200/70">
                    <span>
                      {t(testimonial.locationKey, getDefaultMessage(testimonial.locationKey))}
                    </span>
                    <span className="opacity-50">•</span>
                    <span>
                      {t(testimonial.yearsKey, getDefaultMessage(testimonial.yearsKey))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
