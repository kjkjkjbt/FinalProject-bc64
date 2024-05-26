import React from 'react'
import { RiGlobalLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";

export default function footer() {
    return (
        <div className="flex flex-col px-6 py-6 border-t bg-gray-100 mt-6">
            <div className="flex flex-col mb-6 md:flex-row md:mb-0">
                <div className="border-b pb-6 mb-6 md:w-1/4">
                    <h3 className="font-medium">Supports </h3>
                    <ul className="space-y-2 mt-2">
                        <li className="hover:underline duration-500">
                            <a href="/">Helping center</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">AirCover</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Support </a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Cancel Policy</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">
                            Our response to the COVID-19 pandemic
                            </a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Neighbourhood's Report </a>
                        </li>
                    </ul>
                </div>
                <div className="border-b pb-6 mb-6 md:w-1/4">
                    <h3 className="font-medium">Communicate</h3>
                    <ul className="space-y-2 mt-2">
                        <li className="hover:underline duration-500">
                            <a href="/"></a>Airbnb.org: helping
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/"></a>Anti-discrimination
                        </li>
                    </ul>
                </div>
                <div className="border-b pb-6 mb-6 md:w-1/4">
                    <h3 className="font-medium">Greetings </h3>
                    <ul className="space-y-2 mt-2">
                        <li className="hover:underline duration-500">
                            <a href="/">Renting housing on Airbnb</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Housing for rent on Airbnb</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">View hosting resources</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Visit the community forum</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Responsibility </a>
                        </li>
                    </ul>
                </div>
                <div className="border-b pb-6 md:w-1/4 md:mb-6">
                    <h3 className="font-medium">Airbnb</h3>
                    <ul className="space-y-2 mt-2">
                        <li className="hover:underline duration-500">
                            <a href="/"> News </a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Learn about new features</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">letter from the founders</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Career opportunities</a>
                        </li>
                        <li className="hover:underline duration-500">
                            <a href="/">Investors</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="font-medium md:flex md:justify-between">
                <div className="flex flex-col md:flex-row">
                    <div className="flex mb-2">
                        <span>&#169; 2024 Airbnb, Inc</span>
                    </div>
                    <div className="lg:ml-2">
                        <ol className="space-y-2 md:flex md:space-y-0 lg:space-x-2">
                            <li className="flex space-x-2 hover:underline duration-500">
                                <span>.</span>
                                <a href="/">Privacy</a>
                            </li>
                            <li className="flex space-x-2 hover:underline duration-500">
                                <span>.</span>
                                <a href="/">Rules</a>
                            </li>
                            <li className="flex space-x-2 hover:underline duration-500">
                                <span>.</span>
                                <a href="/">Site map</a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="space-y-2 mt-2 md:flex md:space-y-0 md:mt-0 lg:space-x-6">
                    <div>
                        <button className="flex items-center space-x-2 hover:underline duration-500 md:space-x-0 lg:space-x-2">
                            <span>
                                <RiGlobalLine />
                            </span>
                            <span>English (Eng)</span>
                        </button>
                    </div>
                    <div>
                        <button className="flex items-center space-x-2 hover:underline duration-500 md:space-x-0 lg:space-x-2">
                            <span>
                                <BsCurrencyDollar />
                            </span>
                            <span>USD</span>
                        </button>
                    </div>
                    <div>
                        <button className="flex items-center space-x-2 hover:underline duration-500 md:space-x-0 lg:space-x-2">
                            <span>Resource support</span>
                            <span>
                                <IoIosArrowUp />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

