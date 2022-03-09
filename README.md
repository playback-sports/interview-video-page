## Setup

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Overview

This app contains a single root page that displays a video element with a semi-opaque clickable overlay. On page load, the video is paused and muted.

## Task #1

To begin, let’s have the video play when the overlay is clicked.

## Task #2

Have the video playing? Great! Now let’s show a pause icon and pause the video on clicks while the video is playing.

## Task #3

This is cool, but it’s kind of annoying that the overlay is always showing. Let’s have the overlay only show when the user moves their mouse over the video, and auto-hide after 3 seconds.

## Task #4

If we’ve gotten this far, the root page component is getting a bit complex. Let’s pull the video player out into its own standalone component.

## Task #5

Finally, if this were a real user-facing page we might want to collect some data on how long users are watching for. In `pages/api` there’s a file called `watchTime.ts` that defines an endpoint where we can send info about how far a user has progressed in the video. Let’s send an update with the video’s current time every 10 seconds, but only while the video is playing.
