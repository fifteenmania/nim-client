function Coin() {
    return <div className="w-8 h-8 bg-zinc-300 rounded-full" tabIndex={0}>
    </div>
}

function CoinContainer() {
    return <div className="flex flex-wrap">
        {Array(50).fill(0).map((_, idx) => <Coin key={idx} />)}
    </div>
}

function GameSetting() {
    return <div>

    </div>
}

interface textData {
    key: string,
    value: string
}

const gameRuleDescription: textData[] = [
    {key: "1", value: "첫 번째 플레이어를 정합니다."},
    {key: "2", value: `첫 번째 플레이어부터 시계 방향으로 베팅을 합니다.`},
    {key: "2-1", value: `첫 번째 플레이어는 판돈을 정할 수 있습니다. 
    최소 판돈은 (최대 빼기 수 + 1)이며, 판돈을 두 배로 할 수도 있습니다.`},
    {key: "2-2", value: `시계 방향으로 돌아가며 [콜] 또는 [다이] 또는 [레이스] 를 합니다.`},
    {key: "2-3", value: `[콜]을 할 경우 판돈만큼 동전을 동전 더미에 겁니다.`},
    {key: "2-4", value: `[다이]를 할 경우 코인 1개를 걸고 게임에 참여하지 않습니다.`},
    {key: "2-5", value: `[레이스]를 할 경우 판돈의 두 배를 동전 더미에 겁니다. 
        다음 사람부터는 판돈이 두 배로 커진 것처럼 베팅해야 합니다.`},
    {key: "3", value: ``}
]

function GameRuleDescription() {
    return <div>
        {gameRuleDescription.map((item) => <p>{`${item.key}: ${item.value}`}</p>)}
    </div>
}

export function Betting() {
    return <div>
        <GameRuleDescription />
        <GameSetting />
        <CoinContainer />
    </div>
}