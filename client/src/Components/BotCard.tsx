"use client";

import { ModelChat } from "./ModelChat";

// image
import bot from "../Images/chatbot.jpg";


export function BotCard() {
  return (
    <div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
              src={bot}
              alt=""
            />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
              Download our free mobile app
            </h2>

            <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              corporis esse dolorum, illum, consectetur earum provident alias
              dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam
              fugiat consequuntur nostrum odio.
            </p>

<div className="mt-9">
            <ModelChat></ModelChat>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
