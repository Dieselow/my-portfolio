import {Component, useState} from "react";
import Image from 'next/image'
import ClassModal from "@components/ClassModal";

export default class ClassesList extends Component {
    state = {
        showModal: false,
        classTitle: "",
        classImages: [],
        classImagesDirectory: ""
    }

    toggleModal = (className: String, imagesDirectory: String, images: Array<String>) => {
        this.setState({showModal: !this.state.showModal, classTitle: className, classImages: images, classImagesDirectory: imagesDirectory });
    }

    render() {
        return (
            <>
                <ClassModal isOpen={this.state.showModal}
                            toggle={this.toggleModal}
                            classTitle ={this.state.classTitle}
                            classImages={this.state.classImages}
                            classImagesDirectory={this.state.classImagesDirectory}
                />
                <div className="focus:outline-none">
                    <div className="mx-auto container pb-8 mt-12">
                        <div className="flex flex-wrap items-center lg:justify-between justify-center">
                            <div tabIndex={0} className="focus:outline-none mx-2 w-72 h-[30rem] xl:mb-0 mb-8 card content-center" onClick={() => this.toggleModal("Programmation de plateforme Mobile","MeetInn",["login.png","Register.png","Partner.png","reserve1.png","reserve2.png"])}>
                                <div>
                                    <Image alt="Google Android logo"
                                           src="/images/classes/android.png"
                                           tabIndex={0}
                                           width="300px" height="200px"
                                           className="focus:outline-none w-full h-44 object-contain"/>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-start px-4 pt-4">

                                        <div className="bg-green-500 py-1.5 px-6 rounded-full">
                                            <p tabIndex={0}
                                               className="focus:outline-none text-xs text-white">Android</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold">Mobile Plateforms Programming</h2>
                                            <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 pl-5">2022</p>
                                        </div>
                                        <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 mt-2">Class focused on learning Mobile Programming on Android with use of Kotlin</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Mobile Programming</p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Kotlin</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xs font-semibold">Université du Québec à Chicoutimi, QC, Canada.</h2>
                                            <h3 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xl font-semibold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex={0} className="focus:outline-none mx-2 w-72 h-[30rem] xl:mb-0 mb-8 card"  onClick={() =>this.toggleModal("Advanced Software development","MeetInn",["login.png","Register.png","Partner.png","reserve1.png","reserve2.png"])}>
                                <div>
                                    <Image alt="Software Design and Architecture Stack chart"
                                           src="/images/classes/patterns.png"
                                           tabIndex={0}
                                           width="300px" height="200px"
                                           className="focus:outline-none w-full h-44 object-contain"/>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                            <p tabIndex={0}
                                               className="focus:outline-none text-xs text-yellow-700">Software</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold">Advanced Software development</h2>
                                            <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 pl-5">2022</p>
                                        </div>
                                        <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 mt-2">Learning how to use design patterns and conception models for software development</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">SOLID
                                                </p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">AOP</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xs font-semibold">Université du Québec à Chicoutimi, QC, Canada.</h2>
                                            <h3 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xl font-semibold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex={0} className="focus:outline-none mx-2 w-72 h-[30rem] xl:mb-0 mb-8 card"  onClick={() =>this.toggleModal("Programmation de plateforme Mobile","MeetInn",["login.png","Register.png","Partner.png","reserve1.png","reserve2.png"])}>
                                <div>
                                    <Image alt="Project Management art image"
                                           src="/images/classes/project management.jpeg"
                                           tabIndex={0}
                                           className="focus:outline-none w-full h-44 "
                                           width="300px" height="200px"/>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                            <p tabIndex={0}
                                               className="focus:outline-none text-xs text-yellow-700">Management</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold">Project Management</h2>
                                            <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 pl-5">2022</p>
                                        </div>
                                        <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 mt-2">Class that focus on how to manage a project from the very first step with receiving an offer to the last with project outcome and how to maintain relationship with the client</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Microsoft Project</p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Agile Management</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xs font-semibold">Université du Québec à Chicoutimi, QC, Canada.</h2>
                                            <h3 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xl font-semibold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex={0} className="focus:outline-none mx-2 w-72 h-[30rem] xl:mb-0 mb-8 card"  onClick={() =>this.toggleModal("Programmation de plateforme Mobile","MeetInn",["login.png","Register.png","Partner.png","reserve1.png","reserve2.png"])}>
                                <div>
                                    <Image alt="girl texting"
                                           src="/images/classes/enterprise-architecture.jpeg"
                                           className="focus:outline-none w-full h-44 object-contain"
                                           width="300px" height="200px"/>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                            <p tabIndex={0}
                                               className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold">Company Application Architecture</h2>
                                            <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 pl-5">2021</p>
                                        </div>
                                        <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 mt-2">The
                                            Apple
                                            iPhone XS is available in 3 colors with 64GB memory. Shoot amazing
                                            videos</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12
                                                    months warranty</p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete
                                                    box</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xs font-semibold">Université du Québec à Chicoutimi, QC, Canada.</h2>
                                            <h3 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xl font-semibold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
                            <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 h-[30rem] mb-8 card"  onClick={() =>this.toggleModal("Programmation de plateforme Mobile","MeetInn",["login.png","Register.png","Partner.png","reserve1.png","reserve2.png"])}>
                                <div>
                                    <Image alt="Apple Swift Logo"
                                           src="/images/classes/swift.png"
                                           tabIndex={0}
                                           className="focus:outline-none w-full h-44"
                                           width="300px" height="200px"/>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div className="bg-blue-400 py-1.5 px-6 rounded-full">
                                            <p tabIndex={0}
                                               className="focus:outline-none text-xs text-white">IOS</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold">IOS Development in Swift</h2>
                                            <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 pl-5">2021</p>
                                        </div>
                                        <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 mt-2">The
                                            Apple
                                            iPhone XS is available in 3 colors with 64GB memory. Shoot amazing
                                            videos</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12
                                                    months warranty</p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete
                                                    box</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay
                                                Area, San Francisco</h2>
                                            <h3 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xl font-semibold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 card"  onClick={() =>this.toggleModal("Programmation de plateforme Mobile","MeetInn",["login.png","Register.png","Partner.png","reserve1.png","reserve2.png"])}>
                                <div>
                                    <Image alt="girl texting"
                                           src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                                           className="focus:outline-none w-full h-44"
                                           width="300px" height="200px"/>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" tabIndex={0}
                                                 className="focus:outline-none" width="20" height="20"
                                                 viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"/>
                                            </svg>
                                        </div>
                                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                            <p tabIndex={0}
                                               className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold">iphone
                                                XS</h2>
                                            <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 pl-5">4
                                                days
                                                ago</p>
                                        </div>
                                        <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 mt-2">The
                                            Apple
                                            iPhone XS is available in 3 colors with 64GB memory. Shoot amazing
                                            videos</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12
                                                    months warranty</p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete
                                                    box</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay
                                                Area, San Francisco</h2>
                                            <h3 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xl font-semibold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 card"  onClick={() =>this.toggleModal("Programmation de plateforme Mobile","MeetInn",["login.png","Register.png","Partner.png","reserve1.png","reserve2.png"])}>
                                <div>
                                    <Image alt="girl texting"
                                           src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                                           className="focus:outline-none w-full h-44"
                                           width="300px" height="200px"/>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" tabIndex={0}
                                                 className="focus:outline-none" width="20" height="20"
                                                 viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"/>
                                            </svg>
                                        </div>
                                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                            <p tabIndex={0}
                                               className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold">iphone
                                                XS</h2>
                                            <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 pl-5">4
                                                days
                                                ago</p>
                                        </div>
                                        <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 mt-2">The
                                            Apple
                                            iPhone XS is available in 3 colors with 64GB memory. Shoot amazing
                                            videos</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12
                                                    months warranty</p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete
                                                    box</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay
                                                Area, San Francisco</h2>
                                            <h3 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xl font-semibold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 card"  onClick={() =>this.toggleModal("Programmation de plateforme Mobile","MeetInn",["login.png","Register.png","Partner.png","reserve1.png","reserve2.png"])}>
                                <div>
                                    <Image alt="girl texting"
                                           src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                                           className="focus:outline-none w-full h-44"
                                           width="300px" height="200px"/>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" tabIndex={0}
                                                 className="focus:outline-none" width="20" height="20"
                                                 viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"/>
                                            </svg>
                                        </div>
                                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                            <p tabIndex={0}
                                               className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold">iphone
                                                XS</h2>
                                            <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 pl-5">4
                                                days
                                                ago</p>
                                        </div>
                                        <p tabIndex={0} className="focus:outline-none text-xs text-gray-600 mt-2">The
                                            Apple
                                            iPhone XS is available in 3 colors with 64GB memory. Shoot amazing
                                            videos</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12
                                                    months warranty</p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabIndex={0}
                                                   className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete
                                                    box</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay
                                                Area, San Francisco</h2>
                                            <h3 tabIndex={0}
                                                className="focus:outline-none text-indigo-700 text-xl font-semibold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
