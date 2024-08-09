"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { DialogHeader } from "@node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import { useRouter } from "next/navigation";
import Button from "@components/button/Button";

export default function ReviewModal({
  isOpen = true,
  title = "",
  showbtn = false,
  review = null,
  eventId = null,
  showclose = false,
  close = () => {},
}) {
  const router = useRouter();
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => close()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[720px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogHeader
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  <div>View Feedback</div>
                  <div className={"text-2xl"} onClick={close}>
                    x
                  </div>
                </DialogHeader>
                <div>
                  <div className={"text-sm p-4 "}>
                    <div className={"flex justify-between"}>
                      <div>
                        <div className={"text-[#A3A3A3]"}>Event</div>
                        <div>JKT 48 11th Anniversary Concert</div>
                      </div>
                    </div>
                    {review &&
                      review.map((answer) => {
                        return (
                          <div className={"my-4"}>
                            <div className={"text-[#A3A3A3]"}>
                              {answer.question}
                            </div>
                            <div>{answer.answer}</div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  {showclose && (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={close}
                    >
                      Close
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
