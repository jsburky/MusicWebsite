<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify Web API Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
    <script src="app.js"></script>
</head>

<body onload="onPageLoad()">
    <div class="container">

        <div id="tokenSection" class="row">
            <div class="col">
                <p class="welcomeText">This is a javascript app that shows how to use the Spotify API to control the playback 
                    of music (playlist or albums) on any of your devices connected to your spotify account.</p>
                <p class="welcomeText">To use this app you need a Spotify client ID and client secret. You get these by 
                    creating an app in the Spotify developers dashboard here 
                    <a href="https://developer.spotify.com/dashboard/applications" target="_blank">https://developer.spotify.com/dashboard/applications</a> 
                     and add https://makeratplay.github.io/SpotifyWebAPI/ in the "Redirect URIs" settings field.
                </p>                                   
                
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="clientId" class="form-label">Client ID</label>
                    <input type="text" class="form-control" id="clientId" placeholder="">
                </div>
                <div class="mb-3">
                    <label for="clientSecret" class="form-label">Client Secret</label>
                    <input type="text" class="form-control" id="clientSecret" placeholder="">
                </div>
                <input class="btn btn-primary btn-lg" type="button" onclick="requestAuthorization()" value="Request Authorization"><br/>
            </div>

        </div>

        <div id="deviceSection" class="row">
            <div class="col">

                <div class="mb-3">
                    <label for="devices" class="form-label">Devices</label>
                    <select id="devices" class="form-control">
                    </select>
                    <input class="btn btn-primary btn-sm mt-3" type="button" onclick="refreshDevices()" value="Refresh Devices">
                    <input type="button" class="btn btn-dark btn-sm  mt-3" onclick="transfer()" value="Transfer">
                </div>

                <div class="mb-3">
                    <label for="playlists" class="form-label">Playlists</label>
                    <select id="playlists" class="form-control">
                    </select>
                    <input class="btn btn-primary btn-sm mt-3" type="button" onclick="refreshPlaylists()" value="Refresh Playlists">

                </div>

                <div class="mb-3">
                    <label for="tracks" class="form-label">Tracks</label>
                    <select id="tracks" class="form-control">
                    </select>
                    <input class="btn btn-primary btn-sm mt-3" type="button" onclick="fetchTracks()" value="Fetch Tracks">
                </div>

                <div class="mb-3">
                    <label for="tracks" class="form-label">Album</label>
                    <input id="album" class="form-control">
                </div>

                <div class="row">
                    <div class="col">
                        <input type="button" class="btn btn-dark" onclick="previous()" value="Prev">
                        <input type="button" class="btn btn-dark" onclick="play()" value="Play">
                        <input type="button" class="btn btn-dark" onclick="shuffle()" value="Shuffle">
                        <input type="button" class="btn btn-dark" onclick="pause()" value="Pause">
                        <input type="button" class="btn btn-dark" onclick="next()" value="Next">
                    </div>
                </div>


                <div class="row  mt-3">
                    <div class="col">
                        <h1> Currently Playing</h1>
                        <input type="button" class="btn btn-primary btn-sm mt-3" onclick="currentlyPlaying()" value="Refresh Currently Playing">
                        <div>
                            <img id="albumImage" src="">
                            <div id="trackTitle"></div>
                            <div id="trackArtist"></div>
                        </div>

                    </div>
                </div>

                <div class="row  mt-3">
                    <div class="col">
                        <div id="radioButtons"></div>
                        <input type="button" class="btn btn-dark" onclick="saveNewRadioButton()" value="Add">
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>

</html>
