export default function GamePosterWall(props) {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">GamePosterWall</h2>

                <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 xl:gap-x-6">
                    {props.game.map((game) => (
                        <a key={game.id} href={game.href} className="group">
                            <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-2 xl:aspect-h-3">
                                <img
                                    src={game.imageSrc}
                                    alt={game.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <p className="mt-1 text-lg font-medium text-gray-900">{game.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
