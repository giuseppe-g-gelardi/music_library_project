import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const MusicTable = (props) => {

  return ( 
        <div>
          <Table responsive striped bordered hover >
            <thead >
              <tr>
                <th>Song Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Release Date</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.songs.map((song, index) => <li key={index}>{song.title}</li>)}</td>
                <td>{props.songs.map((song, index) => <li key={index}>{song.album}</li>)}</td>
                <td>{props.songs.map((song, index) => <li key={index}>{song.artist}</li>)}</td>
                <td>{props.songs.map((song, index) => <li key={index}>{song.release_date}</li>)}</td>
                <td>{props.songs.map((song, index) => <li key={index}>
                  <Button size="sm" variant="outline-danger"onClick={() => props.deleteRow(song.id)}>Delete</Button> 
                </li>)}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
   );
}
 
export default MusicTable;
