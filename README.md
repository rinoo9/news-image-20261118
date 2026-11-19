[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/rinoo9/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/rinoo9/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

# 18 November 2026 — One Day in Pictures

A front-page image summing up the world news of Wednesday, 18 November 2026: Xi and Putin meet in Shenzhen as APEC opens and a three-way summit with Trump is set for Thursday, the US and Iran trade blows across the Gulf, Ukraine strikes the Crimean Bridge for a second day, Cyclone Akvan bears down on India, and Peltola's Alaska win hands Democrats a 56–44 Senate majority — plus the day's other headlines in the footer ticker.

## The image

`entry.png` (1024×1024, PNG) is a newspaper front page drawn for this day: a masthead naming the date, a Shenzhen skyline with the three leaders' flags, a lead story on the APEC summit, and four panels covering the Gulf, Ukraine, the cyclone and the US Senate, each with a short headline and summary so the day reads at a glance.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` in the grader). It checks the file is a whole PNG of at most 1 MiB first, and both runs write byte-identical output.

## Entry

Built for the [make.fun bounty "Sum up 18 November's world news in one image"](https://make.fun/bounty/news-image-20261118).
