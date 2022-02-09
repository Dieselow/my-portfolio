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
                    <h3>(hello)</h3>
                    <h2 className='text-2xl max-w-md mx-auto'>
                        Welcome to my online resume with a display of my school projects, some work experiences I had before, a little about me and finally ways to contact me.
                    </h2>
                </div>
            </main>
        </>
    );
}
