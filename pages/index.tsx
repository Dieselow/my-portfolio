import {Navbar} from "@components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main>
                <div className='h-[100vh] flex flex-col justify-center align-middle text-center'>
                    <h1 className='fade-in-text  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 font-extrabold'>
                        Bonjour
                    </h1>
                    <h3>(Hello)</h3>
                    <h2 className='text-2xl max-w-md mx-auto'>
                        Welcome to my online portfolio !
                        <br/> My name is Louis Dumont, I&apos;m a 22 french student in Canada currently studying for a double Master&apos;s degree in Professional IT and Software Architect
                        <br/> In this website you&apos;ll find the projects that I&apos;ve achieved during my schooling
                    </h2>
                </div>
            </main>
        </>
    );
}
