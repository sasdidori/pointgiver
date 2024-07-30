export default function PointButton({point, setPoint}){
    function handleClick(){
        if(point.activePlayer == 'player1'){
            setPoint({...point, player1: point.player1 + 1})
        } else {
            setPoint({...point, player2: point.player2 + 1})
        }
    }
    return(
        <><button onClick={handleClick}>+1</button></>
    )
}