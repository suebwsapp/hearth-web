import React from "react";
import IconBell from "@/assets/icons/bell";
import IconSparkles from "@/assets/icons/sparkles";
import IconHeart from "@/assets/icons/heart";
import IconCalendar from "@/assets/icons/calendar";
import IconArrowRight from "@/assets/icons/arrow-right";
import IconMessageCircle from "@/assets/icons/message-circle";

export default function AppMockup() {
  const colors = {
    primary: "#9b59b6",
    accent: "#85c1e2",
  };
  return (
    <div
      className="flex-1 w-full relative flex items-center justify-center animate-fade-in-scale"
    >
      <div className="relative md:w-[300px] h-[620px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-white overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-all duration-500">
        <div className="absolute top-0 left-0 right-0 h-28 pt-10 pb-4 px-6 flex justify-between items-center bg-white z-10 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzAyMTExOTd8MA&ixlib=rb-4.1.0&q=80&w=64"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs text-gray-600 font-medium">Good morning,</div>
              <div className="text-sm font-bold text-gray-800">Sarah</div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
            <IconBell className="w-5 h-5" />
          </div>
        </div>

        <div className="pt-32 px-5 pb-8 h-full overflow-hidden bg-gray-50 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Today</h2>
              <p className="text-xs text-gray-500">Wednesday, Feb 14</p>
            </div>
            <div className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
              <span className="text-sm">🔥</span> 12 Days
            </div>
          </div>

          <div className="w-full p-5 rounded-2xl bg-white shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500"></div>
            <div className="flex items-center gap-2 mb-3">
              <IconSparkles className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-bold text-purple-500 uppercase tracking-wide">
                Daily Question
              </span>
            </div>
            <p className="text-gray-800 font-medium text-lg leading-snug mb-4">
              &quot;What&apos;s one small thing I did recently that made you smile?&quot;
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzAyMTExOTd8MA&ixlib=rb-4.1.0&q=80&w=64"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600 z-10">
                  You
                </div>
              </div>
              <span className="text-xs text-purple-600 font-medium cursor-pointer">
                Tap to answer →
              </span>
            </div>
          </div>

          <div className="w-full rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
            <div className="h-40 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1743516465188-6eee2aa0828d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwaWNuaWMlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NzAzMDIzNTV8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Couple at a picnic in the park"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full text-white text-[10px] font-medium flex items-center gap-1">
                <IconHeart className="w-3 h-3 fill-white text-white" fill /> 12
              </div>
            </div>
            <div className="p-4 flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  Picnic at the Park
                </h4>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <IconCalendar className="w-3 h-3" /> 2 years ago
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <IconArrowRight className="w-4 h-4 text-gray-500" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex items-start justify-around px-4 pt-4 z-20">
          <div className="flex flex-col items-center gap-1 text-purple-600">
            <div className="p-1 rounded-xl bg-purple-50">
              <IconHeart className="w-6 h-6 fill-current" fill />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-300">
            <div className="p-1">
              <IconSparkles className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-300">
            <div className="p-1">
              <IconMessageCircle className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30"></div>
      </div>

      <div
        className="absolute -top-12 -right-12 w-80 h-80 rounded-full blur-3xl opacity-20 -z-10"
        style={{ backgroundColor: colors.accent }}
      />
      <div
        className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full blur-3xl opacity-20 -z-10"
        style={{ backgroundColor: colors.primary }}
      />
    </div>
  );
}
