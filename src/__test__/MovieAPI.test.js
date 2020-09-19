import { getMovies, getMovieDetail } from './../util/MovieAPI';
import axios from 'axios';

describe("api test", () => {

    test("getMovies 테스트", async () => {

        axios.get = jest.fn().mockResolvedValue({
            "status": "ok",
            "status_message": "Query was successful",
            "data": {
                "movie_count": 20817,
                "limit": 1,
                "page_number": 1,
                "movies": [
                    {
                        "id": 21325,
                        "url": "https://yts.mx/movies/hellboy-animated-blood-and-iron-2007",
                        "imdb_code": "tt0817910",
                        "title": "Hellboy Animated: Blood and Iron",
                        "title_english": "Hellboy Animated: Blood and Iron",
                        "title_long": "Hellboy Animated: Blood and Iron (2007)",
                        "slug": "hellboy-animated-blood-and-iron-2007",
                        "year": 2007,
                        "rating": 6.8,
                        "runtime": 75,
                        "genres": [
                            "Action",
                            "Adventure",
                            "Animation",
                            "Family",
                            "Fantasy",
                            "Horror",
                            "Sci-Fi"
                        ],
                        "summary": "In 1939, young Professor Bruttenholm destroyed Erzsebet Ondrushko (Kath Soucie), a female vampire who bathed in the blood of innocents to stay young. Now someone in upstate New York is trying to bring her back, and the elderly Professor Broom (Sir John Hurt) has decided to investigate it himself. He takes the top B.P.R.D. Agents, Hellboy (Ron Perlman), Liz Sherman (Selma Blair), and Abe Sapien (Doug Jones), who are more worried about his welfare than the return of any vampire. Their tune changes when they face a horde of ghosts, a phantom wolf pack, witches, harpies, a giant werewolf and Erzsebet. Hellboy ends up battling the Queen of Witches, the goddess Hecate (Cree Summer), who wants him to embrace his true destiny, a destiny that includes the destruction of mankind.",
                        "description_full": "In 1939, young Professor Bruttenholm destroyed Erzsebet Ondrushko (Kath Soucie), a female vampire who bathed in the blood of innocents to stay young. Now someone in upstate New York is trying to bring her back, and the elderly Professor Broom (Sir John Hurt) has decided to investigate it himself. He takes the top B.P.R.D. Agents, Hellboy (Ron Perlman), Liz Sherman (Selma Blair), and Abe Sapien (Doug Jones), who are more worried about his welfare than the return of any vampire. Their tune changes when they face a horde of ghosts, a phantom wolf pack, witches, harpies, a giant werewolf and Erzsebet. Hellboy ends up battling the Queen of Witches, the goddess Hecate (Cree Summer), who wants him to embrace his true destiny, a destiny that includes the destruction of mankind.",
                        "synopsis": "In 1939, young Professor Bruttenholm destroyed Erzsebet Ondrushko (Kath Soucie), a female vampire who bathed in the blood of innocents to stay young. Now someone in upstate New York is trying to bring her back, and the elderly Professor Broom (Sir John Hurt) has decided to investigate it himself. He takes the top B.P.R.D. Agents, Hellboy (Ron Perlman), Liz Sherman (Selma Blair), and Abe Sapien (Doug Jones), who are more worried about his welfare than the return of any vampire. Their tune changes when they face a horde of ghosts, a phantom wolf pack, witches, harpies, a giant werewolf and Erzsebet. Hellboy ends up battling the Queen of Witches, the goddess Hecate (Cree Summer), who wants him to embrace his true destiny, a destiny that includes the destruction of mankind.",
                        "yt_trailer_code": "_2uelrpovBs",
                        "language": "en",
                        "mpa_rating": "",
                        "background_image": "https://yts.mx/assets/images/movies/hellboy_animated_blood_and_iron_2007/background.jpg",
                        "background_image_original": "https://yts.mx/assets/images/movies/hellboy_animated_blood_and_iron_2007/background.jpg",
                        "small_cover_image": "https://yts.mx/assets/images/movies/hellboy_animated_blood_and_iron_2007/small-cover.jpg",
                        "medium_cover_image": "https://yts.mx/assets/images/movies/hellboy_animated_blood_and_iron_2007/medium-cover.jpg",
                        "large_cover_image": "https://yts.mx/assets/images/movies/hellboy_animated_blood_and_iron_2007/large-cover.jpg",
                        "state": "ok",
                        "torrents": [
                            {
                                "url": "https://yts.mx/torrent/download/2753E9B239FAEA1A9159A1E10F5CF3ED85D080E7",
                                "hash": "2753E9B239FAEA1A9159A1E10F5CF3ED85D080E7",
                                "quality": "720p",
                                "type": "bluray",
                                "seeds": 0,
                                "peers": 0,
                                "size": "700.24 MB",
                                "size_bytes": 734254858,
                                "date_uploaded": "2020-09-19 02:14:12",
                                "date_uploaded_unix": 1600474452
                            },
                            {
                                "url": "https://yts.mx/torrent/download/5BA19FADC8DA04515FD064B3C964166652D0B005",
                                "hash": "5BA19FADC8DA04515FD064B3C964166652D0B005",
                                "quality": "1080p",
                                "type": "bluray",
                                "seeds": 0,
                                "peers": 0,
                                "size": "1.41 GB",
                                "size_bytes": 1513975972,
                                "date_uploaded": "2020-09-19 03:50:21",
                                "date_uploaded_unix": 1600480221
                            }
                        ],
                        "date_uploaded": "2020-09-19 02:14:12",
                        "date_uploaded_unix": 1600474452
                    }
                ]
            },
            "@meta": {
                "server_time": 1600497771,
                "server_timezone": "CET",
                "api_version": 2,
                "execution_time": "0 ms"
            }
        })

        const user = await getMovieDetail({ "movie_id": 21258 })
        expect(user).toHaveProperty("status", "ok")
        expect(user).toHaveProperty("status_message", "Query was successful")
    })


    test("getMovieDetail 테스트", async () => {
        axios.get = jest.fn().mockResolvedValue({
            "status": "ok",
            "status_message": "Query was successful",
            "data": {
                "movie": {
                    "id": 21258,
                    "url": "https://yts.mx/movies/inescapable-2012",
                    "imdb_code": "tt1844203",
                    "title": "Inescapable",
                    "title_english": "Inescapable",
                    "title_long": "Inescapable (2012)",
                    "slug": "inescapable-2012",
                    "year": 2012,
                    "rating": 5.2,
                    "runtime": 93,
                    "genres": [
                        "Action",
                        "Drama",
                        "Mystery",
                        "Romance",
                        "Thriller"
                    ],
                    "download_count": 8989,
                    "like_count": 10,
                    "description_intro": "One afternoon, on a typical day at work, Adib is confronted with devastating news: His eldest daughter, Muna, has gone missing in Damascus. Now Adib, who has not been back in over 20 years, must return to Syria and deal with his secret past in order to find her. Inescapable is a thriller about a father's desperate search for his daughter and the chaos of the Middle East he left behind.",
                    "description_full": "One afternoon, on a typical day at work, Adib is confronted with devastating news: His eldest daughter, Muna, has gone missing in Damascus. Now Adib, who has not been back in over 20 years, must return to Syria and deal with his secret past in order to find her. Inescapable is a thriller about a father's desperate search for his daughter and the chaos of the Middle East he left behind.",
                    "yt_trailer_code": "YadOlYY_3ko",
                    "language": "en",
                    "mpa_rating": "R",
                    "background_image": "https://yts.mx/assets/images/movies/inescapable_2012/background.jpg",
                    "background_image_original": "https://yts.mx/assets/images/movies/inescapable_2012/background.jpg",
                    "small_cover_image": "https://yts.mx/assets/images/movies/inescapable_2012/small-cover.jpg",
                    "medium_cover_image": "https://yts.mx/assets/images/movies/inescapable_2012/medium-cover.jpg",
                    "large_cover_image": "https://yts.mx/assets/images/movies/inescapable_2012/large-cover.jpg",
                    "torrents": [
                        {
                            "url": "https://yts.mx/torrent/download/4528E9E597AC91C0AC2E1E085662760233603659",
                            "hash": "4528E9E597AC91C0AC2E1E085662760233603659",
                            "quality": "720p",
                            "type": "bluray",
                            "seeds": 99,
                            "peers": 45,
                            "size": "853.85 MB",
                            "size_bytes": 895326618,
                            "date_uploaded": "2020-09-17 02:14:09",
                            "date_uploaded_unix": 1600301649
                        },
                        {
                            "url": "https://yts.mx/torrent/download/2F6D22192AE563321BF3FB1CDE7453B1AFE0451D",
                            "hash": "2F6D22192AE563321BF3FB1CDE7453B1AFE0451D",
                            "quality": "1080p",
                            "type": "bluray",
                            "seeds": 93,
                            "peers": 40,
                            "size": "1.71 GB",
                            "size_bytes": 1836098519,
                            "date_uploaded": "2020-09-17 04:03:46",
                            "date_uploaded_unix": 1600308226
                        }
                    ],
                    "date_uploaded": "2020-09-17 02:14:09",
                    "date_uploaded_unix": 1600301649
                }
            },
            "@meta": {
                "server_time": 1600495890,
                "server_timezone": "CET",
                "api_version": 2,
                "execution_time": "0 ms"
            }
        })

        const detail = await getMovieDetail({ "movie_id": 21258 })
        expect(detail).toHaveProperty("status", "ok")
        expect(detail).toHaveProperty("status_message", "Query was successful")
    })


})

