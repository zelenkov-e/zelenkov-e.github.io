// track - выбранный эл списка 
// по клику на кот в деталях отображается подробн инфо
export default function setTrack(track){
    // alert(track.author)
    return{
        type: 'SET_TRACK',
        payload: track
    }
}