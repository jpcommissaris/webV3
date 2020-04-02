import React from "react"
import NavBar from './NavBar'
import Footer from './Footer'
import Video from './Video'
import GithubLink from './GithubLink'
import songs from '../public/songs.json'

import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// resume page Layout
class Playlist extends React.Component{ 

    constructor(){
        super()
        this.state = {
            start: '1970',
            end: '1980',
            weight: "-1",
            artists: ""
        }
    }
    

    // decides wiether to add a song to the playlist or not
    //author = writer of song, rank = rank of song, weight = weight, artists = string of artists (param)
    addSong(author, rank, artists, weight){
        const p = (10 + rank*rank)/2  //probablity function
        const r = Math.floor(Math.random() * 200) //0-200
        for(let i = 0; i < artists.length; i++){
            if(String(author).toUpperCase().includes(artists[i].toUpperCase())){
                return true
            }
        }
        if(weight != -1 && p < r){
            return true
        }
        return false

    }

    //start - end: 1980-2014,  weight: 1-5, artists: list
    getSongs(startt, endd, weightt, artistss) {
        let start = parseInt(startt)
        let end = parseInt(endd)
        let weight = parseInt(weightt)
        let artists = artistss.split(',');
        let playlist = []
        let song_str = ""
        const num_years = end-start+1
        let total_songs = (12 + (weight*3)) //when weight is 1 should be 15
        const songs_per_year = total_songs/num_years
        let num_songs_per_year = 0
        let num_songs = 0
        let year = start
        let prev_year = start

        try{
        for(let i = 0; i < songs.length; i++){ //loop through each object in list
            prev_year = year
            year = songs[i]['YEAR']

            if (weight == -1){
                total_songs = 100  //unlimited songs if weight is -1
            }
            //check new year
            if(prev_year != year){
                num_songs_per_year = 0
            }

            //check if year is correct
            if(songs[i]['YEAR'] >= start && songs[i]['YEAR'] <= end && num_songs_per_year < songs_per_year ){
                //check if song needs to be added
                if(this.addSong(songs[i].ARTIST, songs[i].RANK, artists, weight)){
                    song_str =  songs[i]['SONG'] + ', by: ' + songs[i]['ARTIST'] + '|'
                    playlist.push(song_str)
                    num_songs++
                }
                //check if we need to break out of the loop
                if(num_songs >= total_songs || num_songs >= 100){
                    break
                }
            }
        }
        //gets rid of ending |,   which is used for breaking newlines in the array
        if(playlist.length >= 1){
            playlist[playlist.length-1] = playlist[playlist.length-1].substring(0,playlist[playlist.length-1].length-1)
        }
        return playlist
        } catch{
            //any edge cases
            return ['invalid parameters']
        }
    }

    playlistToString(){
         //let playlist = this.getSongs(this.state.start, this.state.end, this.state.weight, [])
        let playlist = this.getSongs(this.state.start, this.state.end, this.state.weight, this.state.artists)
        let playlist_as_str = playlist.toString().split('|,').map((item, i) => {
            return <p key={i}>{(i+1)+") "}{item}</p>;
        });
        return playlist_as_str; 
    }

    //playlist = this.getSongs(1987, 1990, 2, [])
    
 
    //function that loops through the list, splits and adds numbering
    
    handleChange(event) {
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        this.setState({...this.state, [fieldName]: fleldVal})
    }

    render(){
        return (
            <div >
                <Container>
                <h2>Playlist Creater: </h2>
                <p>This project allows you to create a playlist of popular songs from 2017 all the way to 1970. The data used comes from billboards.com “top 100 songs of the year”. </p>
                <Video name = {'playlist'} width={'490px'} height={'400px'} header = {'Playlist Creater'}/>
                <GithubLink link= 'https://github.com/jpcommissaris/music_project' />
                <h4>Functinality: </h4>
                <p>You can choose to scrap the billboards data to a serialized object or a SQL database. From there the playlist class takes in a few arguments and creates a playlist. </p>
                <h4>Arguments: </h4> 
                <p id = "playlist"> This project can be run by adding arguments to a playlist using an IDE or the command line. <br />
                1) Year: The year you want to pick from<br />
                2) Weight: Takes values of 0-10, the more weight the more songs appear on the playlist. A negative value will limit the playlist to ONLY songs from the artists array. <br />
                3) Slice: Choose a span of years. For example, year=2000 and slice=11 would give you popular songs from 2000-2010. <br />
                4) Artists: Takes as many artists as you like and prioritizes their songs in your playlist. <br />
                </p>
                <h4>Create a Playlist: </h4> 
                <p>This is a simplified version of the playlist creator I wrote in JS. </p>
                </Container>
                <Container>
                    <Row>
                        <Col> 
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Start</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as= "select"
                            
                            aria-describedby="basic-addon1"
                            name = "start"
                            defaultValue={this.state.start}
                            onChange={this.handleChange.bind(this)}
                            
                            >
                                <option>1970</option>
                                <option>1975</option>
                                <option>1980</option>
                                <option>1985</option>
                                <option>1990</option>
                                <option>1995</option>
                                <option>2000</option>
                                <option>2005</option>
                                <option>2010</option>
                                <option>2015</option>
                                <option>2017</option>
                            </FormControl>
                            </InputGroup>
                        </Col>
                        <Col> 
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">End</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as= "select"
                            aria-describedby="basic-addon1"
                            name = "end"
                            defaultValue={this.state.end}
                            onChange={this.handleChange.bind(this)}
                            >
                                <option>1970</option>
                                <option>1975</option>
                                <option>1980</option>
                                <option>1985</option>
                                <option>1990</option>
                                <option>1995</option>
                                <option>2000</option>
                                <option>2005</option>
                                <option>2010</option>
                                <option>2015</option>
                                <option>2017</option>
                            </FormControl>
                            </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Weight</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="1"
                            aria-describedby="basic-addon1"
                            name = "weight"
                            defaultValue={this.state.weight}
                            onChange={this.handleChange.bind(this)}
                            />
                        </InputGroup>
                        </Col> 
                        
                    </Row>
                    <Row>
                        <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Artists</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Kayne West, Drake"
                            aria-describedby="basic-addon1"
                            name = "artists"
                            defaultValue={this.state.artists}
                            onChange={this.handleChange.bind(this)}
                            
                            />
                        </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <h4 style= {{fontSize: '16px', textAlign: 'center'}}>Your Playlist</h4>
                    </Col>
                    </Row>
                    <Row>
                    <div className="playlist">
                        {this.playlistToString()}
                    </div> 
                    </Row>
                </Container>
                <br/>
            </div>
            )
    }
    
}
export default Playlist

//form control as selecr