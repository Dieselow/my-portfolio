import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import ImageSlider from "@components/ImageSlider";
import Config from "config.json"

interface classConfig {
    description: String
    points: Array<String>
}

interface ClassModal {
    isOpen: boolean
    toggle: Function
    classTitle: string
    classImages: Array<String>
    classImagesDirectory: String
}

export default function ClassModal(props: ClassModal) {
    let classConfig: classConfig;

    function find(obj: object, key: string): classConfig[] {
        const ret: classConfig[] = [];
        JSON.stringify(obj, (_, nested) => {
            if (nested && nested[key]) {
                ret.push(nested[key]);
            }
            return nested;
        });
        return ret;
    }

    function Slider() {
        if (props.isOpen) {
            console.log(classConfig)
            return <ImageSlider projectDirectory={props.classImagesDirectory} projectImages={props.classImages}/>
        }
        return null;
    }

    function ClassConfig() {
        if (props.isOpen) {
            let listItems = [];
            classConfig = find(Config, props.classTitle)[0];
            for (let i=0;i< classConfig.points.length;i++){
                listItems.push(<li>{classConfig.points[i]}</li>)
            }
            return (<p className="text-sm pl-2 text-gray-500">
                {classConfig.description}
                <ul className={"list-disc"}>
                    <br/>
                    {listItems}
                </ul>
            </p>)
        }
        return null;
    }

    return (
        <>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => props.toggle("", "", "")}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 modal-project"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {props.classTitle}
                                </Dialog.Title>
                                <div className="mt-2 flex">
                                    <div className="h-full w-full object-contain">
                                        <Slider/>
                                    </div>
                                    <ClassConfig/>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={() => props.toggle("", "", "")}
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
