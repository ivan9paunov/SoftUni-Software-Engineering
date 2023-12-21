function songs(playlistInfo) {
    class Song {
        typeList;
        name;
        time;

        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let playlist = [];
    let totalSongs = playlistInfo.shift();
    let playlistToPrint = playlistInfo.pop();

    for (let i = 0; i < totalSongs; i++) {
        let [typeList, name, time] = playlistInfo[i].split('_');
        let song = new Song(typeList, name, time);
        playlist.push(song);
    }

    if (playlistToPrint == 'all') {
        playlist.forEach((i) => console.log(i.name));
    } else {
        let filtered = playlist.filter((i) => i.typeList == playlistToPrint);
        filtered.forEach((i) => console.log(i.name));
    }
}

songs(
    [3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);