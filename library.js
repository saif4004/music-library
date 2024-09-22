const library = {
  tracks: { 
       t01: { id: "t01",
       name: "Code Monkey",
       artist: "Jonathan Coulton",
       album: "Thing a Week Three" },
  t02: { id: "t02",
       name: "Model View Controller",
       artist: "James Dempsey",
       album: "WWDC 2003"},
  t03: { id: "t03",
       name: "Four Thirty-Three",
       artist: "John Cage",
       album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },
  printPlaylists: function () {
    let tempObj = this.playlists;
    for (const key in tempObj) {
      console.log(`${key}: ${tempObj[key].name} - ${tempObj[key].tracks.length} tracks`);
      }  
  },

printTracks: function() {
    let tempObj = this.tracks;
    for (const key in tempObj) {
      console.log(`${key}: ${tempObj[key].name} by ${tempObj[key].artist} (${tempObj[key].album})`);
    }

  }
     
};
          
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
          
     // prints a list of tracks for a given playlist, using the following format:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     const printPlaylist = function(playlistId) {
       let trackArray = library.playlists[playlistId].tracks;
       console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`);
          
       for (const item of trackArray) {
         console.log(`${item}: ${library.tracks[item].name} by ${library.tracks[item].artist} (${library.tracks[item].album})`);
       }
     };
          
          
     // adds an existing track to an existing playlist
     const addTrackToPlaylist = function(trackId, playlistId) {
       library.playlists[playlistId].tracks.push(trackId);
     };
          
          
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     };
          
          
     // adds a track to the library
     const addTrack = function(name, artist, album) {
       const trackAdded = {};
       trackAdded.id = generateUid();
       trackAdded[name] = name;
       trackAdded[artist] = artist;
       trackAdded[album] = album;
       library.tracks = {...library.tracks, [trackAdded.id] :trackAdded};
  
          
     };
          
          
     // adds a playlist to the library
     const addPlaylist = function(name) {
       const plyListAdded = {};
       plyListAdded.id = generateUid();
       plyListAdded.name = name;
       plyListAdded.tracks = ["t03,t04"];
       library.playlists = {...library.playlists, [plyListAdded.id] :plyListAdded};
          
     };
          
          
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri")
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     const printSearchResults = function(query) {
          
     };
          
console.log(library.playlists.p01);
printPlaylist(library.playlists.p01.id);
addTrackToPlaylist("temp","p01");
library.printPlaylists();
library.printTracks();
          