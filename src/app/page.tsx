import GamePosterWall from "@/components/game_poster_wall";
import Sidebar from "@/components/sidebar";
import {useRouter} from "next/router";


async function getPosterWall() {
    // const backend_port = process.env.PORT;
    // const game_library_path = process.env.GAME_LIBRARY_PATH;
    const backend_port = 8080;
    const game_library_path = "E:\\GalGames";
    const res = await fetch(`http://localhost:` + backend_port + `/library/index/posterwall`, {
        method: 'POST',
        body: JSON.stringify({
            directory: game_library_path
        }),
        cache: 'no-store',
    });
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    if (data["code"] !== 0) {
        return {
            notFound: true,
        }
    }

    // games是个字典，key是游戏名，value是海报路径
    let games = data["data"];

    let gamesShowList = [];

    let idx = 1;

    for (let game in games) {
        gamesShowList.push({
            name: game,
            imageSrc: 'http://localhost:' + backend_port + '/img/' + games[game],
            id: idx,
            href: '/game/' + game,
            imageAlt: game,
        });
    }

    console.log(gamesShowList)

    return gamesShowList
}

const example = [
    {
        name: 'Darkblue',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/Darkblue/metadata/poster.jpg',
        id: 1,
        href: '/game/Darkblue',
        imageAlt: 'Darkblue'
    },
    {
        name: 'Doki Doki Literature Club Plus',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/Doki Doki Literature Club Plus/metadata/poster.jpg',
        id: 1,
        href: '/game/Doki Doki Literature Club Plus',
        imageAlt: 'Doki Doki Literature Club Plus'
    },
    {
        name: '九个九日九色',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/九个九日九色/metadata/poster.jpg',
        id: 1,
        href: '/game/九个九日九色',
        imageAlt: '九个九日九色'
    },
    {
        name: '千恋＊万花',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/千恋＊万花/metadata/poster.jpg',
        id: 1,
        href: '/game/千恋＊万花',
        imageAlt: '千恋＊万花'
    },
    {
        name: '君与彼女与彼女之恋',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/君与彼女与彼女之恋/metadata/poster.jpg',
        id: 1,
        href: '/game/君与彼女与彼女之恋',
        imageAlt: '君与彼女与彼女之恋'
    },
    {
        name: '女装山脉',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/女装山脉/metadata/poster.jpg',
        id: 1,
        href: '/game/女装山脉',
        imageAlt: '女装山脉'
    },
    {
        name: '想要传达给你的爱恋',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/想要传达给你的爱恋/metadata/poster.jpg',
        id: 1,
        href: '/game/想要传达给你的爱恋',
        imageAlt: '想要传达给你的爱恋'
    },
    {
        name: '沙耶之歌',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/沙耶之歌/metadata/poster.jpg',
        id: 1,
        href: '/game/沙耶之歌',
        imageAlt: '沙耶之歌'
    },
    {
        name: '糖调',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/糖调/metadata/poster.jpg',
        id: 1,
        href: '/game/糖调',
        imageAlt: '糖调'
    },
    {
        name: '青空下的加缪',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/青空下的加缪/metadata/poster.jpg',
        id: 1,
        href: '/game/青空下的加缪',
        imageAlt: '青空下的加缪'
    },
{
    name: '魔女的夜宴',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/魔女的夜宴/metadata/poster.jpg',
    id: 1,
    href: '/game/魔女的夜宴',
    imageAlt: '魔女的夜宴'
},
    {
        name: '素晴らしき日々～不連続存在～',
        imageSrc: 'https://t.vndb.org/cv/50/58250.jpg',
        id: 1,
        href: '/game/魔女的夜宴',
        imageAlt: '魔女的夜宴'
    },
    {
        name: 'ATRI -My Dear Moments-',
        imageSrc: 'https://t.vndb.org/cv/32/46032.jpg',
        id: 1,
        href: '/game/魔女的夜宴',
        imageAlt: '魔女的夜宴'
    },
    {
        name: '3days',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/3days/metadata/poster.jpg',
        id: 1,
        href: '/game/3days',
        imageAlt: '3days'
    },
    {
        name: 'Marionettes manipulate the marionette',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/Marionettes manipulate the marionette/metadata/poster.jpg',
        id: 1,
        href: '/game/Marionettes manipulate the marionette',
        imageAlt: 'Marionettes manipulate the marionette'
    },
    {
        name: '与你拉钩起誓的婚约',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/与你拉钩起誓的婚约/metadata/poster.jpg',
        id: 1,
        href: '/game/与你拉钩起誓的婚约',
        imageAlt: '与你拉钩起誓的婚约'
    },
    {
        name: '妹调教日记',
        imageSrc: 'http://localhost:8080/img/E:/GalGames/妹调教日记/metadata/poster.jpg',
        id: 1,
        href: '/game/妹调教日记',
        imageAlt: '妹调教日记'
    },
]


export default async function Home() {
    const gamesShowList = await getPosterWall();
    // const gamesShowList = example;
    return (
        <div className="flex bg-gray-100">
            <div className="flex flex-col gap-y-5 w-72 h-screen overflow-y-auto">
                <Sidebar/>
            </div>
            <div className="flex-grow overflow-y-auto h-screen">
                <GamePosterWall game={gamesShowList}/>
            </div>
        </div>
    );

}