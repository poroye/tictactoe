export default function calculateWinner(squares,size,settingphase) {
    if (size == 2){
        const lines = [
            [0,1],[2,3], //horizontal
            [0,2],[1,3], //vertical
            [0,3],[2,1]  //Diagonal
        ];
        for (let i = 0; i < lines.length ;i++) {
            const [a, b] = lines[i];
            if (squares[a] && squares[a] === squares[b]) {
                return squares[a];
            }
        }
    }
    else if (size == 3){
        const lines = [
            [0, 1, 2],[3, 4, 5],[6, 7, 8],  //horizontal
            [0, 3, 6],[1, 4, 7],[2, 5, 8],  //vertical
            [0, 4, 8],[2, 4, 6]             //Diagonal
        ];
        for (let i = 0; i < lines.length ;i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
    }
    let lines = [];
    size = parseInt(size)
    for (let i = 0; i <= size*(size-1) ;i=i+size){
        for (let j = 0; j < size-3 ;j++){lines.push([i+j,i+j+1,i+j+2,i+j+3]);}}                                 //horizontal
    for (let i = 0; i < size ; i++){
        for (let j = 0; j < size*(size-3) ;j=j+size){lines.push([i+j,i+j+size,i+j+(size*2),i+j+(size*3)]);}}    //vertical
    for (let i = 0; i<(size*(size-3)); i=i+9){
        for (let j = 0; j < size-3 ; j++){lines.push([i+j,i+j+size+1,i+j+((size+1)*2),i+j+((size+1)*3)])}}      //Diagonal \
    for (let i = 3; i<(size*(size-3)); i=i+9){
        for (let j = 0; j < size-3 ; j++){lines.push([i+j,i+j+size-1,i+j+((size-1)*2),i+j+((size-1)*3)])}       //Diagonal /
    }
    for (let i = 0; i < lines.length ;i++) {
            const [a, b, c, d] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
                return squares[a];
            }
    }

    return null
}