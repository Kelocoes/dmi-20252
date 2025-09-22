import InteractiveTailwindPage from "./InteractiveTailwindPage";

export default function TailwindShowcase() {
    return (
        <>
            <div id="tailwind-showcase" className="p-8 bg-gray-50 min-h-screen">
                <h1 className="text-4xl font-extrabold text-blue-700 mb-6 underline">
                    Tailwind CSS Showcase
                </h1>

                {/* Typography */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Typography</h2>
                    <p className="text-base mb-1">This is base text.</p>
                    <p className="text-lg font-light mb-1">
                        Large and light text.
                    </p>
                    <p className="text-sm italic mb-1">
                        Small and italic text.
                    </p>
                    <p className="text-xs font-mono text-gray-500 mb-1">
                        Extra small, monospace, gray text.
                    </p>
                    <p className="font-bold text-pink-600 mb-1">
                        Bold and colored text.
                    </p>
                    <p className="line-through text-red-400 mb-1">
                        Line through text.
                    </p>
                    <p className="uppercase tracking-widest mb-1">
                        Uppercase and wide tracking.
                    </p>
                </section>

                {/* Colors & Backgrounds */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Colors & Backgrounds
                    </h2>
                    <div className="flex gap-4">
                        <div className="w-24 h-24 bg-blue-400 text-white flex items-center justify-center rounded shadow">
                            Blue
                        </div>
                        {/* eslint-disable-next-line max-len */}
                        <div className="w-24 h-24 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white flex items-center justify-center rounded shadow">
                            Gradient
                        </div>
                        <div className="w-24 h-24 bg-white border border-gray-300 text-gray-700 flex items-center justify-center rounded shadow">
                            Border
                        </div>
                    </div>
                </section>

                {/* Spacing */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Spacing (Margin & Padding)
                    </h2>
                    <div className="bg-green-100 p-4 mb-2">Padding 4</div>
                    <div className="bg-green-200 p-2 mb-2">Padding 2</div>
                    <div className="bg-green-300 m-4">Margin 4</div>
                    <div className="bg-green-400 m-2">Margin 2</div>
                </section>

                {/* Flexbox & Grid */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Flexbox & Grid
                    </h2>
                    <div className="flex gap-2 mb-4">
                        <div className="bg-purple-300 p-2 rounded">Flex 1</div>
                        <div className="bg-purple-400 p-2 rounded">Flex 2</div>
                        <div className="bg-purple-500 p-2 rounded">Flex 3</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-yellow-300 p-2 rounded">Grid 1</div>
                        <div className="bg-yellow-400 p-2 rounded">Grid 2</div>
                        <div className="bg-yellow-500 p-2 rounded">Grid 3</div>
                    </div>
                </section>

                {/* Buttons & Interactivity */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Buttons & Interactivity
                    </h2>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors mr-2">
                        Hover Me
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded focus:ring-2 focus:ring-green-300 mr-2">
                        Focus Me
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded active:bg-red-700">
                        Active Me
                    </button>
                </section>

                {/* Shadows, Borders, Radius */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Shadows, Borders, Radius
                    </h2>
                    <div className="flex gap-4">
                        <div className="w-24 h-24 bg-white border border-gray-400 rounded shadow">
                            Shadow
                        </div>
                        <div className="w-24 h-24 bg-white border-4 border-blue-500 rounded-lg">
                            Border
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full border border-pink-400 flex items-center justify-center">
                            Circle
                        </div>
                    </div>
                </section>

                {/* Responsive Design */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Responsive Design
                    </h2>
                    <div className="bg-orange-200 p-4 text-center sm:bg-orange-300 md:bg-orange-400 lg:bg-orange-500 xl:bg-orange-600">
                        Resize the window to see background color change!
                    </div>
                </section>

                {/* Animations & Transitions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Animations & Transitions
                    </h2>
                    <button className="px-4 py-2 bg-indigo-500 text-white rounded transition-transform duration-300 hover:scale-110">
                        Hover to Scale
                    </button>
                    <span className="inline-block ml-4 animate-bounce text-indigo-700 font-bold">
                        Bouncing!
                    </span>
                </section>

                {/* Miscellaneous */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Miscellaneous
                    </h2>
                    <input
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Input with focus ring"
                    />
                    <div className="mt-4 w-32 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                    <div className="mt-4 w-32 h-4 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3"></div>
                    </div>
                </section>
            </div>
            <InteractiveTailwindPage />
        </>
    );
}
