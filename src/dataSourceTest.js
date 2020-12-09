import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import DataSource from "./dataSource";

const DataSourceTest = () => {
	return (
		<Container>
			{/*Enter functionnames to be tested*/}
			{[
				"searchSong",
				"getPlaylist",
				"createPlaylist",
				"changePlaylistOrder",
				"deleteSong",
				"addSong",
			].map((call, index) => (
				<Row key={call} style={{ marginTop: "10px" }}>
					<Col lg="auto">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								const query = document.getElementById(
									"query" + call
								);
								console.log(
									call + " search query: " + query.value
								);
								DataSource[call](query.value)
									.then((result) => console.log(result))
									.catch((err) => {
										console.error(err);
									});
							}}
						>
							{""}
							<input
								id={`query${call}`}
								type="text"
								placeholder={`Enter ${call} query`}
							/>
							<Button type="submit">Submit {call} request</Button>
						</form>
					</Col>
				</Row>
			))}
		</Container>
	);
};

export function getStaticPlaylist() {
	return {
		collaborative: false,
		description: "Your daily update of the most played tracks right now.",
		external_urls: {
			spotify: "https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF",
		},
		followers: { href: null, total: 15809384 },
		href: "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF",
		id: "37i9dQZEVXbMDoHDwVN2tF",
		images: [
			{
				height: null,
				url:
					"https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_large.jpg",
				width: null,
			},
		],
		name: "Global Top 50",
		owner: {
			display_name: "spotifycharts",
			external_urls: {
				spotify: "https://open.spotify.com/user/spotifycharts",
			},
			href: "https://api.spotify.com/v1/users/spotifycharts",
			id: "spotifycharts",
			type: "user",
			uri: "spotify:user:spotifycharts",
		},
		primary_color: null,
		public: false,
		snapshot_id:
			"NjYwNjQ4Mjc3LDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDY1NmU=",
		tracks: {
			href:
				"https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?offset=0&limit=100",
			items: [
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
									},
									href:
										"https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
									id: "4q3ewBCX7sLwd24euuV69X",
									name: "Bad Bunny",
									type: "artist",
									uri:
										"spotify:artist:4q3ewBCX7sLwd24euuV69X",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2d9BCZeAAhiZWPpbX9aPCW",
							},
							href:
								"https://api.spotify.com/v1/albums/2d9BCZeAAhiZWPpbX9aPCW",
							id: "2d9BCZeAAhiZWPpbX9aPCW",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851005ee342f4eef2cc6e8436ab",
									width: 64,
								},
							],
							name: "EL ÚLTIMO TOUR DEL MUNDO",
							release_date: "2020-11-27",
							release_date_precision: "day",
							total_tracks: 16,
							type: "album",
							uri: "spotify:album:2d9BCZeAAhiZWPpbX9aPCW",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
								},
								href:
									"https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
								id: "4q3ewBCX7sLwd24euuV69X",
								name: "Bad Bunny",
								type: "artist",
								uri: "spotify:artist:4q3ewBCX7sLwd24euuV69X",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/0EFisYRi20PTADoJrifHrz",
								},
								href:
									"https://api.spotify.com/v1/artists/0EFisYRi20PTADoJrifHrz",
								id: "0EFisYRi20PTADoJrifHrz",
								name: "Jhay Cortez",
								type: "artist",
								uri: "spotify:artist:0EFisYRi20PTADoJrifHrz",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 205090,
						episode: false,
						explicit: true,
						external_ids: { isrc: "QMFME2004132" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/4MzXwWMhyBbmu6hOcLVD49",
						},
						href:
							"https://api.spotify.com/v1/tracks/4MzXwWMhyBbmu6hOcLVD49",
						id: "4MzXwWMhyBbmu6hOcLVD49",
						is_local: false,
						name: "DÁKITI",
						popularity: 87,
						preview_url:
							"https://p.scdn.co/mp3-preview/edd9bea2e66b14169f8bbfa45a78b6599b14160a?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 11,
						type: "track",
						uri: "spotify:track:4MzXwWMhyBbmu6hOcLVD49",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4iHNK0tOyZPYnBU7nGAgpQ",
									},
									href:
										"https://api.spotify.com/v1/artists/4iHNK0tOyZPYnBU7nGAgpQ",
									id: "4iHNK0tOyZPYnBU7nGAgpQ",
									name: "Mariah Carey",
									type: "artist",
									uri:
										"spotify:artist:4iHNK0tOyZPYnBU7nGAgpQ",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/61ulfFSmmxMhc2wCdmdMkN",
							},
							href:
								"https://api.spotify.com/v1/albums/61ulfFSmmxMhc2wCdmdMkN",
							id: "61ulfFSmmxMhc2wCdmdMkN",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e024246e3158421f5abb75abc4f",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048514246e3158421f5abb75abc4f",
									width: 64,
								},
							],
							name: "Merry Christmas",
							release_date: "1994-11-01",
							release_date_precision: "day",
							total_tracks: 10,
							type: "album",
							uri: "spotify:album:61ulfFSmmxMhc2wCdmdMkN",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4iHNK0tOyZPYnBU7nGAgpQ",
								},
								href:
									"https://api.spotify.com/v1/artists/4iHNK0tOyZPYnBU7nGAgpQ",
								id: "4iHNK0tOyZPYnBU7nGAgpQ",
								name: "Mariah Carey",
								type: "artist",
								uri: "spotify:artist:4iHNK0tOyZPYnBU7nGAgpQ",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 241106,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USSM19400325" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn",
						},
						href:
							"https://api.spotify.com/v1/tracks/0bYg9bo50gSsH3LtXe2SQn",
						id: "0bYg9bo50gSsH3LtXe2SQn",
						is_local: false,
						name: "All I Want for Christmas Is You",
						popularity: 94,
						preview_url:
							"https://p.scdn.co/mp3-preview/bbafd15ff484394a0ca106d5fef0a81eeea4ef5b?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:0bYg9bo50gSsH3LtXe2SQn",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/5lpH0xAS4fVfLkACg9DAuM",
									},
									href:
										"https://api.spotify.com/v1/artists/5lpH0xAS4fVfLkACg9DAuM",
									id: "5lpH0xAS4fVfLkACg9DAuM",
									name: "Wham!",
									type: "artist",
									uri:
										"spotify:artist:5lpH0xAS4fVfLkACg9DAuM",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/6egzU9NKfora01qaNbvwfZ",
							},
							href:
								"https://api.spotify.com/v1/albums/6egzU9NKfora01qaNbvwfZ",
							id: "6egzU9NKfora01qaNbvwfZ",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273f2d2adaa21ad616df6241e7d",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02f2d2adaa21ad616df6241e7d",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851f2d2adaa21ad616df6241e7d",
									width: 64,
								},
							],
							name: "LAST CHRISTMAS",
							release_date: "1984-11-29",
							release_date_precision: "day",
							total_tracks: 3,
							type: "album",
							uri: "spotify:album:6egzU9NKfora01qaNbvwfZ",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/5lpH0xAS4fVfLkACg9DAuM",
								},
								href:
									"https://api.spotify.com/v1/artists/5lpH0xAS4fVfLkACg9DAuM",
								id: "5lpH0xAS4fVfLkACg9DAuM",
								name: "Wham!",
								type: "artist",
								uri: "spotify:artist:5lpH0xAS4fVfLkACg9DAuM",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 262960,
						episode: false,
						explicit: false,
						external_ids: { isrc: "GBBBM8400019" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/2FRnf9qhLbvw8fu4IBXx78",
						},
						href:
							"https://api.spotify.com/v1/tracks/2FRnf9qhLbvw8fu4IBXx78",
						id: "2FRnf9qhLbvw8fu4IBXx78",
						is_local: false,
						name: "Last Christmas",
						popularity: 84,
						preview_url:
							"https://p.scdn.co/mp3-preview/ad0a6b7428ef900b169449b24c335d885dc029d0?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:2FRnf9qhLbvw8fu4IBXx78",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR",
									},
									href:
										"https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
									id: "66CXWjxzNUsdJxJ2JdwvnR",
									name: "Ariana Grande",
									type: "artist",
									uri:
										"spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/27MNgBEnLCKoafz1g2Zu97",
							},
							href:
								"https://api.spotify.com/v1/albums/27MNgBEnLCKoafz1g2Zu97",
							id: "27MNgBEnLCKoafz1g2Zu97",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273fb704b7e832b40f08c14629c",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02fb704b7e832b40f08c14629c",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851fb704b7e832b40f08c14629c",
									width: 64,
								},
							],
							name: "Santa Tell Me",
							release_date: "2014-11-24",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:27MNgBEnLCKoafz1g2Zu97",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR",
								},
								href:
									"https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
								id: "66CXWjxzNUsdJxJ2JdwvnR",
								name: "Ariana Grande",
								type: "artist",
								uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 204093,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USUM71417401" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/0lizgQ7Qw35od7CYaoMBZb",
						},
						href:
							"https://api.spotify.com/v1/tracks/0lizgQ7Qw35od7CYaoMBZb",
						id: "0lizgQ7Qw35od7CYaoMBZb",
						is_local: false,
						name: "Santa Tell Me",
						popularity: 92,
						preview_url:
							"https://p.scdn.co/mp3-preview/730ad32e6d132acdf519f298f48b0ffbccdc6129?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:0lizgQ7Qw35od7CYaoMBZb",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1GxkXlMwML1oSg5eLPiAz3",
									},
									href:
										"https://api.spotify.com/v1/artists/1GxkXlMwML1oSg5eLPiAz3",
									id: "1GxkXlMwML1oSg5eLPiAz3",
									name: "Michael Bublé",
									type: "artist",
									uri:
										"spotify:artist:1GxkXlMwML1oSg5eLPiAz3",
								},
							],
							available_markets: ["CA", "US", "ZA"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3CKVXhODttZebJAzjUs2un",
							},
							href:
								"https://api.spotify.com/v1/albums/3CKVXhODttZebJAzjUs2un",
							id: "3CKVXhODttZebJAzjUs2un",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27395517befb15ad5d63af701ab",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0295517befb15ad5d63af701ab",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485195517befb15ad5d63af701ab",
									width: 64,
								},
							],
							name: "Christmas",
							release_date: "2011-10-14",
							release_date_precision: "day",
							total_tracks: 16,
							type: "album",
							uri: "spotify:album:3CKVXhODttZebJAzjUs2un",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1GxkXlMwML1oSg5eLPiAz3",
								},
								href:
									"https://api.spotify.com/v1/artists/1GxkXlMwML1oSg5eLPiAz3",
								id: "1GxkXlMwML1oSg5eLPiAz3",
								name: "Michael Bublé",
								type: "artist",
								uri: "spotify:artist:1GxkXlMwML1oSg5eLPiAz3",
							},
						],
						available_markets: ["CA", "US", "ZA"],
						disc_number: 1,
						duration_ms: 206639,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USRE11100700" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/0lLdorYw7lVrJydTINhWdI",
						},
						href:
							"https://api.spotify.com/v1/tracks/0lLdorYw7lVrJydTINhWdI",
						id: "0lLdorYw7lVrJydTINhWdI",
						is_local: false,
						name: "It's Beginning to Look a Lot like Christmas",
						popularity: 73,
						preview_url:
							"https://p.scdn.co/mp3-preview/798a8bc5a7a95ccad75648a63bc50aa755dc2289?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:0lLdorYw7lVrJydTINhWdI",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4cPHsZM98sKzmV26wlwD2W",
									},
									href:
										"https://api.spotify.com/v1/artists/4cPHsZM98sKzmV26wlwD2W",
									id: "4cPHsZM98sKzmV26wlwD2W",
									name: "Brenda Lee",
									type: "artist",
									uri:
										"spotify:artist:4cPHsZM98sKzmV26wlwD2W",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/34wa3zf2prXFMk47t9zHFG",
							},
							href:
								"https://api.spotify.com/v1/albums/34wa3zf2prXFMk47t9zHFG",
							id: "34wa3zf2prXFMk47t9zHFG",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2737845f74d6db14b400fa61cd3",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e027845f74d6db14b400fa61cd3",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048517845f74d6db14b400fa61cd3",
									width: 64,
								},
							],
							name: "Merry Christmas From Brenda Lee",
							release_date: "1964-10-19",
							release_date_precision: "day",
							total_tracks: 12,
							type: "album",
							uri: "spotify:album:34wa3zf2prXFMk47t9zHFG",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4cPHsZM98sKzmV26wlwD2W",
								},
								href:
									"https://api.spotify.com/v1/artists/4cPHsZM98sKzmV26wlwD2W",
								id: "4cPHsZM98sKzmV26wlwD2W",
								name: "Brenda Lee",
								type: "artist",
								uri: "spotify:artist:4cPHsZM98sKzmV26wlwD2W",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 126266,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USMC15848998" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/2EjXfH91m7f8HiJN1yQg97",
						},
						href:
							"https://api.spotify.com/v1/tracks/2EjXfH91m7f8HiJN1yQg97",
						id: "2EjXfH91m7f8HiJN1yQg97",
						is_local: false,
						name: "Rockin' Around The Christmas Tree",
						popularity: 91,
						preview_url:
							"https://p.scdn.co/mp3-preview/a51c52774b1c82a1caec474faa375ea443ab5d54?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:2EjXfH91m7f8HiJN1yQg97",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/38EmEgXkgK51MT2tPY0EoC",
									},
									href:
										"https://api.spotify.com/v1/artists/38EmEgXkgK51MT2tPY0EoC",
									id: "38EmEgXkgK51MT2tPY0EoC",
									name: "Bobby Helms",
									type: "artist",
									uri:
										"spotify:artist:38EmEgXkgK51MT2tPY0EoC",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3wivyOdotHWZ9dcuXMjPKT",
							},
							href:
								"https://api.spotify.com/v1/albums/3wivyOdotHWZ9dcuXMjPKT",
							id: "3wivyOdotHWZ9dcuXMjPKT",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273fd56f3c7a294f5cfe51c7b17",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02fd56f3c7a294f5cfe51c7b17",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851fd56f3c7a294f5cfe51c7b17",
									width: 64,
								},
							],
							name:
								"Jingle Bell Rock/Captain Santa Claus (And His Reindeer Space Patrol)",
							release_date: "1957-12-02",
							release_date_precision: "day",
							total_tracks: 2,
							type: "album",
							uri: "spotify:album:3wivyOdotHWZ9dcuXMjPKT",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/38EmEgXkgK51MT2tPY0EoC",
								},
								href:
									"https://api.spotify.com/v1/artists/38EmEgXkgK51MT2tPY0EoC",
								id: "38EmEgXkgK51MT2tPY0EoC",
								name: "Bobby Helms",
								type: "artist",
								uri: "spotify:artist:38EmEgXkgK51MT2tPY0EoC",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 130973,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USMC15746480" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/7vQbuQcyTflfCIOu3Uzzya",
						},
						href:
							"https://api.spotify.com/v1/tracks/7vQbuQcyTflfCIOu3Uzzya",
						id: "7vQbuQcyTflfCIOu3Uzzya",
						is_local: false,
						name: "Jingle Bell Rock",
						popularity: 86,
						preview_url:
							"https://p.scdn.co/mp3-preview/ce96f9dd0d449661668d7da3032a7a23571e8d02?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:7vQbuQcyTflfCIOu3Uzzya",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR",
									},
									href:
										"https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
									id: "66CXWjxzNUsdJxJ2JdwvnR",
									name: "Ariana Grande",
									type: "artist",
									uri:
										"spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3euz4vS7ezKGnNSwgyvKcd",
							},
							href:
								"https://api.spotify.com/v1/albums/3euz4vS7ezKGnNSwgyvKcd",
							id: "3euz4vS7ezKGnNSwgyvKcd",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2735ef878a782c987d38d82b605",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e025ef878a782c987d38d82b605",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048515ef878a782c987d38d82b605",
									width: 64,
								},
							],
							name: "Positions",
							release_date: "2020-10-30",
							release_date_precision: "day",
							total_tracks: 14,
							type: "album",
							uri: "spotify:album:3euz4vS7ezKGnNSwgyvKcd",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR",
								},
								href:
									"https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
								id: "66CXWjxzNUsdJxJ2JdwvnR",
								name: "Ariana Grande",
								type: "artist",
								uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 172324,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USUM72019412" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/35mvY5S1H3J2QZyna3TFe0",
						},
						href:
							"https://api.spotify.com/v1/tracks/35mvY5S1H3J2QZyna3TFe0",
						id: "35mvY5S1H3J2QZyna3TFe0",
						is_local: false,
						name: "positions",
						popularity: 97,
						preview_url:
							"https://p.scdn.co/mp3-preview/b43e087b54b33e2208712371f85f84e4e4a7052b?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 12,
						type: "track",
						uri: "spotify:track:35mvY5S1H3J2QZyna3TFe0",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/6fWVd57NKTalqvmjRd2t8Z",
									},
									href:
										"https://api.spotify.com/v1/artists/6fWVd57NKTalqvmjRd2t8Z",
									id: "6fWVd57NKTalqvmjRd2t8Z",
									name: "24kGoldn",
									type: "artist",
									uri:
										"spotify:artist:6fWVd57NKTalqvmjRd2t8Z",
								},
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/6ASri4ePR7RlsvIQgWPJpS",
									},
									href:
										"https://api.spotify.com/v1/artists/6ASri4ePR7RlsvIQgWPJpS",
									id: "6ASri4ePR7RlsvIQgWPJpS",
									name: "iann dior",
									type: "artist",
									uri:
										"spotify:artist:6ASri4ePR7RlsvIQgWPJpS",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/4YMnOf4a7obOcN1Gy2QEuM",
							},
							href:
								"https://api.spotify.com/v1/albums/4YMnOf4a7obOcN1Gy2QEuM",
							id: "4YMnOf4a7obOcN1Gy2QEuM",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273ff8c985ecb3b7c5f847be357",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02ff8c985ecb3b7c5f847be357",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851ff8c985ecb3b7c5f847be357",
									width: 64,
								},
							],
							name: "Mood (feat. iann dior)",
							release_date: "2020-07-24",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:4YMnOf4a7obOcN1Gy2QEuM",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/6fWVd57NKTalqvmjRd2t8Z",
								},
								href:
									"https://api.spotify.com/v1/artists/6fWVd57NKTalqvmjRd2t8Z",
								id: "6fWVd57NKTalqvmjRd2t8Z",
								name: "24kGoldn",
								type: "artist",
								uri: "spotify:artist:6fWVd57NKTalqvmjRd2t8Z",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/6ASri4ePR7RlsvIQgWPJpS",
								},
								href:
									"https://api.spotify.com/v1/artists/6ASri4ePR7RlsvIQgWPJpS",
								id: "6ASri4ePR7RlsvIQgWPJpS",
								name: "iann dior",
								type: "artist",
								uri: "spotify:artist:6ASri4ePR7RlsvIQgWPJpS",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 140525,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USQX92003025" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/3tjFYV6RSFtuktYl3ZtYcq",
						},
						href:
							"https://api.spotify.com/v1/tracks/3tjFYV6RSFtuktYl3ZtYcq",
						id: "3tjFYV6RSFtuktYl3ZtYcq",
						is_local: false,
						name: "Mood (feat. iann dior)",
						popularity: 98,
						preview_url:
							"https://p.scdn.co/mp3-preview/45cb08fdb67744ab7f1f172bb750e9c10415c37a?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:3tjFYV6RSFtuktYl3ZtYcq",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4sj6D0zlMOl25nprDJBiU9",
									},
									href:
										"https://api.spotify.com/v1/artists/4sj6D0zlMOl25nprDJBiU9",
									id: "4sj6D0zlMOl25nprDJBiU9",
									name: "Andy Williams",
									type: "artist",
									uri:
										"spotify:artist:4sj6D0zlMOl25nprDJBiU9",
								},
							],
							available_markets: [
								"BE",
								"DK",
								"HK",
								"IN",
								"IS",
								"LU",
								"MY",
								"NL",
								"SG",
								"TH",
								"TW",
								"US",
								"VN",
							],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/30eO7X0doSEWKhDLAFLMuW",
							},
							href:
								"https://api.spotify.com/v1/albums/30eO7X0doSEWKhDLAFLMuW",
							id: "30eO7X0doSEWKhDLAFLMuW",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273585897779cf3591ba0f07650",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02585897779cf3591ba0f07650",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851585897779cf3591ba0f07650",
									width: 64,
								},
							],
							name: "The Andy Williams Christmas Album",
							release_date: "1963",
							release_date_precision: "year",
							total_tracks: 12,
							type: "album",
							uri: "spotify:album:30eO7X0doSEWKhDLAFLMuW",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4sj6D0zlMOl25nprDJBiU9",
								},
								href:
									"https://api.spotify.com/v1/artists/4sj6D0zlMOl25nprDJBiU9",
								id: "4sj6D0zlMOl25nprDJBiU9",
								name: "Andy Williams",
								type: "artist",
								uri: "spotify:artist:4sj6D0zlMOl25nprDJBiU9",
							},
						],
						available_markets: [
							"HK",
							"IN",
							"MY",
							"SG",
							"TH",
							"TW",
							"US",
							"VN",
						],
						disc_number: 1,
						duration_ms: 151000,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USSM16300086" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/1IcR6RlgvDczfvoWJSSY2A",
						},
						href:
							"https://api.spotify.com/v1/tracks/1IcR6RlgvDczfvoWJSSY2A",
						id: "1IcR6RlgvDczfvoWJSSY2A",
						is_local: false,
						name: "It's the Most Wonderful Time of the Year",
						popularity: 66,
						preview_url:
							"https://p.scdn.co/mp3-preview/275c9394f2dce03245d4b6861eec4a40036ae82c?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 4,
						type: "track",
						uri: "spotify:track:1IcR6RlgvDczfvoWJSSY2A",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
									},
									href:
										"https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
									id: "1Xyo4u8uXC1ZmMpatF05PJ",
									name: "The Weeknd",
									type: "artist",
									uri:
										"spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj",
							},
							href:
								"https://api.spotify.com/v1/albums/4yP0hdKOZPNshxUOjY0cZj",
							id: "4yP0hdKOZPNshxUOjY0cZj",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36",
									width: 64,
								},
							],
							name: "After Hours",
							release_date: "2020-03-20",
							release_date_precision: "day",
							total_tracks: 14,
							type: "album",
							uri: "spotify:album:4yP0hdKOZPNshxUOjY0cZj",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
								},
								href:
									"https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
								id: "1Xyo4u8uXC1ZmMpatF05PJ",
								name: "The Weeknd",
								type: "artist",
								uri: "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 200040,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USUG11904206" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
						},
						href:
							"https://api.spotify.com/v1/tracks/0VjIjW4GlUZAMYd2vXMi3b",
						id: "0VjIjW4GlUZAMYd2vXMi3b",
						is_local: false,
						name: "Blinding Lights",
						popularity: 96,
						preview_url:
							"https://p.scdn.co/mp3-preview/2f860d8f53b4f34dbef1053890845a8a162fba82?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 9,
						type: "track",
						uri: "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla",
									},
									href:
										"https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla",
									id: "790FomKkXshlbRYZFtlgla",
									name: "KAROL G",
									type: "artist",
									uri:
										"spotify:artist:790FomKkXshlbRYZFtlgla",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/6LO6I2uJMkc0u7GHBYHa4Y",
							},
							href:
								"https://api.spotify.com/v1/albums/6LO6I2uJMkc0u7GHBYHa4Y",
							id: "6LO6I2uJMkc0u7GHBYHa4Y",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273a9c7357101e65ee6af3c3789",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02a9c7357101e65ee6af3c3789",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851a9c7357101e65ee6af3c3789",
									width: 64,
								},
							],
							name: "BICHOTA",
							release_date: "2020-10-23",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:6LO6I2uJMkc0u7GHBYHa4Y",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla",
								},
								href:
									"https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla",
								id: "790FomKkXshlbRYZFtlgla",
								name: "KAROL G",
								type: "artist",
								uri: "spotify:artist:790FomKkXshlbRYZFtlgla",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 178946,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USUM72019324" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/7vrJn5hDSXRmdXoR30KgF1",
						},
						href:
							"https://api.spotify.com/v1/tracks/7vrJn5hDSXRmdXoR30KgF1",
						id: "7vrJn5hDSXRmdXoR30KgF1",
						is_local: false,
						name: "BICHOTA",
						popularity: 94,
						preview_url:
							"https://p.scdn.co/mp3-preview/0e9b24d318d41a6ada394382f6c720961ff523d2?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:7vrJn5hDSXRmdXoR30KgF1",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
									},
									href:
										"https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
									id: "4q3ewBCX7sLwd24euuV69X",
									name: "Bad Bunny",
									type: "artist",
									uri:
										"spotify:artist:4q3ewBCX7sLwd24euuV69X",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2d9BCZeAAhiZWPpbX9aPCW",
							},
							href:
								"https://api.spotify.com/v1/albums/2d9BCZeAAhiZWPpbX9aPCW",
							id: "2d9BCZeAAhiZWPpbX9aPCW",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851005ee342f4eef2cc6e8436ab",
									width: 64,
								},
							],
							name: "EL ÚLTIMO TOUR DEL MUNDO",
							release_date: "2020-11-27",
							release_date_precision: "day",
							total_tracks: 16,
							type: "album",
							uri: "spotify:album:2d9BCZeAAhiZWPpbX9aPCW",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
								},
								href:
									"https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
								id: "4q3ewBCX7sLwd24euuV69X",
								name: "Bad Bunny",
								type: "artist",
								uri: "spotify:artist:4q3ewBCX7sLwd24euuV69X",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7ltDVBr6mKbRvohxheJ9h1",
								},
								href:
									"https://api.spotify.com/v1/artists/7ltDVBr6mKbRvohxheJ9h1",
								id: "7ltDVBr6mKbRvohxheJ9h1",
								name: "ROSALÍA",
								type: "artist",
								uri: "spotify:artist:7ltDVBr6mKbRvohxheJ9h1",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 203200,
						episode: false,
						explicit: false,
						external_ids: { isrc: "QMFME2066840" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/2XIc1pqjXV3Cr2BQUGNBck",
						},
						href:
							"https://api.spotify.com/v1/tracks/2XIc1pqjXV3Cr2BQUGNBck",
						id: "2XIc1pqjXV3Cr2BQUGNBck",
						is_local: false,
						name: "LA NOCHE DE ANOCHE",
						popularity: 91,
						preview_url:
							"https://p.scdn.co/mp3-preview/a98b639351290bdb69b865ad10c2e0f5dbe0c4cd?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 5,
						type: "track",
						uri: "spotify:track:2XIc1pqjXV3Cr2BQUGNBck",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/3BmGtnKgCSGYIUhmivXKWX",
									},
									href:
										"https://api.spotify.com/v1/artists/3BmGtnKgCSGYIUhmivXKWX",
									id: "3BmGtnKgCSGYIUhmivXKWX",
									name: "Kelly Clarkson",
									type: "artist",
									uri:
										"spotify:artist:3BmGtnKgCSGYIUhmivXKWX",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/0t70lpfTyHEv0uuq21fhdZ",
							},
							href:
								"https://api.spotify.com/v1/albums/0t70lpfTyHEv0uuq21fhdZ",
							id: "0t70lpfTyHEv0uuq21fhdZ",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2739fd0d700bdf33c9ebc42f429",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e029fd0d700bdf33c9ebc42f429",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048519fd0d700bdf33c9ebc42f429",
									width: 64,
								},
							],
							name: "Wrapped In Red",
							release_date: "2013-10-25",
							release_date_precision: "day",
							total_tracks: 16,
							type: "album",
							uri: "spotify:album:0t70lpfTyHEv0uuq21fhdZ",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/3BmGtnKgCSGYIUhmivXKWX",
								},
								href:
									"https://api.spotify.com/v1/artists/3BmGtnKgCSGYIUhmivXKWX",
								id: "3BmGtnKgCSGYIUhmivXKWX",
								name: "Kelly Clarkson",
								type: "artist",
								uri: "spotify:artist:3BmGtnKgCSGYIUhmivXKWX",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 229640,
						episode: false,
						explicit: false,
						external_ids: { isrc: "GBCTA1300103" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/3nAp4IvdMPPWEH9uuXFFV5",
						},
						href:
							"https://api.spotify.com/v1/tracks/3nAp4IvdMPPWEH9uuXFFV5",
						id: "3nAp4IvdMPPWEH9uuXFFV5",
						is_local: false,
						name: "Underneath the Tree",
						popularity: 86,
						preview_url:
							"https://p.scdn.co/mp3-preview/fe7e6cdab388c2f48c4719c9bc8bb2b094881186?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:3nAp4IvdMPPWEH9uuXFFV5",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
									},
									href:
										"https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
									id: "3Nrfpe0tUJi4K4DXYWgMUX",
									name: "BTS",
									type: "artist",
									uri:
										"spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2qehskW9lYGWfYb0xPZkrS",
							},
							href:
								"https://api.spotify.com/v1/albums/2qehskW9lYGWfYb0xPZkrS",
							id: "2qehskW9lYGWfYb0xPZkrS",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2733deb4b0115410a85afe31c29",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e023deb4b0115410a85afe31c29",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048513deb4b0115410a85afe31c29",
									width: 64,
								},
							],
							name: "BE",
							release_date: "2020-11-20",
							release_date_precision: "day",
							total_tracks: 8,
							type: "album",
							uri: "spotify:album:2qehskW9lYGWfYb0xPZkrS",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
								},
								href:
									"https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
								id: "3Nrfpe0tUJi4K4DXYWgMUX",
								name: "BTS",
								type: "artist",
								uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 199053,
						episode: false,
						explicit: false,
						external_ids: { isrc: "QM7282022872" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/4saklk6nie3yiGePpBwUoc",
						},
						href:
							"https://api.spotify.com/v1/tracks/4saklk6nie3yiGePpBwUoc",
						id: "4saklk6nie3yiGePpBwUoc",
						is_local: false,
						name: "Dynamite",
						popularity: 90,
						preview_url:
							"https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 8,
						type: "track",
						uri: "spotify:track:4saklk6nie3yiGePpBwUoc",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/6MPCFvOQv5cIGfw3jODMF0",
									},
									href:
										"https://api.spotify.com/v1/artists/6MPCFvOQv5cIGfw3jODMF0",
									id: "6MPCFvOQv5cIGfw3jODMF0",
									name: "Internet Money",
									type: "artist",
									uri:
										"spotify:artist:6MPCFvOQv5cIGfw3jODMF0",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2vGU0DOcfsDee0euvhl1iZ",
							},
							href:
								"https://api.spotify.com/v1/albums/2vGU0DOcfsDee0euvhl1iZ",
							id: "2vGU0DOcfsDee0euvhl1iZ",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2739ca0c952f130e28025209cf0",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e029ca0c952f130e28025209cf0",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048519ca0c952f130e28025209cf0",
									width: 64,
								},
							],
							name: "B4 The Storm",
							release_date: "2020-08-28",
							release_date_precision: "day",
							total_tracks: 17,
							type: "album",
							uri: "spotify:album:2vGU0DOcfsDee0euvhl1iZ",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/6MPCFvOQv5cIGfw3jODMF0",
								},
								href:
									"https://api.spotify.com/v1/artists/6MPCFvOQv5cIGfw3jODMF0",
								id: "6MPCFvOQv5cIGfw3jODMF0",
								name: "Internet Money",
								type: "artist",
								uri: "spotify:artist:6MPCFvOQv5cIGfw3jODMF0",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/2hlmm7s2ICUX0LVIhVFlZQ",
								},
								href:
									"https://api.spotify.com/v1/artists/2hlmm7s2ICUX0LVIhVFlZQ",
								id: "2hlmm7s2ICUX0LVIhVFlZQ",
								name: "Gunna",
								type: "artist",
								uri: "spotify:artist:2hlmm7s2ICUX0LVIhVFlZQ",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs",
								},
								href:
									"https://api.spotify.com/v1/artists/4Gso3d4CscCijv0lmajZWs",
								id: "4Gso3d4CscCijv0lmajZWs",
								name: "Don Toliver",
								type: "artist",
								uri: "spotify:artist:4Gso3d4CscCijv0lmajZWs",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7rkW85dBwwrJtlHRDkJDAC",
								},
								href:
									"https://api.spotify.com/v1/artists/7rkW85dBwwrJtlHRDkJDAC",
								id: "7rkW85dBwwrJtlHRDkJDAC",
								name: "NAV",
								type: "artist",
								uri: "spotify:artist:7rkW85dBwwrJtlHRDkJDAC",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 195428,
						episode: false,
						explicit: true,
						external_ids: { isrc: "QZJ842000368" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/7hxHWCCAIIxFLCzvDgnQHX",
						},
						href:
							"https://api.spotify.com/v1/tracks/7hxHWCCAIIxFLCzvDgnQHX",
						id: "7hxHWCCAIIxFLCzvDgnQHX",
						is_local: false,
						name: "Lemonade (feat. Gunna, Don Toliver & NAV)",
						popularity: 90,
						preview_url:
							"https://p.scdn.co/mp3-preview/f940980a94b5042faa490018cbd4725f3df29e48?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 17,
						type: "track",
						uri: "spotify:track:7hxHWCCAIIxFLCzvDgnQHX",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH",
									},
									href:
										"https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
									id: "6qqNVTkY8uBg9cP3Jd7DAH",
									name: "Billie Eilish",
									type: "artist",
									uri:
										"spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/5G58VVE9ub1KE01Mvbd8XM",
							},
							href:
								"https://api.spotify.com/v1/albums/5G58VVE9ub1KE01Mvbd8XM",
							id: "5G58VVE9ub1KE01Mvbd8XM",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273fec5ef9f3133aff71c525acc",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02fec5ef9f3133aff71c525acc",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851fec5ef9f3133aff71c525acc",
									width: 64,
								},
							],
							name: "Therefore I Am",
							release_date: "2020-11-12",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:5G58VVE9ub1KE01Mvbd8XM",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH",
								},
								href:
									"https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
								id: "6qqNVTkY8uBg9cP3Jd7DAH",
								name: "Billie Eilish",
								type: "artist",
								uri: "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 174321,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USUM72021500" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/54bFM56PmE4YLRnqpW6Tha",
						},
						href:
							"https://api.spotify.com/v1/tracks/54bFM56PmE4YLRnqpW6Tha",
						id: "54bFM56PmE4YLRnqpW6Tha",
						is_local: false,
						name: "Therefore I Am",
						popularity: 95,
						preview_url:
							"https://p.scdn.co/mp3-preview/3b0da18af46c421d4d5af7cfae137ed944606676?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:54bFM56PmE4YLRnqpW6Tha",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr",
									},
									href:
										"https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
									id: "7n2wHs1TKAczGzO7Dd2rGr",
									name: "Shawn Mendes",
									type: "artist",
									uri:
										"spotify:artist:7n2wHs1TKAczGzO7Dd2rGr",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3Lp4JKk2ZgNkybMRS3eZR5",
							},
							href:
								"https://api.spotify.com/v1/albums/3Lp4JKk2ZgNkybMRS3eZR5",
							id: "3Lp4JKk2ZgNkybMRS3eZR5",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27337a5a19e52f8260b3b158e55",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0237a5a19e52f8260b3b158e55",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485137a5a19e52f8260b3b158e55",
									width: 64,
								},
							],
							name: "Wonder",
							release_date: "2020-12-04",
							release_date_precision: "day",
							total_tracks: 14,
							type: "album",
							uri: "spotify:album:3Lp4JKk2ZgNkybMRS3eZR5",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr",
								},
								href:
									"https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
								id: "7n2wHs1TKAczGzO7Dd2rGr",
								name: "Shawn Mendes",
								type: "artist",
								uri: "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
								},
								href:
									"https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
								id: "1uNFoZAHBGtllmzznpCI3s",
								name: "Justin Bieber",
								type: "artist",
								uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 178994,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USUM72018810" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/1HbA4N1MiOsPthALesGFR1",
						},
						href:
							"https://api.spotify.com/v1/tracks/1HbA4N1MiOsPthALesGFR1",
						id: "1HbA4N1MiOsPthALesGFR1",
						is_local: false,
						name: "Monster (Shawn Mendes & Justin Bieber)",
						popularity: 71,
						preview_url:
							"https://p.scdn.co/mp3-preview/4dd5235a211bc72b7e644b65f41a026b7c1a9154?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 9,
						type: "track",
						uri: "spotify:track:1HbA4N1MiOsPthALesGFR1",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
									},
									href:
										"https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
									id: "1uNFoZAHBGtllmzznpCI3s",
									name: "Justin Bieber",
									type: "artist",
									uri:
										"spotify:artist:1uNFoZAHBGtllmzznpCI3s",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/63MKT9hwmiMFFdFp5SdB1p",
							},
							href:
								"https://api.spotify.com/v1/albums/63MKT9hwmiMFFdFp5SdB1p",
							id: "63MKT9hwmiMFFdFp5SdB1p",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2730315efc555d5a157b0392652",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e020315efc555d5a157b0392652",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048510315efc555d5a157b0392652",
									width: 64,
								},
							],
							name: "Under The Mistletoe (Deluxe Edition)",
							release_date: "2011-01-01",
							release_date_precision: "day",
							total_tracks: 15,
							type: "album",
							uri: "spotify:album:63MKT9hwmiMFFdFp5SdB1p",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
								},
								href:
									"https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
								id: "1uNFoZAHBGtllmzznpCI3s",
								name: "Justin Bieber",
								type: "artist",
								uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 182946,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USUM71116290" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/7xapw9Oy21WpfEcib2ErSA",
						},
						href:
							"https://api.spotify.com/v1/tracks/7xapw9Oy21WpfEcib2ErSA",
						id: "7xapw9Oy21WpfEcib2ErSA",
						is_local: false,
						name: "Mistletoe",
						popularity: 87,
						preview_url:
							"https://p.scdn.co/mp3-preview/9ab55efaf83e87c2cd61d540261b5c3c6b6a52bc?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:7xapw9Oy21WpfEcib2ErSA",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/49e4v89VmlDcFCMyDv9wQ9",
									},
									href:
										"https://api.spotify.com/v1/artists/49e4v89VmlDcFCMyDv9wQ9",
									id: "49e4v89VmlDcFCMyDv9wQ9",
									name: "Dean Martin",
									type: "artist",
									uri:
										"spotify:artist:49e4v89VmlDcFCMyDv9wQ9",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/5I48ENiZiaZZSOpec6PdS5",
							},
							href:
								"https://api.spotify.com/v1/albums/5I48ENiZiaZZSOpec6PdS5",
							id: "5I48ENiZiaZZSOpec6PdS5",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273e359bd02a639a4d01b8241ae",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02e359bd02a639a4d01b8241ae",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851e359bd02a639a4d01b8241ae",
									width: 64,
								},
							],
							name: "A Winter Romance",
							release_date: "1959-01-01",
							release_date_precision: "day",
							total_tracks: 12,
							type: "album",
							uri: "spotify:album:5I48ENiZiaZZSOpec6PdS5",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/49e4v89VmlDcFCMyDv9wQ9",
								},
								href:
									"https://api.spotify.com/v1/artists/49e4v89VmlDcFCMyDv9wQ9",
								id: "49e4v89VmlDcFCMyDv9wQ9",
								name: "Dean Martin",
								type: "artist",
								uri: "spotify:artist:49e4v89VmlDcFCMyDv9wQ9",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 117146,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USCA25900140" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/2uFaJJtFpPDc5Pa95XzTvg",
						},
						href:
							"https://api.spotify.com/v1/tracks/2uFaJJtFpPDc5Pa95XzTvg",
						id: "2uFaJJtFpPDc5Pa95XzTvg",
						is_local: false,
						name: "Let It Snow! Let It Snow! Let It Snow!",
						popularity: 88,
						preview_url:
							"https://p.scdn.co/mp3-preview/d878daf26e308daef4ed892af96e92fa103e5585?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:2uFaJJtFpPDc5Pa95XzTvg",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR",
									},
									href:
										"https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
									id: "66CXWjxzNUsdJxJ2JdwvnR",
									name: "Ariana Grande",
									type: "artist",
									uri:
										"spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3euz4vS7ezKGnNSwgyvKcd",
							},
							href:
								"https://api.spotify.com/v1/albums/3euz4vS7ezKGnNSwgyvKcd",
							id: "3euz4vS7ezKGnNSwgyvKcd",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2735ef878a782c987d38d82b605",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e025ef878a782c987d38d82b605",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048515ef878a782c987d38d82b605",
									width: 64,
								},
							],
							name: "Positions",
							release_date: "2020-10-30",
							release_date_precision: "day",
							total_tracks: 14,
							type: "album",
							uri: "spotify:album:3euz4vS7ezKGnNSwgyvKcd",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR",
								},
								href:
									"https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
								id: "66CXWjxzNUsdJxJ2JdwvnR",
								name: "Ariana Grande",
								type: "artist",
								uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 173710,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USUM72020423" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/6Im9k8u9iIzKMrmV7BWtlF",
						},
						href:
							"https://api.spotify.com/v1/tracks/6Im9k8u9iIzKMrmV7BWtlF",
						id: "6Im9k8u9iIzKMrmV7BWtlF",
						is_local: false,
						name: "34+35",
						popularity: 93,
						preview_url:
							"https://p.scdn.co/mp3-preview/bc3cc7b1c690fa35ce1848df4db41a3f080fcac5?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:6Im9k8u9iIzKMrmV7BWtlF",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/7K78lVZ8XzkjfRSI7570FF",
									},
									href:
										"https://api.spotify.com/v1/artists/7K78lVZ8XzkjfRSI7570FF",
									id: "7K78lVZ8XzkjfRSI7570FF",
									name: "José Feliciano",
									type: "artist",
									uri:
										"spotify:artist:7K78lVZ8XzkjfRSI7570FF",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/6leYmQzvQjlUtmpNIL9XYQ",
							},
							href:
								"https://api.spotify.com/v1/albums/6leYmQzvQjlUtmpNIL9XYQ",
							id: "6leYmQzvQjlUtmpNIL9XYQ",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27357db4e3ca6a227ed612ad0b8",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0257db4e3ca6a227ed612ad0b8",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485157db4e3ca6a227ed612ad0b8",
									width: 64,
								},
							],
							name: "My Name Is José Feliciano",
							release_date: "2001-09-24",
							release_date_precision: "day",
							total_tracks: 23,
							type: "album",
							uri: "spotify:album:6leYmQzvQjlUtmpNIL9XYQ",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7K78lVZ8XzkjfRSI7570FF",
								},
								href:
									"https://api.spotify.com/v1/artists/7K78lVZ8XzkjfRSI7570FF",
								id: "7K78lVZ8XzkjfRSI7570FF",
								name: "José Feliciano",
								type: "artist",
								uri: "spotify:artist:7K78lVZ8XzkjfRSI7570FF",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 182306,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USRC19900930" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/3qCeq0rWK67SoBDgFd2sId",
						},
						href:
							"https://api.spotify.com/v1/tracks/3qCeq0rWK67SoBDgFd2sId",
						id: "3qCeq0rWK67SoBDgFd2sId",
						is_local: false,
						name: "Feliz Navidad",
						popularity: 64,
						preview_url:
							"https://p.scdn.co/mp3-preview/8ddc0ad625048f7c5c0176ad4a3498e8d3a6051d?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 14,
						type: "track",
						uri: "spotify:track:3qCeq0rWK67SoBDgFd2sId",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/7CyeXFnOrfC1N6z4naIpgo",
									},
									href:
										"https://api.spotify.com/v1/artists/7CyeXFnOrfC1N6z4naIpgo",
									id: "7CyeXFnOrfC1N6z4naIpgo",
									name: "The Ronettes",
									type: "artist",
									uri:
										"spotify:artist:7CyeXFnOrfC1N6z4naIpgo",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3aYOF3HVkIr1IzhePfQS7s",
							},
							href:
								"https://api.spotify.com/v1/albums/3aYOF3HVkIr1IzhePfQS7s",
							id: "3aYOF3HVkIr1IzhePfQS7s",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2731f0d5a8ff630fd5944c3936d",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e021f0d5a8ff630fd5944c3936d",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048511f0d5a8ff630fd5944c3936d",
									width: 64,
								},
							],
							name: "Sleigh Ride",
							release_date: "2020-12-04",
							release_date_precision: "day",
							total_tracks: 15,
							type: "album",
							uri: "spotify:album:3aYOF3HVkIr1IzhePfQS7s",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7CyeXFnOrfC1N6z4naIpgo",
								},
								href:
									"https://api.spotify.com/v1/artists/7CyeXFnOrfC1N6z4naIpgo",
								id: "7CyeXFnOrfC1N6z4naIpgo",
								name: "The Ronettes",
								type: "artist",
								uri: "spotify:artist:7CyeXFnOrfC1N6z4naIpgo",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 181266,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USSM10905166" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/7fUYUcWy853HS8YJn0b3Sr",
						},
						href:
							"https://api.spotify.com/v1/tracks/7fUYUcWy853HS8YJn0b3Sr",
						id: "7fUYUcWy853HS8YJn0b3Sr",
						is_local: false,
						name: "Sleigh Ride",
						popularity: 56,
						preview_url:
							"https://p.scdn.co/mp3-preview/ad5b7393345153eeb306fa8e6a09a541b5c3449f?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:7fUYUcWy853HS8YJn0b3Sr",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/71UcB6UtI3juKDx2wsOaqn",
									},
									href:
										"https://api.spotify.com/v1/artists/71UcB6UtI3juKDx2wsOaqn",
									id: "71UcB6UtI3juKDx2wsOaqn",
									name: "Band Aid 20",
									type: "artist",
									uri:
										"spotify:artist:71UcB6UtI3juKDx2wsOaqn",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/0Q96oESySVI3gLFTkhttn5",
							},
							href:
								"https://api.spotify.com/v1/albums/0Q96oESySVI3gLFTkhttn5",
							id: "0Q96oESySVI3gLFTkhttn5",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2732f77772e5c981e44fc347e22",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e022f77772e5c981e44fc347e22",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048512f77772e5c981e44fc347e22",
									width: 64,
								},
							],
							name: "Do They Know It's Christmas?",
							release_date: "2004-01-01",
							release_date_precision: "day",
							total_tracks: 2,
							type: "album",
							uri: "spotify:album:0Q96oESySVI3gLFTkhttn5",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/35S20clEkkSNUo23ViaslZ",
								},
								href:
									"https://api.spotify.com/v1/artists/35S20clEkkSNUo23ViaslZ",
								id: "35S20clEkkSNUo23ViaslZ",
								name: "Band Aid",
								type: "artist",
								uri: "spotify:artist:35S20clEkkSNUo23ViaslZ",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 222533,
						episode: false,
						explicit: false,
						external_ids: { isrc: "GBF088400001" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/0247StOpd3AkeBQzANX4Zf",
						},
						href:
							"https://api.spotify.com/v1/tracks/0247StOpd3AkeBQzANX4Zf",
						id: "0247StOpd3AkeBQzANX4Zf",
						is_local: false,
						name: "Do They Know It's Christmas? - 1984 Version",
						popularity: 83,
						preview_url:
							"https://p.scdn.co/mp3-preview/3835e3971ec44875f62817dfe60e75b8caea3ab4?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:0247StOpd3AkeBQzANX4Zf",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/0eDvMgVFoNV3TpwtrVCoTj",
									},
									href:
										"https://api.spotify.com/v1/artists/0eDvMgVFoNV3TpwtrVCoTj",
									id: "0eDvMgVFoNV3TpwtrVCoTj",
									name: "Pop Smoke",
									type: "artist",
									uri:
										"spotify:artist:0eDvMgVFoNV3TpwtrVCoTj",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/7e7t0MCrNDcJZsPwUKjmOc",
							},
							href:
								"https://api.spotify.com/v1/albums/7e7t0MCrNDcJZsPwUKjmOc",
							id: "7e7t0MCrNDcJZsPwUKjmOc",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27377ada0863603903f57b34369",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0277ada0863603903f57b34369",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485177ada0863603903f57b34369",
									width: 64,
								},
							],
							name: "Shoot For The Stars Aim For The Moon",
							release_date: "2020-07-03",
							release_date_precision: "day",
							total_tracks: 19,
							type: "album",
							uri: "spotify:album:7e7t0MCrNDcJZsPwUKjmOc",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/0eDvMgVFoNV3TpwtrVCoTj",
								},
								href:
									"https://api.spotify.com/v1/artists/0eDvMgVFoNV3TpwtrVCoTj",
								id: "0eDvMgVFoNV3TpwtrVCoTj",
								name: "Pop Smoke",
								type: "artist",
								uri: "spotify:artist:0eDvMgVFoNV3TpwtrVCoTj",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 160000,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USUM72013339" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/1tkg4EHVoqnhR6iFEXb60y",
						},
						href:
							"https://api.spotify.com/v1/tracks/1tkg4EHVoqnhR6iFEXb60y",
						id: "1tkg4EHVoqnhR6iFEXb60y",
						is_local: false,
						name: "What You Know Bout Love",
						popularity: 95,
						preview_url:
							"https://p.scdn.co/mp3-preview/b9502b5583ea3ca81d3f7b2f3d862658510a923e?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 15,
						type: "track",
						uri: "spotify:track:1tkg4EHVoqnhR6iFEXb60y",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/5KEG7G8LDYlHgFDqZyEEs2",
									},
									href:
										"https://api.spotify.com/v1/artists/5KEG7G8LDYlHgFDqZyEEs2",
									id: "5KEG7G8LDYlHgFDqZyEEs2",
									name: "Chris Rea",
									type: "artist",
									uri:
										"spotify:artist:5KEG7G8LDYlHgFDqZyEEs2",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/5tR0alqUd1KMW37vPnsOC4",
							},
							href:
								"https://api.spotify.com/v1/albums/5tR0alqUd1KMW37vPnsOC4",
							id: "5tR0alqUd1KMW37vPnsOC4",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273efd8734b76a66f4dd36b88f7",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02efd8734b76a66f4dd36b88f7",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851efd8734b76a66f4dd36b88f7",
									width: 64,
								},
							],
							name:
								"Dancing with Strangers (Deluxe Edition, 2019 Remaster)",
							release_date: "1987-08-02",
							release_date_precision: "day",
							total_tracks: 28,
							type: "album",
							uri: "spotify:album:5tR0alqUd1KMW37vPnsOC4",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/5KEG7G8LDYlHgFDqZyEEs2",
								},
								href:
									"https://api.spotify.com/v1/artists/5KEG7G8LDYlHgFDqZyEEs2",
								id: "5KEG7G8LDYlHgFDqZyEEs2",
								name: "Chris Rea",
								type: "artist",
								uri: "spotify:artist:5KEG7G8LDYlHgFDqZyEEs2",
							},
						],
						available_markets: ["SE"],
						disc_number: 2,
						duration_ms: 241626,
						episode: false,
						explicit: false,
						external_ids: { isrc: "GBAHS1900389" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/27qAMKrDdKEs8HDXcvR24R",
						},
						href:
							"https://api.spotify.com/v1/tracks/27qAMKrDdKEs8HDXcvR24R",
						id: "27qAMKrDdKEs8HDXcvR24R",
						is_local: false,
						name: "Driving Home for Christmas - 2019 Remaster",
						popularity: 78,
						preview_url:
							"https://p.scdn.co/mp3-preview/114fcc0fb9b13aab4db14277a1d4f05e1a4fb21d?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 17,
						type: "track",
						uri: "spotify:track:27qAMKrDdKEs8HDXcvR24R",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1GxkXlMwML1oSg5eLPiAz3",
									},
									href:
										"https://api.spotify.com/v1/artists/1GxkXlMwML1oSg5eLPiAz3",
									id: "1GxkXlMwML1oSg5eLPiAz3",
									name: "Michael Bublé",
									type: "artist",
									uri:
										"spotify:artist:1GxkXlMwML1oSg5eLPiAz3",
								},
							],
							available_markets: ["CA", "US", "ZA"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3CKVXhODttZebJAzjUs2un",
							},
							href:
								"https://api.spotify.com/v1/albums/3CKVXhODttZebJAzjUs2un",
							id: "3CKVXhODttZebJAzjUs2un",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27395517befb15ad5d63af701ab",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0295517befb15ad5d63af701ab",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485195517befb15ad5d63af701ab",
									width: 64,
								},
							],
							name: "Christmas",
							release_date: "2011-10-14",
							release_date_precision: "day",
							total_tracks: 16,
							type: "album",
							uri: "spotify:album:3CKVXhODttZebJAzjUs2un",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1GxkXlMwML1oSg5eLPiAz3",
								},
								href:
									"https://api.spotify.com/v1/artists/1GxkXlMwML1oSg5eLPiAz3",
								id: "1GxkXlMwML1oSg5eLPiAz3",
								name: "Michael Bublé",
								type: "artist",
								uri: "spotify:artist:1GxkXlMwML1oSg5eLPiAz3",
							},
						],
						available_markets: ["CA", "US", "ZA"],
						disc_number: 1,
						duration_ms: 119786,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USRE11100705" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/6tjituizSxwSmBB5vtgHZE",
						},
						href:
							"https://api.spotify.com/v1/tracks/6tjituizSxwSmBB5vtgHZE",
						id: "6tjituizSxwSmBB5vtgHZE",
						is_local: false,
						name: "Holly Jolly Christmas",
						popularity: 74,
						preview_url:
							"https://p.scdn.co/mp3-preview/f7962fe13e7e25fcc1963373acf61d289bbcdf6d?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 6,
						type: "track",
						uri: "spotify:track:6tjituizSxwSmBB5vtgHZE",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1Mxqyy3pSjf8kZZL4QVxS0",
									},
									href:
										"https://api.spotify.com/v1/artists/1Mxqyy3pSjf8kZZL4QVxS0",
									id: "1Mxqyy3pSjf8kZZL4QVxS0",
									name: "Frank Sinatra",
									type: "artist",
									uri:
										"spotify:artist:1Mxqyy3pSjf8kZZL4QVxS0",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/4XbPmVHP7EYBMoE7ZVjKCU",
							},
							href:
								"https://api.spotify.com/v1/albums/4XbPmVHP7EYBMoE7ZVjKCU",
							id: "4XbPmVHP7EYBMoE7ZVjKCU",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273df1066335619efa75889bcfc",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02df1066335619efa75889bcfc",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851df1066335619efa75889bcfc",
									width: 64,
								},
							],
							name: "Christmas Songs by Sinatra",
							release_date: "1994-11-08",
							release_date_precision: "day",
							total_tracks: 14,
							type: "album",
							uri: "spotify:album:4XbPmVHP7EYBMoE7ZVjKCU",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1Mxqyy3pSjf8kZZL4QVxS0",
								},
								href:
									"https://api.spotify.com/v1/artists/1Mxqyy3pSjf8kZZL4QVxS0",
								id: "1Mxqyy3pSjf8kZZL4QVxS0",
								name: "Frank Sinatra",
								type: "artist",
								uri: "spotify:artist:1Mxqyy3pSjf8kZZL4QVxS0",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/0JXiS2FrAg3wQYJHcmZdrc",
								},
								href:
									"https://api.spotify.com/v1/artists/0JXiS2FrAg3wQYJHcmZdrc",
								id: "0JXiS2FrAg3wQYJHcmZdrc",
								name: "B. Swanson Quartet",
								type: "artist",
								uri: "spotify:artist:0JXiS2FrAg3wQYJHcmZdrc",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 155453,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USSM10018232" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/4kKdvXD0ez7jp1296JmAts",
						},
						href:
							"https://api.spotify.com/v1/tracks/4kKdvXD0ez7jp1296JmAts",
						id: "4kKdvXD0ez7jp1296JmAts",
						is_local: false,
						name:
							"Let It Snow! Let It Snow! Let It Snow! (with The B. Swanson Quartet)",
						popularity: 87,
						preview_url:
							"https://p.scdn.co/mp3-preview/24967430de70def58c96aff0e4a4a0449bcd1127?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 10,
						type: "track",
						uri: "spotify:track:4kKdvXD0ez7jp1296JmAts",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1r4hJ1h58CWwUQe3MxPuau",
									},
									href:
										"https://api.spotify.com/v1/artists/1r4hJ1h58CWwUQe3MxPuau",
									id: "1r4hJ1h58CWwUQe3MxPuau",
									name: "Maluma",
									type: "artist",
									uri:
										"spotify:artist:1r4hJ1h58CWwUQe3MxPuau",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/0p2yf6DucEgvj8Uk8KXJJv",
							},
							href:
								"https://api.spotify.com/v1/albums/0p2yf6DucEgvj8Uk8KXJJv",
							id: "0p2yf6DucEgvj8Uk8KXJJv",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27387d15f78ec75621d40028baf",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0287d15f78ec75621d40028baf",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485187d15f78ec75621d40028baf",
									width: 64,
								},
							],
							name: "PAPI JUANCHO",
							release_date: "2020-08-21",
							release_date_precision: "day",
							total_tracks: 22,
							type: "album",
							uri: "spotify:album:0p2yf6DucEgvj8Uk8KXJJv",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1r4hJ1h58CWwUQe3MxPuau",
								},
								href:
									"https://api.spotify.com/v1/artists/1r4hJ1h58CWwUQe3MxPuau",
								id: "1r4hJ1h58CWwUQe3MxPuau",
								name: "Maluma",
								type: "artist",
								uri: "spotify:artist:1r4hJ1h58CWwUQe3MxPuau",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 199112,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USSD12000190" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/1yoMvmasuxZfqHEipJhRbp",
						},
						href:
							"https://api.spotify.com/v1/tracks/1yoMvmasuxZfqHEipJhRbp",
						id: "1yoMvmasuxZfqHEipJhRbp",
						is_local: false,
						name: "Hawái",
						popularity: 88,
						preview_url:
							"https://p.scdn.co/mp3-preview/e043d8462ac34889dde62ab064325d9cb55f8d32?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 3,
						type: "track",
						uri: "spotify:track:1yoMvmasuxZfqHEipJhRbp",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4STHEaNw4mPZ2tzheohgXB",
									},
									href:
										"https://api.spotify.com/v1/artists/4STHEaNw4mPZ2tzheohgXB",
									id: "4STHEaNw4mPZ2tzheohgXB",
									name: "Paul McCartney",
									type: "artist",
									uri:
										"spotify:artist:4STHEaNw4mPZ2tzheohgXB",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/48rypPDKdKiusMXKaYcEGV",
							},
							href:
								"https://api.spotify.com/v1/albums/48rypPDKdKiusMXKaYcEGV",
							id: "48rypPDKdKiusMXKaYcEGV",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2733cef016d13d82873d45af84a",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e023cef016d13d82873d45af84a",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048513cef016d13d82873d45af84a",
									width: 64,
								},
							],
							name: "McCartney II (Special Edition)",
							release_date: "1980-05-16",
							release_date_precision: "day",
							total_tracks: 19,
							type: "album",
							uri: "spotify:album:48rypPDKdKiusMXKaYcEGV",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4STHEaNw4mPZ2tzheohgXB",
								},
								href:
									"https://api.spotify.com/v1/artists/4STHEaNw4mPZ2tzheohgXB",
								id: "4STHEaNw4mPZ2tzheohgXB",
								name: "Paul McCartney",
								type: "artist",
								uri: "spotify:artist:4STHEaNw4mPZ2tzheohgXB",
							},
						],
						available_markets: ["SE"],
						disc_number: 2,
						duration_ms: 227653,
						episode: false,
						explicit: false,
						external_ids: { isrc: "GBCCS1000219" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/1SV1fxF65n9NhRHp3KlBuu",
						},
						href:
							"https://api.spotify.com/v1/tracks/1SV1fxF65n9NhRHp3KlBuu",
						id: "1SV1fxF65n9NhRHp3KlBuu",
						is_local: false,
						name:
							"Wonderful Christmastime - Edited Version / Remastered 2011",
						popularity: 86,
						preview_url:
							"https://p.scdn.co/mp3-preview/c1668e803aaaf36025f89bbec35cd43da6cccb5d?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 7,
						type: "track",
						uri: "spotify:track:1SV1fxF65n9NhRHp3KlBuu",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4kYSro6naA4h99UJvo89HB",
									},
									href:
										"https://api.spotify.com/v1/artists/4kYSro6naA4h99UJvo89HB",
									id: "4kYSro6naA4h99UJvo89HB",
									name: "Cardi B",
									type: "artist",
									uri:
										"spotify:artist:4kYSro6naA4h99UJvo89HB",
								},
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK",
									},
									href:
										"https://api.spotify.com/v1/artists/181bsRPaVXVlUKXrxwZfHK",
									id: "181bsRPaVXVlUKXrxwZfHK",
									name: "Megan Thee Stallion",
									type: "artist",
									uri:
										"spotify:artist:181bsRPaVXVlUKXrxwZfHK",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2ogiazbrNEx0kQHGl5ZBTQ",
							},
							href:
								"https://api.spotify.com/v1/albums/2ogiazbrNEx0kQHGl5ZBTQ",
							id: "2ogiazbrNEx0kQHGl5ZBTQ",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273c450c89d3eb750d3535b0a0c",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02c450c89d3eb750d3535b0a0c",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851c450c89d3eb750d3535b0a0c",
									width: 64,
								},
							],
							name: "WAP (feat. Megan Thee Stallion)",
							release_date: "2020-08-07",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:2ogiazbrNEx0kQHGl5ZBTQ",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4kYSro6naA4h99UJvo89HB",
								},
								href:
									"https://api.spotify.com/v1/artists/4kYSro6naA4h99UJvo89HB",
								id: "4kYSro6naA4h99UJvo89HB",
								name: "Cardi B",
								type: "artist",
								uri: "spotify:artist:4kYSro6naA4h99UJvo89HB",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK",
								},
								href:
									"https://api.spotify.com/v1/artists/181bsRPaVXVlUKXrxwZfHK",
								id: "181bsRPaVXVlUKXrxwZfHK",
								name: "Megan Thee Stallion",
								type: "artist",
								uri: "spotify:artist:181bsRPaVXVlUKXrxwZfHK",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 187541,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USAT22005111" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/4Oun2ylbjFKMPTiaSbbCih",
						},
						href:
							"https://api.spotify.com/v1/tracks/4Oun2ylbjFKMPTiaSbbCih",
						id: "4Oun2ylbjFKMPTiaSbbCih",
						is_local: false,
						name: "WAP (feat. Megan Thee Stallion)",
						popularity: 95,
						preview_url:
							"https://p.scdn.co/mp3-preview/1ca9e7769467092ff12a0aee336488ce1b53501c?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:4Oun2ylbjFKMPTiaSbbCih",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3",
									},
									href:
										"https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3",
									id: "6KImCVD70vtIoJWnq6nGn3",
									name: "Harry Styles",
									type: "artist",
									uri:
										"spotify:artist:6KImCVD70vtIoJWnq6nGn3",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/7xV2TzoaVc0ycW7fwBwAml",
							},
							href:
								"https://api.spotify.com/v1/albums/7xV2TzoaVc0ycW7fwBwAml",
							id: "7xV2TzoaVc0ycW7fwBwAml",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0277fdcfda6535601aff081b6a",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485177fdcfda6535601aff081b6a",
									width: 64,
								},
							],
							name: "Fine Line",
							release_date: "2019-12-13",
							release_date_precision: "day",
							total_tracks: 12,
							type: "album",
							uri: "spotify:album:7xV2TzoaVc0ycW7fwBwAml",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3",
								},
								href:
									"https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3",
								id: "6KImCVD70vtIoJWnq6nGn3",
								name: "Harry Styles",
								type: "artist",
								uri: "spotify:artist:6KImCVD70vtIoJWnq6nGn3",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 174000,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USSM11912587" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY",
						},
						href:
							"https://api.spotify.com/v1/tracks/6UelLqGlWMcVH1E5c4H7lY",
						id: "6UelLqGlWMcVH1E5c4H7lY",
						is_local: false,
						name: "Watermelon Sugar",
						popularity: 93,
						preview_url:
							"https://p.scdn.co/mp3-preview/0c51b5f7ed852504844feebfb4f4b7f099452662?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:6UelLqGlWMcVH1E5c4H7lY",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "compilation",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4x1nvY2FN8jxqAFA0DA02H",
									},
									href:
										"https://api.spotify.com/v1/artists/4x1nvY2FN8jxqAFA0DA02H",
									id: "4x1nvY2FN8jxqAFA0DA02H",
									name: "John Lennon",
									type: "artist",
									uri:
										"spotify:artist:4x1nvY2FN8jxqAFA0DA02H",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/555NIhJIQ4XoS5N7VglF0v",
							},
							href:
								"https://api.spotify.com/v1/albums/555NIhJIQ4XoS5N7VglF0v",
							id: "555NIhJIQ4XoS5N7VglF0v",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27361a389971d7842d02b0623ab",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0261a389971d7842d02b0623ab",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485161a389971d7842d02b0623ab",
									width: 64,
								},
							],
							name: "Signature Box",
							release_date: "2010-10-05",
							release_date_precision: "day",
							total_tracks: 119,
							type: "album",
							uri: "spotify:album:555NIhJIQ4XoS5N7VglF0v",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4x1nvY2FN8jxqAFA0DA02H",
								},
								href:
									"https://api.spotify.com/v1/artists/4x1nvY2FN8jxqAFA0DA02H",
								id: "4x1nvY2FN8jxqAFA0DA02H",
								name: "John Lennon",
								type: "artist",
								uri: "spotify:artist:4x1nvY2FN8jxqAFA0DA02H",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/2s4tjL6W3qrblOe0raIzwJ",
								},
								href:
									"https://api.spotify.com/v1/artists/2s4tjL6W3qrblOe0raIzwJ",
								id: "2s4tjL6W3qrblOe0raIzwJ",
								name: "Yoko Ono",
								type: "artist",
								uri: "spotify:artist:2s4tjL6W3qrblOe0raIzwJ",
							},
						],
						available_markets: ["SE"],
						disc_number: 10,
						duration_ms: 214333,
						episode: false,
						explicit: false,
						external_ids: { isrc: "GBAYE1000862" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/27RYrbL6S02LNVhDWVl38b",
						},
						href:
							"https://api.spotify.com/v1/tracks/27RYrbL6S02LNVhDWVl38b",
						id: "27RYrbL6S02LNVhDWVl38b",
						is_local: false,
						name: "Happy Xmas (War Is Over) - Remastered 2010",
						popularity: 85,
						preview_url:
							"https://p.scdn.co/mp3-preview/605be9aa91c3923560010bdf17297e322a6c9cd7?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:27RYrbL6S02LNVhDWVl38b",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
									},
									href:
										"https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
									id: "1uNFoZAHBGtllmzznpCI3s",
									name: "Justin Bieber",
									type: "artist",
									uri:
										"spotify:artist:1uNFoZAHBGtllmzznpCI3s",
								},
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/5CiGnKThu5ctn9pBxv7DGa",
									},
									href:
										"https://api.spotify.com/v1/artists/5CiGnKThu5ctn9pBxv7DGa",
									id: "5CiGnKThu5ctn9pBxv7DGa",
									name: "benny blanco",
									type: "artist",
									uri:
										"spotify:artist:5CiGnKThu5ctn9pBxv7DGa",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3P5WIUJO0Ots1lQx09TOxk",
							},
							href:
								"https://api.spotify.com/v1/albums/3P5WIUJO0Ots1lQx09TOxk",
							id: "3P5WIUJO0Ots1lQx09TOxk",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27383b22beb73e2014b20159685",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0283b22beb73e2014b20159685",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485183b22beb73e2014b20159685",
									width: 64,
								},
							],
							name: "Lonely (with benny blanco)",
							release_date: "2020-10-16",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:3P5WIUJO0Ots1lQx09TOxk",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
								},
								href:
									"https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
								id: "1uNFoZAHBGtllmzznpCI3s",
								name: "Justin Bieber",
								type: "artist",
								uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/5CiGnKThu5ctn9pBxv7DGa",
								},
								href:
									"https://api.spotify.com/v1/artists/5CiGnKThu5ctn9pBxv7DGa",
								id: "5CiGnKThu5ctn9pBxv7DGa",
								name: "benny blanco",
								type: "artist",
								uri: "spotify:artist:5CiGnKThu5ctn9pBxv7DGa",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 149297,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USUM72019170" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/4y4spB9m0Q6026KfkAvy9Q",
						},
						href:
							"https://api.spotify.com/v1/tracks/4y4spB9m0Q6026KfkAvy9Q",
						id: "4y4spB9m0Q6026KfkAvy9Q",
						is_local: false,
						name: "Lonely (with benny blanco)",
						popularity: 95,
						preview_url:
							"https://p.scdn.co/mp3-preview/375df25b157b92d7a25a77b5114033904eba11bc?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:4y4spB9m0Q6026KfkAvy9Q",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6",
									},
									href:
										"https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6",
									id: "5YGY8feqx7naU7z4HrwZM6",
									name: "Miley Cyrus",
									type: "artist",
									uri:
										"spotify:artist:5YGY8feqx7naU7z4HrwZM6",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/5BRhg6NSEZOj0BR6Iz56fR",
							},
							href:
								"https://api.spotify.com/v1/albums/5BRhg6NSEZOj0BR6Iz56fR",
							id: "5BRhg6NSEZOj0BR6Iz56fR",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2738cffb7c6c40759eaf8a5a142",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e028cffb7c6c40759eaf8a5a142",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048518cffb7c6c40759eaf8a5a142",
									width: 64,
								},
							],
							name: "Plastic Hearts",
							release_date: "2020-11-27",
							release_date_precision: "day",
							total_tracks: 15,
							type: "album",
							uri: "spotify:album:5BRhg6NSEZOj0BR6Iz56fR",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6",
								},
								href:
									"https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6",
								id: "5YGY8feqx7naU7z4HrwZM6",
								name: "Miley Cyrus",
								type: "artist",
								uri: "spotify:artist:5YGY8feqx7naU7z4HrwZM6",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we",
								},
								href:
									"https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
								id: "6M2wZ9GZgrQXHCFfjv46we",
								name: "Dua Lipa",
								type: "artist",
								uri: "spotify:artist:6M2wZ9GZgrQXHCFfjv46we",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 169333,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USRC12003364" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/2Oycxb8QbPkpHTo8ZrmG0B",
						},
						href:
							"https://api.spotify.com/v1/tracks/2Oycxb8QbPkpHTo8ZrmG0B",
						id: "2Oycxb8QbPkpHTo8ZrmG0B",
						is_local: false,
						name: "Prisoner (feat. Dua Lipa)",
						popularity: 80,
						preview_url:
							"https://p.scdn.co/mp3-preview/993e160238e38b9d7f62106bf974228af84d7d48?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 4,
						type: "track",
						uri: "spotify:track:2Oycxb8QbPkpHTo8ZrmG0B",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
									},
									href:
										"https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
									id: "4q3ewBCX7sLwd24euuV69X",
									name: "Bad Bunny",
									type: "artist",
									uri:
										"spotify:artist:4q3ewBCX7sLwd24euuV69X",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2d9BCZeAAhiZWPpbX9aPCW",
							},
							href:
								"https://api.spotify.com/v1/albums/2d9BCZeAAhiZWPpbX9aPCW",
							id: "2d9BCZeAAhiZWPpbX9aPCW",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851005ee342f4eef2cc6e8436ab",
									width: 64,
								},
							],
							name: "EL ÚLTIMO TOUR DEL MUNDO",
							release_date: "2020-11-27",
							release_date_precision: "day",
							total_tracks: 16,
							type: "album",
							uri: "spotify:album:2d9BCZeAAhiZWPpbX9aPCW",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
								},
								href:
									"https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
								id: "4q3ewBCX7sLwd24euuV69X",
								name: "Bad Bunny",
								type: "artist",
								uri: "spotify:artist:4q3ewBCX7sLwd24euuV69X",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 130013,
						episode: false,
						explicit: true,
						external_ids: { isrc: "QMFME2066837" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/5RubKOuDoPn5Kj5TLVxSxY",
						},
						href:
							"https://api.spotify.com/v1/tracks/5RubKOuDoPn5Kj5TLVxSxY",
						id: "5RubKOuDoPn5Kj5TLVxSxY",
						is_local: false,
						name: "TE MUDASTE",
						popularity: 89,
						preview_url:
							"https://p.scdn.co/mp3-preview/4b2612fb7d969678d72d61908b62b73d592a737e?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:5RubKOuDoPn5Kj5TLVxSxY",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/7arQA31aZVS8yS6zUveWzb",
									},
									href:
										"https://api.spotify.com/v1/artists/7arQA31aZVS8yS6zUveWzb",
									id: "7arQA31aZVS8yS6zUveWzb",
									name: "CJ",
									type: "artist",
									uri:
										"spotify:artist:7arQA31aZVS8yS6zUveWzb",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/5oBYG6dEI2Er6EeLnmonGE",
							},
							href:
								"https://api.spotify.com/v1/albums/5oBYG6dEI2Er6EeLnmonGE",
							id: "5oBYG6dEI2Er6EeLnmonGE",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2739ad6e9cfa9573b5933d3f9bb",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e029ad6e9cfa9573b5933d3f9bb",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048519ad6e9cfa9573b5933d3f9bb",
									width: 64,
								},
							],
							name: "Whoopty",
							release_date: "2020-08-20",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:5oBYG6dEI2Er6EeLnmonGE",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7arQA31aZVS8yS6zUveWzb",
								},
								href:
									"https://api.spotify.com/v1/artists/7arQA31aZVS8yS6zUveWzb",
								id: "7arQA31aZVS8yS6zUveWzb",
								name: "CJ",
								type: "artist",
								uri: "spotify:artist:7arQA31aZVS8yS6zUveWzb",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 123428,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USA2P2031043" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/5vGLcdRuSbUhD8ScwsGSdA",
						},
						href:
							"https://api.spotify.com/v1/tracks/5vGLcdRuSbUhD8ScwsGSdA",
						id: "5vGLcdRuSbUhD8ScwsGSdA",
						is_local: false,
						name: "Whoopty",
						popularity: 89,
						preview_url:
							"https://p.scdn.co/mp3-preview/baeb671e7f235d4a7a1a2fbb9b1d49dc48715b44?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:5vGLcdRuSbUhD8ScwsGSdA",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/45dkTj5sMRSjrmBSBeiHym",
									},
									href:
										"https://api.spotify.com/v1/artists/45dkTj5sMRSjrmBSBeiHym",
									id: "45dkTj5sMRSjrmBSBeiHym",
									name: "Tate McRae",
									type: "artist",
									uri:
										"spotify:artist:45dkTj5sMRSjrmBSBeiHym",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/1RWiRfdNZKDe8VXzzf2VEc",
							},
							href:
								"https://api.spotify.com/v1/albums/1RWiRfdNZKDe8VXzzf2VEc",
							id: "1RWiRfdNZKDe8VXzzf2VEc",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2730c2c97099fd6a637ed0aa4a4",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e020c2c97099fd6a637ed0aa4a4",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048510c2c97099fd6a637ed0aa4a4",
									width: 64,
								},
							],
							name: "you broke me first",
							release_date: "2020-04-17",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:1RWiRfdNZKDe8VXzzf2VEc",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/45dkTj5sMRSjrmBSBeiHym",
								},
								href:
									"https://api.spotify.com/v1/artists/45dkTj5sMRSjrmBSBeiHym",
								id: "45dkTj5sMRSjrmBSBeiHym",
								name: "Tate McRae",
								type: "artist",
								uri: "spotify:artist:45dkTj5sMRSjrmBSBeiHym",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 169265,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USRC12000832" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/45bE4HXI0AwGZXfZtMp8JR",
						},
						href:
							"https://api.spotify.com/v1/tracks/45bE4HXI0AwGZXfZtMp8JR",
						id: "45bE4HXI0AwGZXfZtMp8JR",
						is_local: false,
						name: "you broke me first",
						popularity: 94,
						preview_url:
							"https://p.scdn.co/mp3-preview/47afb10323067e827310e5898e4d52c8bdbe72ee?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:45bE4HXI0AwGZXfZtMp8JR",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq",
									},
									href:
										"https://api.spotify.com/v1/artists/7jVv8c5Fj3E9VhNjxT4snq",
									id: "7jVv8c5Fj3E9VhNjxT4snq",
									name: "Lil Nas X",
									type: "artist",
									uri:
										"spotify:artist:7jVv8c5Fj3E9VhNjxT4snq",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/4EvukZrmNBiqJbs3LwOSHu",
							},
							href:
								"https://api.spotify.com/v1/albums/4EvukZrmNBiqJbs3LwOSHu",
							id: "4EvukZrmNBiqJbs3LwOSHu",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2736771a05f34d77e5fc2bde64c",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e026771a05f34d77e5fc2bde64c",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048516771a05f34d77e5fc2bde64c",
									width: 64,
								},
							],
							name: "HOLIDAY",
							release_date: "2020-11-13",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:4EvukZrmNBiqJbs3LwOSHu",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq",
								},
								href:
									"https://api.spotify.com/v1/artists/7jVv8c5Fj3E9VhNjxT4snq",
								id: "7jVv8c5Fj3E9VhNjxT4snq",
								name: "Lil Nas X",
								type: "artist",
								uri: "spotify:artist:7jVv8c5Fj3E9VhNjxT4snq",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 154997,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USSM12006375" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/6zFMeegAMYQo0mt8rXtrli",
						},
						href:
							"https://api.spotify.com/v1/tracks/6zFMeegAMYQo0mt8rXtrli",
						id: "6zFMeegAMYQo0mt8rXtrli",
						is_local: false,
						name: "HOLIDAY",
						popularity: 90,
						preview_url:
							"https://p.scdn.co/mp3-preview/1a3815e2255842f57ffccc5941dba4ab95153167?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:6zFMeegAMYQo0mt8rXtrli",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk",
									},
									href:
										"https://api.spotify.com/v1/artists/4r63FhuTkUYltbVAg5TQnk",
									id: "4r63FhuTkUYltbVAg5TQnk",
									name: "DaBaby",
									type: "artist",
									uri:
										"spotify:artist:4r63FhuTkUYltbVAg5TQnk",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/623PL2MBg50Br5dLXC9E9e",
							},
							href:
								"https://api.spotify.com/v1/albums/623PL2MBg50Br5dLXC9E9e",
							id: "623PL2MBg50Br5dLXC9E9e",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27320e08c8cc23f404d723b5647",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0220e08c8cc23f404d723b5647",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485120e08c8cc23f404d723b5647",
									width: 64,
								},
							],
							name: "BLAME IT ON BABY",
							release_date: "2020-04-17",
							release_date_precision: "day",
							total_tracks: 13,
							type: "album",
							uri: "spotify:album:623PL2MBg50Br5dLXC9E9e",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk",
								},
								href:
									"https://api.spotify.com/v1/artists/4r63FhuTkUYltbVAg5TQnk",
								id: "4r63FhuTkUYltbVAg5TQnk",
								name: "DaBaby",
								type: "artist",
								uri: "spotify:artist:4r63FhuTkUYltbVAg5TQnk",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/757aE44tKEUQEqRuT6GnEB",
								},
								href:
									"https://api.spotify.com/v1/artists/757aE44tKEUQEqRuT6GnEB",
								id: "757aE44tKEUQEqRuT6GnEB",
								name: "Roddy Ricch",
								type: "artist",
								uri: "spotify:artist:757aE44tKEUQEqRuT6GnEB",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 181733,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USUM72007941" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/7ytR5pFWmSjzHJIeQkgog4",
						},
						href:
							"https://api.spotify.com/v1/tracks/7ytR5pFWmSjzHJIeQkgog4",
						id: "7ytR5pFWmSjzHJIeQkgog4",
						is_local: false,
						name: "ROCKSTAR (feat. Roddy Ricch)",
						popularity: 93,
						preview_url:
							"https://p.scdn.co/mp3-preview/187c800ce2279e1d8966b0a5fd8a9dabf6acd5c4?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 7,
						type: "track",
						uri: "spotify:track:7ytR5pFWmSjzHJIeQkgog4",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
									},
									href:
										"https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
									id: "3Nrfpe0tUJi4K4DXYWgMUX",
									name: "BTS",
									type: "artist",
									uri:
										"spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2qehskW9lYGWfYb0xPZkrS",
							},
							href:
								"https://api.spotify.com/v1/albums/2qehskW9lYGWfYb0xPZkrS",
							id: "2qehskW9lYGWfYb0xPZkrS",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b2733deb4b0115410a85afe31c29",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e023deb4b0115410a85afe31c29",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d000048513deb4b0115410a85afe31c29",
									width: 64,
								},
							],
							name: "BE",
							release_date: "2020-11-20",
							release_date_precision: "day",
							total_tracks: 8,
							type: "album",
							uri: "spotify:album:2qehskW9lYGWfYb0xPZkrS",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
								},
								href:
									"https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
								id: "3Nrfpe0tUJi4K4DXYWgMUX",
								name: "BTS",
								type: "artist",
								uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 207481,
						episode: false,
						explicit: false,
						external_ids: { isrc: "QMBZ92051791" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/249gnXrbfmV8NG6jTEMSwD",
						},
						href:
							"https://api.spotify.com/v1/tracks/249gnXrbfmV8NG6jTEMSwD",
						id: "249gnXrbfmV8NG6jTEMSwD",
						is_local: false,
						name: "Life Goes On",
						popularity: 95,
						preview_url:
							"https://p.scdn.co/mp3-preview/9dc29ff47cbdda2d3c5a66b3fabf9c7420f62950?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:249gnXrbfmV8NG6jTEMSwD",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr",
									},
									href:
										"https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
									id: "7n2wHs1TKAczGzO7Dd2rGr",
									name: "Shawn Mendes",
									type: "artist",
									uri:
										"spotify:artist:7n2wHs1TKAczGzO7Dd2rGr",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/3Lp4JKk2ZgNkybMRS3eZR5",
							},
							href:
								"https://api.spotify.com/v1/albums/3Lp4JKk2ZgNkybMRS3eZR5",
							id: "3Lp4JKk2ZgNkybMRS3eZR5",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27337a5a19e52f8260b3b158e55",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0237a5a19e52f8260b3b158e55",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485137a5a19e52f8260b3b158e55",
									width: 64,
								},
							],
							name: "Wonder",
							release_date: "2020-12-04",
							release_date_precision: "day",
							total_tracks: 14,
							type: "album",
							uri: "spotify:album:3Lp4JKk2ZgNkybMRS3eZR5",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr",
								},
								href:
									"https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
								id: "7n2wHs1TKAczGzO7Dd2rGr",
								name: "Shawn Mendes",
								type: "artist",
								uri: "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 172692,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USUM72018522" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/6ZuahEctZD6w75peme58hm",
						},
						href:
							"https://api.spotify.com/v1/tracks/6ZuahEctZD6w75peme58hm",
						id: "6ZuahEctZD6w75peme58hm",
						is_local: false,
						name: "Wonder",
						popularity: 71,
						preview_url:
							"https://p.scdn.co/mp3-preview/715d8f95e4922f4e520fd9c54a8bfddac4cfd2f9?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 2,
						type: "track",
						uri: "spotify:track:6ZuahEctZD6w75peme58hm",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/0eDvMgVFoNV3TpwtrVCoTj",
									},
									href:
										"https://api.spotify.com/v1/artists/0eDvMgVFoNV3TpwtrVCoTj",
									id: "0eDvMgVFoNV3TpwtrVCoTj",
									name: "Pop Smoke",
									type: "artist",
									uri:
										"spotify:artist:0eDvMgVFoNV3TpwtrVCoTj",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/7e7t0MCrNDcJZsPwUKjmOc",
							},
							href:
								"https://api.spotify.com/v1/albums/7e7t0MCrNDcJZsPwUKjmOc",
							id: "7e7t0MCrNDcJZsPwUKjmOc",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27377ada0863603903f57b34369",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0277ada0863603903f57b34369",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485177ada0863603903f57b34369",
									width: 64,
								},
							],
							name: "Shoot For The Stars Aim For The Moon",
							release_date: "2020-07-03",
							release_date_precision: "day",
							total_tracks: 19,
							type: "album",
							uri: "spotify:album:7e7t0MCrNDcJZsPwUKjmOc",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/0eDvMgVFoNV3TpwtrVCoTj",
								},
								href:
									"https://api.spotify.com/v1/artists/0eDvMgVFoNV3TpwtrVCoTj",
								id: "0eDvMgVFoNV3TpwtrVCoTj",
								name: "Pop Smoke",
								type: "artist",
								uri: "spotify:artist:0eDvMgVFoNV3TpwtrVCoTj",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK",
								},
								href:
									"https://api.spotify.com/v1/artists/5f7VJjfbwm532GiveGC0ZK",
								id: "5f7VJjfbwm532GiveGC0ZK",
								name: "Lil Baby",
								type: "artist",
								uri: "spotify:artist:5f7VJjfbwm532GiveGC0ZK",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk",
								},
								href:
									"https://api.spotify.com/v1/artists/4r63FhuTkUYltbVAg5TQnk",
								id: "4r63FhuTkUYltbVAg5TQnk",
								name: "DaBaby",
								type: "artist",
								uri: "spotify:artist:4r63FhuTkUYltbVAg5TQnk",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 190476,
						episode: false,
						explicit: true,
						external_ids: { isrc: "USUM72013355" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/0PvFJmanyNQMseIFrU708S",
						},
						href:
							"https://api.spotify.com/v1/tracks/0PvFJmanyNQMseIFrU708S",
						id: "0PvFJmanyNQMseIFrU708S",
						is_local: false,
						name: "For The Night (feat. Lil Baby & DaBaby)",
						popularity: 94,
						preview_url:
							"https://p.scdn.co/mp3-preview/e8fac9f119882713d6ffb6418be7c97e12b05197?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 3,
						type: "track",
						uri: "spotify:track:0PvFJmanyNQMseIFrU708S",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/77ziqFxp5gaInVrF2lj4ht",
									},
									href:
										"https://api.spotify.com/v1/artists/77ziqFxp5gaInVrF2lj4ht",
									id: "77ziqFxp5gaInVrF2lj4ht",
									name: "Sech",
									type: "artist",
									uri:
										"spotify:artist:77ziqFxp5gaInVrF2lj4ht",
								},
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m",
									},
									href:
										"https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
									id: "4VMYDCV2IEDYJArk749S6m",
									name: "Daddy Yankee",
									type: "artist",
									uri:
										"spotify:artist:4VMYDCV2IEDYJArk749S6m",
								},
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5",
									},
									href:
										"https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5",
									id: "1vyhD5VmyZ7KMfW5gqLgo5",
									name: "J Balvin",
									type: "artist",
									uri:
										"spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2O985DZAb4i6M6iu4HWqSX",
							},
							href:
								"https://api.spotify.com/v1/albums/2O985DZAb4i6M6iu4HWqSX",
							id: "2O985DZAb4i6M6iu4HWqSX",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27363d74fcb3aaafe8c16e62f9b",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0263d74fcb3aaafe8c16e62f9b",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485163d74fcb3aaafe8c16e62f9b",
									width: 64,
								},
							],
							name: "Relación (Remix)",
							release_date: "2020-09-04",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:2O985DZAb4i6M6iu4HWqSX",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/77ziqFxp5gaInVrF2lj4ht",
								},
								href:
									"https://api.spotify.com/v1/artists/77ziqFxp5gaInVrF2lj4ht",
								id: "77ziqFxp5gaInVrF2lj4ht",
								name: "Sech",
								type: "artist",
								uri: "spotify:artist:77ziqFxp5gaInVrF2lj4ht",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m",
								},
								href:
									"https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
								id: "4VMYDCV2IEDYJArk749S6m",
								name: "Daddy Yankee",
								type: "artist",
								uri: "spotify:artist:4VMYDCV2IEDYJArk749S6m",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5",
								},
								href:
									"https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5",
								id: "1vyhD5VmyZ7KMfW5gqLgo5",
								name: "J Balvin",
								type: "artist",
								uri: "spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7ltDVBr6mKbRvohxheJ9h1",
								},
								href:
									"https://api.spotify.com/v1/artists/7ltDVBr6mKbRvohxheJ9h1",
								id: "7ltDVBr6mKbRvohxheJ9h1",
								name: "ROSALÍA",
								type: "artist",
								uri: "spotify:artist:7ltDVBr6mKbRvohxheJ9h1",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/329e4yvIujISKGKz1BZZbO",
								},
								href:
									"https://api.spotify.com/v1/artists/329e4yvIujISKGKz1BZZbO",
								id: "329e4yvIujISKGKz1BZZbO",
								name: "Farruko",
								type: "artist",
								uri: "spotify:artist:329e4yvIujISKGKz1BZZbO",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 247308,
						episode: false,
						explicit: false,
						external_ids: { isrc: "QM9WM2000051" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/35UUpTmrcFXNIVIN26ujXl",
						},
						href:
							"https://api.spotify.com/v1/tracks/35UUpTmrcFXNIVIN26ujXl",
						id: "35UUpTmrcFXNIVIN26ujXl",
						is_local: false,
						name: "Relación - Remix",
						popularity: 93,
						preview_url:
							"https://p.scdn.co/mp3-preview/7ff3beb873e2fb8180d9964d51fcad2153ab4794?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:35UUpTmrcFXNIVIN26ujXl",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we",
									},
									href:
										"https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
									id: "6M2wZ9GZgrQXHCFfjv46we",
									name: "Dua Lipa",
									type: "artist",
									uri:
										"spotify:artist:6M2wZ9GZgrQXHCFfjv46we",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/5lKlFlReHOLShQKyRv6AL9",
							},
							href:
								"https://api.spotify.com/v1/albums/5lKlFlReHOLShQKyRv6AL9",
							id: "5lKlFlReHOLShQKyRv6AL9",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273b89488558163fc6c107f70ea",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02b89488558163fc6c107f70ea",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851b89488558163fc6c107f70ea",
									width: 64,
								},
							],
							name: "Future Nostalgia",
							release_date: "2020-03-27",
							release_date_precision: "day",
							total_tracks: 13,
							type: "album",
							uri: "spotify:album:5lKlFlReHOLShQKyRv6AL9",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we",
								},
								href:
									"https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
								id: "6M2wZ9GZgrQXHCFfjv46we",
								name: "Dua Lipa",
								type: "artist",
								uri: "spotify:artist:6M2wZ9GZgrQXHCFfjv46we",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk",
								},
								href:
									"https://api.spotify.com/v1/artists/4r63FhuTkUYltbVAg5TQnk",
								id: "4r63FhuTkUYltbVAg5TQnk",
								name: "DaBaby",
								type: "artist",
								uri: "spotify:artist:4r63FhuTkUYltbVAg5TQnk",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 203064,
						episode: false,
						explicit: false,
						external_ids: { isrc: "GBAHT2000942" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/5nujrmhLynf4yMoMtj8AQF",
						},
						href:
							"https://api.spotify.com/v1/tracks/5nujrmhLynf4yMoMtj8AQF",
						id: "5nujrmhLynf4yMoMtj8AQF",
						is_local: false,
						name: "Levitating (feat. DaBaby)",
						popularity: 81,
						preview_url:
							"https://p.scdn.co/mp3-preview/cc617f669fd1e3ee33a4ac0c66346fefd15286e7?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 12,
						type: "track",
						uri: "spotify:track:5nujrmhLynf4yMoMtj8AQF",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4GNC7GD6oZMSxPGyXy4MNB",
									},
									href:
										"https://api.spotify.com/v1/artists/4GNC7GD6oZMSxPGyXy4MNB",
									id: "4GNC7GD6oZMSxPGyXy4MNB",
									name: "Lewis Capaldi",
									type: "artist",
									uri:
										"spotify:artist:4GNC7GD6oZMSxPGyXy4MNB",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/5658aM19fA3JVwTK6eQX70",
							},
							href:
								"https://api.spotify.com/v1/albums/5658aM19fA3JVwTK6eQX70",
							id: "5658aM19fA3JVwTK6eQX70",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273fc2101e6889d6ce9025f85f2",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02fc2101e6889d6ce9025f85f2",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851fc2101e6889d6ce9025f85f2",
									width: 64,
								},
							],
							name: "Divinely Uninspired To A Hellish Extent",
							release_date: "2019-05-17",
							release_date_precision: "day",
							total_tracks: 12,
							type: "album",
							uri: "spotify:album:5658aM19fA3JVwTK6eQX70",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4GNC7GD6oZMSxPGyXy4MNB",
								},
								href:
									"https://api.spotify.com/v1/artists/4GNC7GD6oZMSxPGyXy4MNB",
								id: "4GNC7GD6oZMSxPGyXy4MNB",
								name: "Lewis Capaldi",
								type: "artist",
								uri: "spotify:artist:4GNC7GD6oZMSxPGyXy4MNB",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 182160,
						episode: false,
						explicit: false,
						external_ids: { isrc: "DEUM71807062" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf",
						},
						href:
							"https://api.spotify.com/v1/tracks/7qEHsqek33rTcFNT9PFqLf",
						id: "7qEHsqek33rTcFNT9PFqLf",
						is_local: false,
						name: "Someone You Loved",
						popularity: 90,
						preview_url:
							"https://p.scdn.co/mp3-preview/766ff3dba2d64b22de6c947cb08c75a6ff633612?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 4,
						type: "track",
						uri: "spotify:track:7qEHsqek33rTcFNT9PFqLf",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "album",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/4Uc8Dsxct0oMqx0P6i60ea",
									},
									href:
										"https://api.spotify.com/v1/artists/4Uc8Dsxct0oMqx0P6i60ea",
									id: "4Uc8Dsxct0oMqx0P6i60ea",
									name: "Conan Gray",
									type: "artist",
									uri:
										"spotify:artist:4Uc8Dsxct0oMqx0P6i60ea",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/2CMlkzFI2oDAy5MbyV7OV5",
							},
							href:
								"https://api.spotify.com/v1/albums/2CMlkzFI2oDAy5MbyV7OV5",
							id: "2CMlkzFI2oDAy5MbyV7OV5",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0288e3cda6d29b2552d4d6bc43",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485188e3cda6d29b2552d4d6bc43",
									width: 64,
								},
							],
							name: "Kid Krow",
							release_date: "2020-03-20",
							release_date_precision: "day",
							total_tracks: 12,
							type: "album",
							uri: "spotify:album:2CMlkzFI2oDAy5MbyV7OV5",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/4Uc8Dsxct0oMqx0P6i60ea",
								},
								href:
									"https://api.spotify.com/v1/artists/4Uc8Dsxct0oMqx0P6i60ea",
								id: "4Uc8Dsxct0oMqx0P6i60ea",
								name: "Conan Gray",
								type: "artist",
								uri: "spotify:artist:4Uc8Dsxct0oMqx0P6i60ea",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 198040,
						episode: false,
						explicit: false,
						external_ids: { isrc: "USUM71924264" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/4xqrdfXkTW4T0RauPLv3WA",
						},
						href:
							"https://api.spotify.com/v1/tracks/4xqrdfXkTW4T0RauPLv3WA",
						id: "4xqrdfXkTW4T0RauPLv3WA",
						is_local: false,
						name: "Heather",
						popularity: 93,
						preview_url:
							"https://p.scdn.co/mp3-preview/a9bc6c86e6d667590cb7e9e73b750f364431f762?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 10,
						type: "track",
						uri: "spotify:track:4xqrdfXkTW4T0RauPLv3WA",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
									},
									href:
										"https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
									id: "0tmwSHipWxN12fsoLcFU3B",
									name: "Manuel Turizo",
									type: "artist",
									uri:
										"spotify:artist:0tmwSHipWxN12fsoLcFU3B",
								},
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/1mcTU81TzQhprhouKaTkpq",
									},
									href:
										"https://api.spotify.com/v1/artists/1mcTU81TzQhprhouKaTkpq",
									id: "1mcTU81TzQhprhouKaTkpq",
									name: "Rauw Alejandro",
									type: "artist",
									uri:
										"spotify:artist:1mcTU81TzQhprhouKaTkpq",
								},
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/7iK8PXO48WeuP03g8YR51W",
									},
									href:
										"https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W",
									id: "7iK8PXO48WeuP03g8YR51W",
									name: "Myke Towers",
									type: "artist",
									uri:
										"spotify:artist:7iK8PXO48WeuP03g8YR51W",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/61qU7ompl7BKKGEgsbO4Ly",
							},
							href:
								"https://api.spotify.com/v1/albums/61qU7ompl7BKKGEgsbO4Ly",
							id: "61qU7ompl7BKKGEgsbO4Ly",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b273f26be6e9676de14803a525e2",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e02f26be6e9676de14803a525e2",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d00004851f26be6e9676de14803a525e2",
									width: 64,
								},
							],
							name: "La Nota",
							release_date: "2020-10-08",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:61qU7ompl7BKKGEgsbO4Ly",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
								},
								href:
									"https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
								id: "0tmwSHipWxN12fsoLcFU3B",
								name: "Manuel Turizo",
								type: "artist",
								uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/1mcTU81TzQhprhouKaTkpq",
								},
								href:
									"https://api.spotify.com/v1/artists/1mcTU81TzQhprhouKaTkpq",
								id: "1mcTU81TzQhprhouKaTkpq",
								name: "Rauw Alejandro",
								type: "artist",
								uri: "spotify:artist:1mcTU81TzQhprhouKaTkpq",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7iK8PXO48WeuP03g8YR51W",
								},
								href:
									"https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W",
								id: "7iK8PXO48WeuP03g8YR51W",
								name: "Myke Towers",
								type: "artist",
								uri: "spotify:artist:7iK8PXO48WeuP03g8YR51W",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 216107,
						episode: false,
						explicit: false,
						external_ids: { isrc: "QZDYA1800024" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/7ndTONDDRFGiPnnhOzOXxq",
						},
						href:
							"https://api.spotify.com/v1/tracks/7ndTONDDRFGiPnnhOzOXxq",
						id: "7ndTONDDRFGiPnnhOzOXxq",
						is_local: false,
						name: "La Nota",
						popularity: 92,
						preview_url:
							"https://p.scdn.co/mp3-preview/da7b5ae1882a0a5e3c017318c8f4deb83c32882d?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:7ndTONDDRFGiPnnhOzOXxq",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/2NjfBq1NflQcKSeiDooVjY",
									},
									href:
										"https://api.spotify.com/v1/artists/2NjfBq1NflQcKSeiDooVjY",
									id: "2NjfBq1NflQcKSeiDooVjY",
									name: "Tones And I",
									type: "artist",
									uri:
										"spotify:artist:2NjfBq1NflQcKSeiDooVjY",
								},
							],
							available_markets: ["AU", "NZ"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/31IDBea3eEs57a0joX6TjN",
							},
							href:
								"https://api.spotify.com/v1/albums/31IDBea3eEs57a0joX6TjN",
							id: "31IDBea3eEs57a0joX6TjN",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27338802659d156935ada63c9e3",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0238802659d156935ada63c9e3",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485138802659d156935ada63c9e3",
									width: 64,
								},
							],
							name: "Dance Monkey",
							release_date: "2019-05-10",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:31IDBea3eEs57a0joX6TjN",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/2NjfBq1NflQcKSeiDooVjY",
								},
								href:
									"https://api.spotify.com/v1/artists/2NjfBq1NflQcKSeiDooVjY",
								id: "2NjfBq1NflQcKSeiDooVjY",
								name: "Tones And I",
								type: "artist",
								uri: "spotify:artist:2NjfBq1NflQcKSeiDooVjY",
							},
						],
						available_markets: ["AU", "NZ"],
						disc_number: 1,
						duration_ms: 209754,
						episode: false,
						explicit: false,
						external_ids: { isrc: "QZES71982312" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/1rgnBhdG2JDFTbYkYRZAku",
						},
						href:
							"https://api.spotify.com/v1/tracks/1rgnBhdG2JDFTbYkYRZAku",
						id: "1rgnBhdG2JDFTbYkYRZAku",
						is_local: false,
						name: "Dance Monkey",
						popularity: 70,
						preview_url:
							"https://p.scdn.co/mp3-preview/7e70b1eb012b7589a6487169bcd6135889ce89aa?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:1rgnBhdG2JDFTbYkYRZAku",
					},
					video_thumbnail: { url: null },
				},
				{
					added_at: "1970-01-01T00:00:00Z",
					added_by: {
						external_urls: {
							spotify: "https://open.spotify.com/user/",
						},
						href: "https://api.spotify.com/v1/users/",
						id: "",
						type: "user",
						uri: "spotify:user:",
					},
					is_local: false,
					primary_color: null,
					track: {
						album: {
							album_type: "single",
							artists: [
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/6DgP9otnZw5z6daOntINxp",
									},
									href:
										"https://api.spotify.com/v1/artists/6DgP9otnZw5z6daOntINxp",
									id: "6DgP9otnZw5z6daOntINxp",
									name: "Joel Corry",
									type: "artist",
									uri:
										"spotify:artist:6DgP9otnZw5z6daOntINxp",
								},
								{
									external_urls: {
										spotify:
											"https://open.spotify.com/artist/7uMh23xWiuR7zsNkuNcm2G",
									},
									href:
										"https://api.spotify.com/v1/artists/7uMh23xWiuR7zsNkuNcm2G",
									id: "7uMh23xWiuR7zsNkuNcm2G",
									name: "MNEK",
									type: "artist",
									uri:
										"spotify:artist:7uMh23xWiuR7zsNkuNcm2G",
								},
							],
							available_markets: ["SE"],
							external_urls: {
								spotify:
									"https://open.spotify.com/album/5glfCPECXSHzidU6exW8wO",
							},
							href:
								"https://api.spotify.com/v1/albums/5glfCPECXSHzidU6exW8wO",
							id: "5glfCPECXSHzidU6exW8wO",
							images: [
								{
									height: 640,
									url:
										"https://i.scdn.co/image/ab67616d0000b27391e93c59bacfe819db9601eb",
									width: 640,
								},
								{
									height: 300,
									url:
										"https://i.scdn.co/image/ab67616d00001e0291e93c59bacfe819db9601eb",
									width: 300,
								},
								{
									height: 64,
									url:
										"https://i.scdn.co/image/ab67616d0000485191e93c59bacfe819db9601eb",
									width: 64,
								},
							],
							name: "Head & Heart (feat. MNEK)",
							release_date: "2020-07-03",
							release_date_precision: "day",
							total_tracks: 1,
							type: "album",
							uri: "spotify:album:5glfCPECXSHzidU6exW8wO",
						},
						artists: [
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/6DgP9otnZw5z6daOntINxp",
								},
								href:
									"https://api.spotify.com/v1/artists/6DgP9otnZw5z6daOntINxp",
								id: "6DgP9otnZw5z6daOntINxp",
								name: "Joel Corry",
								type: "artist",
								uri: "spotify:artist:6DgP9otnZw5z6daOntINxp",
							},
							{
								external_urls: {
									spotify:
										"https://open.spotify.com/artist/7uMh23xWiuR7zsNkuNcm2G",
								},
								href:
									"https://api.spotify.com/v1/artists/7uMh23xWiuR7zsNkuNcm2G",
								id: "7uMh23xWiuR7zsNkuNcm2G",
								name: "MNEK",
								type: "artist",
								uri: "spotify:artist:7uMh23xWiuR7zsNkuNcm2G",
							},
						],
						available_markets: ["SE"],
						disc_number: 1,
						duration_ms: 166028,
						episode: false,
						explicit: false,
						external_ids: { isrc: "UK4ZF2000305" },
						external_urls: {
							spotify:
								"https://open.spotify.com/track/6cx06DFPPHchuUAcTxznu9",
						},
						href:
							"https://api.spotify.com/v1/tracks/6cx06DFPPHchuUAcTxznu9",
						id: "6cx06DFPPHchuUAcTxznu9",
						is_local: false,
						name: "Head & Heart (feat. MNEK)",
						popularity: 93,
						preview_url:
							"https://p.scdn.co/mp3-preview/a860b3fe04f480539af5f08b3672bb2ecff71b6b?cid=774b29d4f13844c495f206cafdad9c86",
						track: true,
						track_number: 1,
						type: "track",
						uri: "spotify:track:6cx06DFPPHchuUAcTxznu9",
					},
					video_thumbnail: { url: null },
				},
			],
			limit: 100,
			next: null,
			offset: 0,
			previous: null,
			total: 50,
		},
		type: "playlist",
		uri: "spotify:playlist:37i9dQZEVXbMDoHDwVN2tF",
	};
}

export default DataSourceTest;
