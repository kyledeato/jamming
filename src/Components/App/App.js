import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [{name: 'name1', artist: "artist1", album: "album1", id: 1}, {name: 'name2', artist: "artist2", album: "album2", id: 2}, {name: 'name3', artist: "artist3", album: "album3", id: 3}],
      playListName: 'My Playlist',
      playListTracks: [{name: 'playlistName1', artist: "playlistArtist1", album: "playlistAlbum1", id: 4}, {name: 'playlistName2', artist: "playlistArtist2", album: "playlistAlbum2", id: 5}, {name: 'playlistName3', artist: "playlistArtist3", album: "playlistAlbum3", id: 6}] 
    };

    this.addTrack= this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playListTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playListTracks: tracks});
  }

  removeTrack(track){
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(current => current.id !== track.id);
    this.setState({playListTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playListName: name});
  }

  savePlaylist(){
    const trackUris = this.state.playListTracks.map(track => track.uri);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
              <SearchBar />
              <div className="App-playlist">
              <SearchResults SearchResults={this.state.SearchResults} onAdd={this.addTrack} />
              <Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
              </div>
          </div>
      </div>
    )
  }
}

export default App;
