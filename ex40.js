// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object 
//  containing these two pieces of information. Use the function to make three dictionaries representing 
//  different albums. Print each return value to show that Objects are storing the album information correctly.
//   Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//   If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//   Make at least one new function call that includes the number of tracks on an album.

// make_album=(no)=> musicAlbum={
//     artistName:"Atif Aslam",
//     albumTitle:"Doorie",
//     no:no,
// }
//  let albums=make_album()
//  console.log(albums.artistName="atif aslam", albums.albumTitle="album1")
//  console.log(albums.artistName="farhan saeed", albums.albumTitle="album2")
//  console.log(albums.artistName="taylor", albums.albumTitle="album3",albums.no="55")


 //OR 

function Make_album(artistName, albumTitle, tracks) {
    
        this.ArtistName= artistName;
        this.AlbumTitle=albumTitle;
        this.Tracks=tracks
    }


console.log(new Make_album("atif aslam", "album1"))
console.log(new Make_album("farhan saeed", "album2"))
console.log(new Make_album("taylor", "album3", 3))
