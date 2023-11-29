'use client'

import {CarCardProps} from "@/types";
import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from "react";
import Image from "next/image";

interface carDetail {
    opened: boolean,
    closeModal: () => void,
    car: CarCardProps
    // need to add car props in a separate file
}

const CarDetails = ({opened, closeModal, car}: carDetail) => {
    return (
        <>
            <Transition appear show={opened} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className=" relative z-20">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
                                      enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100"
                                      leaveTo="opacity-0">
                        <div className="fixed inset-0 z-20 bg-black-100 bg-opacity-30"/>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-5">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95"
                                              enterTo="opacity-100 scale-100" leave="ease-in duration-200"
                                              leaveFrom="opacity-100 scale-100"
                                              leaveTo="opacity-0 scale-95">
                                <Dialog.Panel
                                    className="w-full max-w-lg relative overflow-y-auto rounded-xl bg-white max-h-[95vh] p-6 transform transition-all text-left flex flex-col gap-6">
                                    <button type="button" onClick={closeModal}
                                            className="absolute top-2 z-40 right-3 w-fit p-2 bg-primary-blue-100 rounded-full">
                                        <Image src="/close.svg" alt="Close" width={20} height={20}
                                               className="object-contain cursor-pointer"/></button>
                                  <div className="flex-1 flex flex-col gap-4">
                                      <div className="relative w-full bg-cover h-44 bg-center bg-pattern rounded-lg">
                                          <Image src="/hero.png" alt="Cars" className="object-contain" fill priority/>
                                      </div>
                                      <div className="flex gap-4">
                                          <div className="flex-1 w-full relative rounded-lg bg-primary-blue-100 h-20">
                                              <Image src="/hero.png" alt="Cars" className="object-contain" fill priority/>
                                          </div>
                                          <div className="flex-1 w-full relative rounded-lg bg-primary-blue-100 h-20">
                                              <Image src="/hero.png" alt="Cars" className="object-contain" fill priority/>
                                          </div>
                                          <div className="flex-1 w-full rounded-lg relative bg-primary-blue-100 h-20">
                                              <Image src="/hero.png" alt="Cars" className="object-contain" fill priority/>
                                          </div>
                                      </div>
                                      <div className="flex flex-col">
                                          <h1 className="font-bold text-2xl pt-6 text-left text-black capitalize">{car.make} {car.model}</h1>
                                          <div className="flex flex-col gap-4 mt-5 flex-wrap">
                                              {Object.entries(car).map(([key, value]) => (
                                                  <div key={key} className="flex w-full justify-between items-center">
                                                    <h4 className="text-lg">{key}</h4>
                                                    <span>{value}</span>
                                                  </div>
                                              ))}
                                          </div>
                                      </div>
                                  </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CarDetails;