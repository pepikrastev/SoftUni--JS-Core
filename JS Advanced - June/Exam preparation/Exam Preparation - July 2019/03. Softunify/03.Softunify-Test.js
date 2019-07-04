
const assert = require('chai').assert;
//const expect = require('chai').expect;
const SoftUniFy = require('./03.Softunify').SoftUniFy;

describe('SoftUniFy', function (){

    it('is allSongs an object', function (){
        let myClass = new SoftUniFy();
        assert.deepEqual(myClass.allSongs, {})
        //expect({}).to.deep.equal(myClass.allSongs);
    });

    it('is the song is empty', function (){
        let myClass = new SoftUniFy();
        assert.equal(myClass.playSong('song'), `You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`)
        // expect(`You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`).to.equal(myClass.playSong('song'));
    });

    it('rate artist', function (){
        let myClass = new SoftUniFy();
        assert.equal(myClass.rateArtist('artis'), 'The artis is not on your artist list.')
        //expect('The artis is not on your artist list.').to.equal(myClass.rateArtist('artis'));
    });
});