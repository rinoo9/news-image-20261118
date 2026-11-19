[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/rinoo9/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/rinoo9/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

# 18 November 2026 — One Day in Pictures

A front-page image summing up the world news of Wednesday, 18 November 2026: Trump lands in Shenzhen, greeted by Xi with a hug and shaking Putin's hand at the APEC banquet ahead of historic three-way talks on Thursday; Iran drones target US bases in Bahrain and Kuwait a day after US jets struck Qeshm Island, and the tanker Tara Gas is hit in the Strait of Hormuz; Ukraine's strikes collapse 900 feet of the Crimean Bridge's road span; Cyclone Akvan bears down on Andhra Pradesh; and Peltola's Alaska win — the first Alaska Native in the Senate — hands Democrats a 56–44 majority, their biggest gain since 1958. The footer ticker adds Nvidia's record $115.8bn quarter, Voyager 1 reaching one light-day, the US losing measles-free status, Ebola passing 11,000 cases in Congo, and India–Japan 2+2 talks opening in Tokyo.

## The image

`entry.png` (1024×1024, PNG) is a newspaper front page drawn for this day: a masthead naming the date, a Shenzhen skyline with the three leaders' flags, a lead story on Trump's arrival in Shenzhen, and four panels covering the Gulf, Ukraine, the cyclone and the US Senate, each with a short headline and summary so the day reads at a glance. Every story was re-verified against the day's reporting (20 Nov 2026): the Shenzhen greeting, the Gulf strikes and the Tara Gas tanker, the 900-foot bridge collapse, Akvan's forecast landfall, and Peltola's 50.1%–45.8% win.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` in the grader). It checks the file is a whole PNG of at most 1 MiB first, and both runs write byte-identical output.

## Entry

Built for the [make.fun bounty "Sum up 18 November's world news in one image"](https://make.fun/bounty/news-image-20261118).
